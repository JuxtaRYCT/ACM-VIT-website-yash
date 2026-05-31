import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  const cloudflareEnv = context.locals.runtime?.env || {};
  
  return new Response(JSON.stringify({
    // Diagnostic checks (safely returns boolean only, never the secret value)
    hasGithubClientID: !!cloudflareEnv.KEYSTATIC_GITHUB_CLIENT_ID || !!process.env.KEYSTATIC_GITHUB_CLIENT_ID,
    hasGithubClientSecret: !!cloudflareEnv.KEYSTATIC_GITHUB_CLIENT_SECRET || !!process.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
    hasKeystaticSecret: !!cloudflareEnv.KEYSTATIC_SECRET || !!process.env.KEYSTATIC_SECRET,
    hasResendApiKey: !!cloudflareEnv.RESEND_API_KEY || !!process.env.RESEND_API_KEY,
    hasResendFrom: !!cloudflareEnv.RESEND_FROM || !!process.env.RESEND_FROM,
    
    // Explicit values for debugging config mismatches
    githubClientID: cloudflareEnv.KEYSTATIC_GITHUB_CLIENT_ID || process.env.KEYSTATIC_GITHUB_CLIENT_ID || 'undefined',
    repoOwner: cloudflareEnv.KEYSTATIC_GITHUB_REPO_OWNER || process.env.KEYSTATIC_GITHUB_REPO_OWNER || 'undefined',
    repoName: cloudflareEnv.KEYSTATIC_GITHUB_REPO_NAME || process.env.KEYSTATIC_GITHUB_REPO_NAME || 'undefined',

    // Runtime environment diagnostics
    nodeEnv: process.env.NODE_ENV || 'undefined',
    isProcessGlobalDefined: typeof process !== 'undefined',
    isProcessEnvDefined: typeof process !== 'undefined' && typeof process.env !== 'undefined',
    activeCloudflareBindings: Object.keys(cloudflareEnv)
  }, null, 2), {
    headers: { 'Content-Type': 'application/json' }
  });
};
