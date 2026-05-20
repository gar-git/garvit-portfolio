export const experience = {
  company: "AHAsolar Technologies Limited",
  /** Served from /public */
  companyLogoSrc: "/aha-solar-logo.png",
  companyLogoAlt: "AHA Solar logo",
  role: "Software Development Engineer",
  location: "Ahmedabad, India",
  tenure: "September 2023 – Present",
  /** Shown under the role line on the experience card */
  relatedProjects: [
    "PMT-2.0 · AHAsolar Project Management Tool",
    "Pradhan Mantri Surya Ghar",
  ],
  highlights: [
    {
      label: "Production scale",
      body: "Scaled full-stack backend systems serving 3.2M+ users—prioritizing reliability and sustained performance characteristics in production.",
    },
    {
      label: "Architecture",
      body: "Architected Node.js / Express services with layered controller → manager → data boundaries on MySQL to keep modules testable when surface area grows.",
    },
    {
      label: "API design",
      body: "Built REST APIs anchored in statelessness, idempotency, and fault-aware behavior (15K+ daily authenticated requests across high-touch workloads on the résumé).",
    },
    {
      label: "Validation & middleware",
      body: "Consolidated Joi-driven validation layers and reusable middleware to trim duplication across 15+ routed services while enforcing consistent request envelopes.",
    },
    {
      label: "Caching & latency",
      body: "Leveraged Redis-backed caching paired with iterative SQL tightening—the résumé cites ~60% latency improvements versus prior baselines alongside lighter database bursts.",
    },
    {
      label: "Ships & uptime",
      body: "Owned CI/CD-informed deployments plus AWS EC2 operational patterns with S3-backed storage and disciplined monitoring aiming for ~99.9% production uptime benchmarks.",
    },
  ],
} as const;

export const education = {
  school: "Vellore Institute of Technology",
  schoolLogoSrc: "/vit-logo.png",
  schoolLogoAlt: "Vellore Institute of Technology logo",
  degree: "Master of Computer Applications (MCA)",
  cgpa: "8.3",
  location: "Chennai, Tamil Nadu",
  tenure: "September 2022 – May 2024",
  note:
    "MCA work included applied ML and systems-minded coursework—the Indian Sign Language Recognition project listed under Projects is the same academic line of work summarized there.",
} as const;
