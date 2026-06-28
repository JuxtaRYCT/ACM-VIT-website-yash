export type EventDomain = 'tech' | 'design' | 'research' | 'management' | 'cc' | 'blog';

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  domain: EventDomain;
  description: string;
  location: string;
  /** Internal link for blog events. */
  href?: string;
}

export const DOMAIN_COLORS: Record<EventDomain, { bg: string; text: string; border: string; label: string; cassette: string }> = {
  tech:       { bg: 'rgba(155, 81, 224, 0.2)',  text: '#9B51E0', border: '#9B51E0', label: 'Tech',               cassette: '/cassettes/Cassette_Tech.webp' },
  design:     { bg: 'rgba(255, 0, 84, 0.2)', text: '#FF0054', border: '#FF0054', label: 'Design',             cassette: '/cassettes/Cassette_Design.webp' },
  research:   { bg: 'rgba(19, 93, 226, 0.2)', text: '#135DE2', border: '#135DE2', label: 'Research',           cassette: '/cassettes/Cassette_Research.webp' },
  management: { bg: 'rgba(0, 180, 180, 0.2)',   text: '#00B4B4', border: '#00B4B4', label: 'Management',         cassette: '/cassettes/Cassette_Management.webp' },
  cc:         { bg: 'rgba(180, 227, 91, 0.2)',   text: '#B4E35B', border: '#B4E35B', label: 'Competitive Coding', cassette: '/cassettes/Cassette_cc.webp' },
  blog:       { bg: 'rgba(249, 95, 74, 0.2)',    text: '#F95F4A', border: '#F95F4A', label: 'Blog Post',          cassette: '/cassettes/Cassette_Tech.webp' },
};

export const SAMPLE_EVENTS: CalendarEvent[] = [
  {
    id: '1', title: 'Code2Create', date: '2026-07-05',
    startTime: '10:00', endTime: '18:00', domain: 'tech',
    description: 'ACM-VIT\'s flagship 24-hour hackathon bringing together 500+ developers to build, innovate, and create.',
    location: 'Anna Auditorium, VIT Vellore',
  },
  {
    id: '2', title: 'Cryptic Hunt', date: '2026-07-12',
    startTime: '19:00', endTime: '22:00', domain: 'tech',
    description: 'An online treasure hunt combining cryptography, steganography, and logical puzzles.',
    location: 'Online',
  },
  {
    id: '3', title: 'Design Tapas', date: '2026-07-08',
    startTime: '16:00', endTime: '18:00', domain: 'design',
    description: 'A hands-on UI/UX workshop covering Figma fundamentals, design tokens, and component systems.',
    location: 'SJT Seminar Hall, VIT Vellore',
  },
  {
    id: '4', title: 'InspiHer Podcast', date: '2026-07-15',
    startTime: '17:00', endTime: '18:30', domain: 'management',
    description: 'ACM-W\'s flagship podcast series featuring women leaders in tech sharing their journeys and insights.',
    location: 'Online (YouTube Live)',
  },
  {
    id: '5', title: 'Summer Bootcamp', date: '2026-07-01',
    startTime: '10:00', endTime: '13:00', domain: 'tech',
    description: 'Week 1: Introduction to modern web development with React, Next.js, and Tailwind CSS.',
    location: 'GDN 128, VIT Vellore',
  },
  {
    id: '6', title: 'Summer Bootcamp', date: '2026-07-03',
    startTime: '10:00', endTime: '13:00', domain: 'tech',
    description: 'Week 1 continued: Building your first full-stack application with authentication.',
    location: 'GDN 128, VIT Vellore',
  },
  {
    id: '7', title: 'App Dev Workshop', date: '2026-07-10',
    startTime: '14:00', endTime: '17:00', domain: 'tech',
    description: 'Flutter crash course - from zero to deploying your first cross-platform mobile app.',
    location: 'SJT 302, VIT Vellore',
  },
  {
    id: '8', title: 'Research Paper Reading', date: '2026-07-17',
    startTime: '18:00', endTime: '19:30', domain: 'research',
    description: 'Weekly reading group discussing "Attention Is All You Need" and transformer architectures.',
    location: 'Online (Discord)',
  },
  {
    id: '9', title: 'Board Meeting', date: '2026-07-20',
    startTime: '20:00', endTime: '21:30', domain: 'management',
    description: 'Monthly board sync - event planning, budget review, and membership updates.',
    location: 'TT 623, VIT Vellore',
  },
  {
    id: '10', title: 'Forktober Prep', date: '2026-07-22',
    startTime: '16:00', endTime: '17:00', domain: 'tech',
    description: 'Planning session for Forktober - ACM-VIT\'s open source contribution drive.',
    location: 'SJT Seminar Hall, VIT Vellore',
  },
  {
    id: '11', title: 'CodArt', date: '2026-07-25',
    startTime: '15:00', endTime: '18:00', domain: 'design',
    description: 'Creative coding competition - blend algorithms and art using p5.js and generative techniques.',
    location: 'Anna Auditorium, VIT Vellore',
  },
  {
    id: '12', title: 'Code++', date: '2026-07-05',
    startTime: '14:00', endTime: '16:00', domain: 'cc',
    description: 'Competitive programming contest for beginners - solve algorithmic challenges and win prizes.',
    location: 'Online (HackerRank)',
  },
  {
    id: '13', title: 'The Neural Hack', date: '2026-07-18',
    startTime: '09:00', endTime: '21:00', domain: 'research',
    description: 'AI/ML focused hackathon - build intelligent solutions for real-world problems.',
    location: 'Anna Auditorium, VIT Vellore',
  },
  {
    id: '14', title: 'Reverse Coding', date: '2026-07-30',
    startTime: '19:00', endTime: '21:00', domain: 'cc',
    description: 'Given the output, figure out the code. A unique twist on competitive programming.',
    location: 'Online',
  },
  {
    id: '15', title: 'Hour of Code', date: '2026-06-28',
    startTime: '11:00', endTime: '13:00', domain: 'cc',
    description: 'Community outreach event introducing coding to non-CS students through fun, interactive challenges.',
    location: 'SJT Seminar Hall, VIT Vellore',
  },
];
