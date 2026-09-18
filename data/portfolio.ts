const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const portfolioData = {
  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    name: "Amine Barguellil",
    title: "Full Stack Developer | React | Node.js | DevOps | AI Enthusiast",
    intro:
      "I build production-ready products from interface to infrastructure — combining full-stack engineering, cloud, DevOps, and AI",
    availability:
      "Open to freelance work, and full-time opportunities where product quality, engineering discipline, and user experience all matter",
    location: "Tunis, Tunisia",
    cvHref: `${basePath}/Amine-Barguellil_En_Cv.pdf`,
    focusAreas: [
      "Designing recruiter-friendly product experiences with modern React and Next.js",
      "Shipping backend services and dashboards with Node.js, Express, and scalable APIs",
      "Exploring DevOps and cloud workflows with Docker, AWS and deployment automation",
    ],
    featuredStack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Spring Boot",
      "Docker",
      "AWS",
      "LLM / RAG",
    ],
    stats: [
      { value: "", label: "Full-Stack Product Engineering" },
      { value: "", label: "Cloud-Native Systems & Delivery" },
      { value: "", label: "AI & Intelligent Applications" },
    ],
  },
  about: {
    summary:
      "I care about how things work just as much as how they feel. My approach is to understand the problem first, make deliberate technical choices, and refine the result until every layer feels considered — from the interface and application logic to deployment and infrastructure",
    highlights: [
      {
        title: "Professional Summary",
        text: "Full-Stack Developer focused on building polished, scalable web experiences. I combine precise frontend implementation with solid backend and cloud foundations, turning complex designs into responsive, production-ready products. I care about clean architecture, performance, thoughtful interaction, and the details that make software feel finished",
      },
      {
        title: "Experience Focus",
        text: "I work across the full product lifecycle — from interface to infrastructure. My experience includes responsive web applications, internal platforms, APIs, cloud deployments, containerized environments, and infrastructure automation. I enjoy taking ownership of a feature end to end while keeping both user experience and engineering quality in focus",
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Spring Boot",
      "Docker",
      "Kubernetes",
      "AWS",
      "PostgreSQL",
      "MySql",
      "MongoDB",
      "Python",
      "Angular",
      "Shadcn UI",
      "Terraform",
    ],
  },
  skillCategories: [
    {
      title: "Frontend",
      description:
        "Responsive interfaces, clean component systems, and modern UI implementation for product-focused applications and dashboards",
      level: 92,
      skills: [
        "React",
        "Next.js",
        "Angular",
        "TypeScript",
        "Tailwind CSS",
        "ShadCN UI",
        "Vite",
        "Figma",
      ],
    },
    {
      title: "Backend",
      description:
        "API design, business logic, authentication flows, and service integration for robust end-to-end applications",
      level: 87,
      skills: [
        "Node.js",
        "Express",
        "Spring Boot",
        "FastAPI",
        "Flask",
        "Django REST",
        "REST APIs",
        "Microservices",
        "Kafka",
      ],
    },
    {
      title: "Cloud & DevOps",
      description:
        "Cloud and deployment workflows with containerization, platform services, and production-ready practices",
      level: 79,
      skills: [
        "AWS",
        "Azure",
        "Hetzner Cloud",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Ansible",
        "Jenkins",
        "GitHub Actions",
        "Helm",
        "CI/CD",
        "Cloudflare",
      ],
    },
    {
      title: "Database",
      description:
        "Working with relational and document databases, focusing on performance and reliable data storage",
      level: 84,
      skills: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Firebase",
        "Redis",
        "Prisma",
        "ChromaDB",
      ],
    },
    {
      title: "AI & MLOps",
      description:
        "Building AI-powered features using Python, machine learning, retrieval-augmented generation, and large language models",
      level: 74,
      skills: [
        "LangChain",
        "RAG",
        "Gemini AI",
        "Ollama",
        "Groq",
        "MCP",
        "LightGBM",
        "MLflow",
        "DVC",
        "Tavily",
      ],
    },
    {
      title: "Security & Quality",
      description:
        "Authentication, testing, observability, and code-quality practices that keep applications secure and maintainable",
      level: 81,
      skills: [
        "Keycloak",
        "Clerk",
        "JWT",
        "SonarQube",
        "Jest",
        "JUnit",
        "Mockito",
        "Postman",
        "Prometheus",
        "Grafana",
        "Nexus",
      ],
    },
  ],
  projects: [
    {
      title: "Industrial Operations Management Platform",
      description:
        "Built and evolved an industrial operations platform featuring KPI dashboards, 8D problem-solving workflows, Jira synchronization, multilingual support, notifications, and real-time collaboration. Developed full-stack features with Next.js, Node.js, PostgreSQL, and microservices while improving Redis caching, test coverage, code quality, performance, and production reliability",
      technologies: [
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "Microservices",
        "Jest",
        "SonarQube",
        "Docker",
        "CI/CD",
        "Cloudflare",
      ],
      demoHref: "https://demo.octam.io/",
    },
    {
      title: "Multi-Agent AI Research Orchestrator",
      description:
        "Built a multi-agent AI research platform using LangChain, Groq, and Tavily, orchestrating Search, Scrape, Writer, and Critic agents to generate structured research reports. Developed the API with FastAPI, containerized it with Docker, and automated deployment to Azure using Terraform, Ansible, and Azure Container Registry",
      technologies: [
        "Python",
        "LangChain",
        "Groq",
        "Tavily",
        "FastAPI",
        "Docker",
        "Azure",
        "Terraform",
        "Ansible",
        "Azure Container Registry",
      ],
      githubHref:
        "https://github.com/AmineBarguellil7/LangChain-MultiAgent-Orchestrator",
    },
    {
      title: "YouTube Sentiment Analysis — End-to-End MLOps",
      description:
        "Built an end-to-end MLOps system for real-time YouTube comment sentiment analysis using LightGBM, Flask, and a Chrome extension. Automated deployment with GitHub Actions and a self-hosted AWS EC2 runner, containerized the inference API with Docker, versioned data and models using DVC and S3, and tracked experiments with MLflow",
      technologies: [
        "Python",
        "LightGBM",
        "Flask",
        "MLflow",
        "Docker",
        "AWS EC2",
        "AWS S3",
        "GitHub Actions",
        "DVC",
        "Chrome Extension",
      ],
      githubHref:
        "https://github.com/AmineBarguellil7/youtube_sentiment_analysis",
    },
    {
      title: "Interviews Copilot",
      description:
        "Built an AI-powered interview simulator that generates personalized interview questions and real-time feedback using the Gemini API. Developed the application with React, TypeScript, Firebase, Vite, and Tailwind CSS using a serverless architecture and a responsive interface for customized mock interviews",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "ShadCN UI",
        "Firebase",
        "Vite",
        "Clerk",
        "Gemini AI",
      ],
      githubHref: undefined,
      demoHref: "https://ai-interview-simulator-app.web.app/",
    },
    {
      title: "Cloud-Native Microservices Platform",
      description:
        "Refactored and integrated four Spring Boot microservices into a cloud-native architecture using Apache Kafka for service communication. Built a CI/CD pipeline for automated testing, builds, and deployment, and deployed the application on AWS with Angular, Spring Boot, Keycloak, Kubernetes, Docker, Helm, and MySQL",
      technologies: [
        "Angular",
        " Spring Boot",
        "MySQL",
        "Docker",
        "Kubernetes",
        "Helm",
        "Kafka",
        "Keycloak",
        "Jenkins",
        "Aws",
        "Junit",
        "Mockito",
      ],
      githubHref: "https://github.com/AmineBarguellil7/master-data",
      demoHref: undefined,
    },
  ],
  experience: [
    {
      period: "August 2024 - Present",
      title: "DevOps Engineer",
      organization: "SafeSphere",
      highlights: [
        "Develop and maintain industrial web applications using Next.js, Node.js, PostgreSQL, and microservices architectures, delivering scalable and high-performance solutions aligned with business requirements",
        "Design and optimize DevOps workflows including Docker-based containerization, CI/CD automation, cloud deployment on Hetzner Cloud, Cloudflare integration, and infrastructure management",
        "Implement production features including KPI dashboards, 8D problem-solving workflows, Jira integration, email notifications, multilingual support, and real-time collaboration tools",
      ],
    },

    {
      period: "February 2024 - July 2024",
      title: "Final Year Project Intern - DevOps Intern",
      organization: "Scheidt & Bachmann Maghreb S.A.R.L",
      highlights: [
        "Deployed a cloud-native parking web application on AWS using Angular, Spring Boot, Keycloak, Apache Kafka, and MySQL",
        "Built a complete CI/CD pipeline to automate testing, build, and deployment processes",
        "Refactored and integrated Spring Boot microservices to improve performance, maintainability, and system integration",
        "Managed communication between four microservices using Apache Kafka within a unified application architecture",
      ],
    },

    {
      period: "June 2023 - August 2023",
      title: "Summer Intern - Web Developer",
      organization: "Smart For Green",
      highlights: [
        "Developed practical experience with React.js, Django REST Framework, Docker, Jenkins, and SonarQube",
        "Contributed to a full-stack application integrating React with Django REST Framework and PostgreSQL",
        "Worked with modern development and DevOps practices to improve code quality, deployment workflows, and application reliability",
      ],
    },
  ],
  certifications: [
    {
      name: "CKA: Certified Kubernetes Administrator",
      issuer: "The Linux Foundation",
      status: "Completed",
    },

    {
      name: "Oracle Agentic AI Certified Foundations Associate",
      issuer: "Oracle",
      status: "Completed",
    },

    {
      name: "Copado AI Certification",
      issuer: "Copado",
      status: "Completed",
    },

    {
      name: "Machine Learning in Python",
      issuer: "365 Data Science",
      status: "Completed",
    },
  ],
  contact: {
    email: "amine.barguellil@esprit.tn",
    emailHref: "mailto:amine.barguellil@esprit.tn",
    linkedinHref: "https://www.linkedin.com/in/amine-barguellil",
    githubHref: "https://github.com/AmineBarguellil7",
    location: "Tunisia",
    intro:
      "I'm open to software engineering opportunities across full-stack, cloud, DevOps, and AI. If you're building something ambitious and need someone who can take it from interface to infrastructure, let's talk",
  },
} as const;
