import type { APIRoute } from "astro";

export const prerender = false;

const LEETCODE_GRAPHQL_URL = "https://leetcode.com/graphql/";
const PAGE_LIMIT = 50;
const MAX_PAGES = 40;

type LeetCodeTag = {
  name: string;
  nameTranslated?: string;
  slug: string;
};

type LeetCodeQuestion = {
  translatedTitle: string | null;
  frontendId: string;
  title: string;
  titleSlug: string;
  difficulty: string;
  lastSubmittedAt: string | null;
  numSubmitted: number;
  questionStatus: string | null;
  lastResult: string | null;
  topicTags: LeetCodeTag[];
};

type ProgressPage = {
  userProgressQuestionList: {
    totalNum: number;
    questions: LeetCodeQuestion[];
  };
};

type UserStatusData = {
  userStatus?: {
    username?: string;
    isSignedIn?: boolean;
  };
};

type ProfileData = {
  matchedUser?: unknown;
};

const progressQuery = `
  query userProgressQuestionList($filters: UserProgressQuestionListInput) {
    userProgressQuestionList(filters: $filters) {
      totalNum
      questions {
        translatedTitle
        frontendId
        title
        titleSlug
        difficulty
        lastSubmittedAt
        numSubmitted
        questionStatus
        lastResult
        topicTags {
          name
          nameTranslated
          slug
        }
      }
    }
  }
`;

const userStatusQuery = `
  query userStatus {
    userStatus {
      username
      isSignedIn
    }
  }
`;

const profileQuery = `
  query userPublicProfile($username: String!) {
    matchedUser(username: $username) {
      username
      githubUrl
      twitterUrl
      linkedinUrl
      profile {
        ranking
        userAvatar
        realName
        aboutMe
        school
        websites
        countryName
        company
        jobTitle
        skillTags
        reputation
        solutionCount
      }
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
        totalSubmissionNum {
          difficulty
          count
          submissions
        }
      }
      languageProblemCount {
        languageName
        problemsSolved
      }
      tagProblemCounts {
        advanced {
          tagName
          tagSlug
          problemsSolved
        }
        intermediate {
          tagName
          tagSlug
          problemsSolved
        }
        fundamental {
          tagName
          tagSlug
          problemsSolved
        }
      }
    }
  }
`;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });

const cleanCookieValue = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

const getGraphQLError = (payload: unknown) => {
  if (
    payload &&
    typeof payload === "object" &&
    "errors" in payload &&
    Array.isArray(payload.errors)
  ) {
    return payload.errors
      .map((error) =>
        error && typeof error === "object" && "message" in error
          ? String(error.message)
          : "Unknown LeetCode GraphQL error"
      )
      .join("; ");
  }

  return null;
};

const leetcodeQuery = async <T>(
  cookieHeader: string,
  csrfToken: string,
  body: Record<string, unknown>
): Promise<T> => {
  const response = await fetch(LEETCODE_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Cookie: cookieHeader,
      "X-CSRFToken": csrfToken,
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36",
      Referer: "https://leetcode.com/problemset/",
    },
    body: JSON.stringify(body),
  });

  const text = await response.text();
  let payload: unknown;

  try {
    payload = JSON.parse(text);
  } catch {
    throw new Error(
      `LeetCode returned non-JSON response (${response.status}). Sign in again and refresh the session values.`
    );
  }

  if (!response.ok) {
    throw new Error(
      getGraphQLError(payload) ??
        `LeetCode request failed with status ${response.status}.`
    );
  }

  const graphQLError = getGraphQLError(payload);
  if (graphQLError) {
    throw new Error(graphQLError);
  }

  if (!payload || typeof payload !== "object" || !("data" in payload)) {
    throw new Error("LeetCode response did not include data.");
  }

  return payload.data as T;
};

const isSolvedQuestion = (question: LeetCodeQuestion) =>
  question.questionStatus?.toUpperCase() === "SOLVED" ||
  question.lastResult?.toUpperCase() === "AC";

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return json({ message: "Expected a JSON request body." }, 400);
  }

  const leetcodeSession = cleanCookieValue(body.leetcodeSession);
  const csrfToken = cleanCookieValue(body.csrfToken);

  if (!leetcodeSession || !csrfToken) {
    return json(
      {
        message:
          "Provide both LEETCODE_SESSION and csrftoken from your own signed-in LeetCode session.",
      },
      400
    );
  }

  const cookieHeader = `LEETCODE_SESSION=${leetcodeSession}; csrftoken=${csrfToken}`;

  try {
    let username: string | undefined;

    try {
      const statusData = await leetcodeQuery<UserStatusData>(
        cookieHeader,
        csrfToken,
        {
          operationName: "userStatus",
          query: userStatusQuery,
          variables: {},
        }
      );

      username = statusData.userStatus?.username;

      if (statusData.userStatus && statusData.userStatus.isSignedIn === false) {
        return json(
          {
            message:
              "LeetCode did not accept this session. Sign in again and copy fresh values.",
          },
          401
        );
      }
    } catch {
      username = undefined;
    }

    const questions: LeetCodeQuestion[] = [];
    let totalNum = 0;
    let skip = 0;
    let pages = 0;

    while (pages < MAX_PAGES) {
      const pageData = await leetcodeQuery<ProgressPage>(
        cookieHeader,
        csrfToken,
        {
          operationName: "userProgressQuestionList",
          query: progressQuery,
          variables: {
            filters: {
              skip,
              limit: PAGE_LIMIT,
            },
          },
        }
      );

      const page = pageData.userProgressQuestionList;
      const pageQuestions = page.questions ?? [];
      totalNum = page.totalNum ?? totalNum;

      questions.push(...pageQuestions);

      if (pageQuestions.length === 0) break;

      skip += pageQuestions.length;
      pages += 1;

      if (totalNum > 0 && skip >= totalNum) break;
    }

    const solvedQuestions = questions.filter(isSolvedQuestion);

    let profile: unknown = null;
    if (username) {
      try {
        const profileData = await leetcodeQuery<ProfileData>(
          cookieHeader,
          csrfToken,
          {
            operationName: "userPublicProfile",
            query: profileQuery,
            variables: { username },
          }
        );
        profile = profileData.matchedUser ?? null;
      } catch {
        profile = null;
      }
    }

    return json({
      username: username ?? null,
      importedAt: new Date().toISOString(),
      progress: {
        totalProgressQuestions: totalNum,
        fetchedProgressQuestions: questions.length,
        solvedQuestions: solvedQuestions.length,
        pageSize: PAGE_LIMIT,
        pagesFetched: pages,
      },
      profile,
      questions: solvedQuestions,
    });
  } catch (error) {
    return json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Failed to fetch LeetCode progress.",
      },
      502
    );
  }
};
