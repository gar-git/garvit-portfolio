export const site = {
  name: "Garvit Sharma",
  title: "Software Development Engineer · Backend & Systems",
  tagline:
    "Designing and scaling layered Node.js backends and REST APIs—Redis-backed performance, idempotent workflows, and production uptime at real user scale.",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/in/garvit-sharma26",
  gitlab: process.env.NEXT_PUBLIC_GITLAB_URL ?? "https://gitlab.com/garvit-sharma",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "mailto:sharma7garvit@gmail.com",
  phoneDisplay: "+91 7742478769",
  phoneHref: "tel:+917742478769",
  resumePath: "/resume.pdf",
} as const;
