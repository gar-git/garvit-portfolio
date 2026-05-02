export const experience = {
  company: "AHA Solar Technologies Limited",
  /** Served from /public */
  companyLogoSrc: "/aha-solar-logo.png",
  companyLogoAlt: "AHA Solar logo",
  role: "Software Development Engineer",
  location: "Ahmedabad, India",
  tenure: "September 2023 – Present",
  highlights: [
    "Scaled full-stack backend systems serving 3.2M+ users—prioritizing reliability and sustained performance characteristics in production.",
    "Architected Node.js / Express services with layered controller → manager → data boundaries on MySQL to keep modules testable when surface area grows.",
    "Built REST APIs anchored in statelessness, idempotency, and fault-aware behavior (15K+ daily authenticated requests across high-touch workloads on the résumé).",
    "Consolidated Joi-driven validation layers and reusable middleware to trim duplication across 15+ routed services while enforcing consistent request envelopes.",
    "Leveraged Redis-backed caching paired with iterative SQL tightening—the résumé cites ~60% latency improvements versus prior baselines alongside lighter database bursts.",
    "Owned CI/CD-informed deployments plus AWS EC2 operational patterns with S3-backed storage and disciplined monitoring aiming for ~99.9% production uptime benchmarks.",
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
} as const;
