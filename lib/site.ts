export const site = {
  name: "Garvit Sharma",
  title: "Software Development Engineer · Backend & Systems",
  tagline:
    "I build Node.js backends and REST APIs, focused on maintainable services and predictable behavior in production.",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/in/garvit-sharma26",
  gitlab: process.env.NEXT_PUBLIC_GITLAB_URL ?? "https://gitlab.com/garvit-sharma",
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/gar-git",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "mailto:sharma7garvit@gmail.com",
  resumePath: "/resume.pdf",
} as const;
