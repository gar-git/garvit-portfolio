export const skillGroups = [
  {
    group: "Languages",
    items: ["JavaScript", "SQL"],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT authentication",
      "RBAC",
      "Cron & async pipelines",
      "FastAPI",
      "Validation (Joi-style patterns)",
    ],
  },
  {
    group: "Databases",
    items: ["MySQL", "PostgreSQL", "Redis", "Schema design", "Query optimization"],
  },
  {
    group: "Cloud & Delivery",
    items: ["AWS (EC2, S3)", "Docker", "CI/CD", "Git", "GitHub", "GitLab"],
  },
  {
    group: "Frontend (where APIs surface)",
    items: ["React.js", "Redux"],
  },
  {
    group: "Practices",
    items: [
      "Agile delivery",
      "Layered architecture",
      "System design",
      "Performance tuning",
      "Monitoring & uptime discipline",
    ],
  },
  {
    group: "Research / ML tooling",
    items: ["OpenCV", "TensorFlow", "CNN experimentation"],
  },
] as const;
