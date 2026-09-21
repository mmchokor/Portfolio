export type Experience = { company: string; role: string; period: string; location: string; summary: string; groups: { title: string; items: string[] }[]; technologies: string[] };

export const profile = { name: "Mohamed Chokor", role: "Software Engineer", location: "Beirut, Lebanon", email: "mmchokor@gmail.com", github: "https://github.com/mmchokor", linkedin: "https://www.linkedin.com/in/mohamedhammoudchokor/", resume: "/Mohamed-Chokor-Resume.pdf" };

export const experiences: Experience[] = [
  {
    company: "STC Services", role: "Software Engineer", period: "Sep 2023 — Present", location: "Remote / Dubai, UAE",
    summary: "Backend engineering for an enterprise digital identity platform spanning access, attendance, visitors, maintenance, work orders, reporting, notifications, and multi-tenant workflows.",
    groups: [
      { title: "Platform engineering", items: [
        "Build .NET 8 APIs and services for facility access, attendance, visitor management, maintenance requests, work orders, and contractor and technician workflows.",
        "Delivered attendance and work-order functionality with Clean Architecture, CQRS, MediatR, repository abstractions, EF Core, SQL Server, migrations, and REST APIs.",
        "Design backend modules end to end—from requirements and technical discussions through DTOs, commands, queries, repositories, schema changes, controllers, and integration points.",
        "Contributed reusable packages for logging, file uploads, email, notifications, shared DTOs, permissions, and Outlook integration.",
        "Helped separate core, identity, notification, reporting, and workflow concerns for deployment isolation, reusable functionality, and reduced reporting load on core services."
      ] },
      { title: "Asset Management ownership", items: [
        "Owned the backend module from requirements and design through implementation and QA support using .NET 8, ASP.NET Core, modular-monolith boundaries, CQRS-style separation, EF Core, and SQL Server.",
        "Implemented asset and category management, configurable custom attributes, lifecycle, status and location rules, history and audit views, work-order integration, and dashboard and detail queries.",
        "Built tracking-device inventory and pairing workflows with active-pairing uniqueness, pairing history, site-scoped authorization, and granular permissions.",
        "Delivered Excel templates and import/export flows with validation, duplicate checks, row-level errors, filtering, pagination, and RowVersion concurrency handling."
      ] },
      { title: "Security, integrations & delivery", items: [
        "Implemented Redis-backed JWT revocation and session-version validation with StackExchange.Redis, enabling individual or user-wide token invalidation without calling the Identity Service on every authenticated request.",
        "Integrated jti and SessionVersion claims with ASP.NET Core OnTokenValidated checks, async Redis operations, configurable TTLs, key prefixes, claim requirements, and fail-open or fail-closed behavior.",
        "Contributed to permission-based authorization and UAE Pass authentication; independently integrated Outlook calendar APIs.",
        "Built SignalR backend flows for real-time location persistence, map broadcasting, and restricted-area alerts using GPS, beacon, and RFID-style signals.",
        "Integrated a Python/Dlib facial-recognition service with .NET APIs for identity verification, attendance validation, and facility presence tracking.",
        "Configured Azure DevOps pipelines for App Services and IIS-hosted Azure VMs, automating restore, build, available tests, artifacts, and deployment in place of manual file-copy releases."
      ] }
    ],
    technologies: ["C#", ".NET 8", "ASP.NET Core", "EF Core", "SQL Server", "Redis", "Azure", "SignalR"]
  },
  {
    company: "Digital Revamp", role: "Part-Time Full Stack Developer", period: "Apr 2023 — Aug 2024", location: "Remote / Fanar, Lebanon",
    summary: "Worked on an internal timesheet, HR, project-tracking, and reporting platform used by approximately 50–100 employees.",
    groups: [{ title: "Selected work", items: [
      "Replaced Excel and manual processes with centralized workflows, including vacation submission, multi-level approval, HR visibility, and a company calendar.",
      "Enhanced project-linked timesheet rules, approval limits, payable-hours logic, and reports for employee hours, departments, projects, clients, payroll, and billing.",
      "Helped migrate a .NET 5 MVC/Razor application toward .NET 8 REST APIs and an Angular frontend while supporting the existing Razor, jQuery, Bootstrap, JavaScript, and AJAX application."
    ] }], technologies: ["C#", "ASP.NET Core", "EF Core", "SQL Server", "Angular", "Razor", "jQuery"]
  },
  {
    company: "CME", role: "Software Engineer Intern", period: "Jun 2023 — Jul 2023", location: "Beirut, Lebanon",
    summary: "Built a production-style trip-planning application in a three-intern team and demonstrated it to senior company leadership.",
    groups: [{ title: "Selected work", items: [
      "Contributed backend-heavy features across users, profiles, roles, authentication, waypoints, locations, and recommendations using NestJS, Firebase, MongoDB, HERE, and Yelp APIs.",
      "Implemented React and TypeScript routing, waypoint selection, search, and location cards, plus Cypress E2E and Jest backend/API tests."
    ] }], technologies: ["React", "TypeScript", "NestJS", "Firebase", "MongoDB", "Cypress", "Jest"]
  }
];

export const skills = [
  { category: "Backend", items: ["C#", ".NET 8", "ASP.NET Core Web API", "ASP.NET Core MVC", "REST APIs", "Entity Framework Core", "Clean Architecture", "CQRS", "MediatR", "Microservices", "Repository Pattern", "Authentication / Authorization", "JWT", "SignalR"] },
  { category: "Cloud & DevOps", items: ["Azure App Services", "Azure VMs", "Azure DevOps Pipelines", "Azure Artifacts", "Application Insights", "IIS", "CI/CD", "Docker", "Linux", "Git", "Azure Repos / GitHub"] },
  { category: "Data", items: ["SQL Server", "PostgreSQL", "MongoDB", "Redis / StackExchange.Redis", "Schema design", "Migrations", "Query optimization"] },
  { category: "Frontend", items: ["Angular", "React", "JavaScript / TypeScript", "HTML / CSS", "Bootstrap", "jQuery"] },
  { category: "Testing & Additional", items: ["Unit testing", "API / integration testing", "Cypress", "Jest", "Python — Dlib integration", "Java fundamentals"] }
];

export const education = { degree: "Bachelor of Science in Computer Science", school: "Beirut Arab University", year: "2023", details: ["GPA 3.7 / 4.0 · Honors", "Student Representative / Faculty of Science liaison"] };
export const universityProject = { name: "Badde Salemtak", description: "A mobile application connecting Lebanese residents with travelers visiting Lebanon, allowing residents to request products that are difficult to obtain locally.", technologies: ["React Native", "Node.js", "Express.js", "MongoDB", "AWS S3"], demo: "https://badde-salemtak-senior-project-website.vercel.app/", repositories: ["https://github.com/mmchokor/Badde-Salemtak--Senior-Project--Website", "https://github.com/mmchokor/Badde-Salemtak--Senior-Project--Backend", "https://github.com/mmchokor/Badde-Salemtak--Senior-Project"] };
