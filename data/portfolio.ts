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
      "I build responsive interfaces, backend services, and cloud-ready workflows with a strong focus on clarity, maintainability, and polished user experience",
    availability:
      "Open to freelance work, and full-time opportunities where product quality, engineering discipline, and user experience all matter.",
    location: "Tunisia",
    cvHref: `${basePath}/Amine-Barguellil_En_Cv.pdf`,
    focusAreas: [
      "Designing recruiter-friendly product experiences with modern React and Next.js.",
      "Shipping backend services and dashboards with Node.js, Express, and scalable APIs.",
      "Exploring DevOps and cloud workflows with Docker, AWS and deployment automation.",
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
      { value: "", label: "Engineering Excellence & Best Practices" },
      { value: "", label: "Scalable Real-World Applications" },
      { value: "", label: "End-to-End Product Showcase" },
    ],
  },
  about: {
    summary:
      "I am a full-stack developer focused on building modern, reliable web apps that balance strong engineering with elegant interface design. This section highlights the technologies I use with confidence.",
    highlights: [
      {
        title: "Professional Summary",
        text: "Full-stack developer focused on building reliable, scalable web applications with thoughtful user experiences. I enjoy solving complex problems, improving system design, and delivering production-ready solutions that balance strong engineering with refined interface design.",
      },
      {
        title: "Experience Focus",
        text: "Experience across real-world projects including internal dashboards, cloud deployments, and full-stack applications. I focus on end-to-end delivery, taking ownership from frontend experience to backend architecture and deployment.",
      }
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
      "Terraform"
    ],
  },
  skillCategories: [
    {
      title: "Frontend",
      description:
        "Responsive interfaces, clean component systems, and modern UI implementation for product-focused applications and dashboards.",
      level: 92,
      skills: ["React", "Next.js", "Tailwind Css", "Shadcn UI","Angular"],
    },
    {
      title: "Backend",
      description:
        "API design, business logic, authentication flows, and service integration for robust end-to-end applications.",
      level: 87,
      skills: ["Node.js", "Express", "Spring Boot", "REST APIs"],
    },
    {
      title: "DevOps",
      description:
        "Cloud and deployment workflows with containerization, platform services, and production-ready practices.",
      level: 79,
      skills: ["Docker", "Kubernetes", "AWS", "Terraform"],
    },
    {
      title: "Database",
      description:
        "Working with relational and document databases, focusing on performance and reliable data storage.",
      level: 84,
      skills: ["PostgreSQL", "MongoDB", "MySQL"],
    },
    {
      title: "AI",
      description:
        "Building AI-powered features using Python, machine learning, retrieval-augmented generation, and large language models.",
      level: 74,
      skills: ["Python", "MLOps", "RAG", "LLM"],
    },
  ],
  projects: [
    {
      title: "YouTube Sentiment Analysis",
      description:
        "Built an end-to-end MLOps pipeline for real-time YouTube comment sentiment analysis using LightGBM, Flask API, and a Chrome extension. Implemented CI/CD with GitHub Actions and a self-hosted AWS EC2 runner, deployed the Flask API using Docker, and used DVC and AWS S3 for data and model versioning. Tracked experiments with MLflow and visualized results through sentiment distribution charts and word clouds.",
      technologies: ["Python", "Scikit-learn", "LightGBM", "MLflow","Docker","Flask","AWS EC2","AWS S3","GitHub Actions","DVC","Chrome Extension"],
      githubHref: "https://github.com/AmineBarguellil7/youtube_sentiment_analysis",
      demoHref: undefined,
    },
    {
      title: "Productivity Application",
      description:
        "Developed a task management application to help users stay focused and productive, featuring a built-in timer and daily goal tracking. Designed a responsive and intuitive user interface using React, TypeScript, Vite, and Tailwind CSS, based on a Figma prototype for a smooth and professional user experience.",
      technologies: ["React", "TypeScript", " Vite", "Tailwind CSS","Figma Make"],
      githubHref: "https://github.com/AmineBarguellil7/Daily-Focus-Tracker-App",
      demoHref: "https://www.figma.com/make/rs64qYmKFqykuEazh67MOo/Daily-Focus-Tracker-App?t=VqMEgO1xbubztKAd-20&fullscreen=1",
    },
    {
      title: "Local-AI-Tech-Gadget-Assistant",
      description:
        "Developed a local AI assistant for answering questions about tech gadgets using Python, LangChain, Ollama, and a RAG approach with the LLaMA 3 model. Integrated a local vector database with ChromaDB to store synthetic reviews as embeddings using the mxbai-embed-large model, enabling accurate and context-aware responses.",
      technologies: ["Python", "LangChain", "Ollama", "Retrieval-Augmented Generation (RAG)","Chroma DB"],
      githubHref: "https://github.com/AmineBarguellil7/Local-AI-Tech-Gadget-Assistant",
      demoHref: undefined,
    },
    {
      title: "Interviews Copilot",
      description:
        "Developed an AI-powered interview simulator using React, TypeScript, and Firebase, integrating a serverless architecture with the Gemini AI API to generate personalized interview questions and real-time feedback. Designed an intuitive UI for customized mock interviews and used modern technologies like Vite and Tailwind CSS to deliver a seamless, secure, and scalable web application.",
      technologies: ["React", "Shadcn UI", "Tailwind CSS", "TypeScript","Lucide-React","Firebase","Vite","Clerk","Gemini Ai"],
      githubHref: undefined,
      demoHref: "https://ai-interview-simulator-app.web.app/",
    },
    {
      title: "Upgrade, Refactoring, and CICD Integration of Microservices in a Cloud-Native Environment",
      description:
        "Improved microservices to enhance performance and maintainability, implemented a CI/CD pipeline to automate testing and deployment, managed four microservices under a unified architecture, and deployed the solution on AWS, resulting in improved scalability, optimized resource utilization, and increased efficiency.",
      technologies: ["Angular", " Spring Boot", "PostgreSql", " Git","Docker","Kubernetes","Helm","Kafka"," Keycloak","Jenkins"," Aws"," Junit"," Mockito"],
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
        "Development and integration of applications in an industrial environment, ensuring robustness, scalability, and alignment with business requirements.",
        "Design, implementation, and optimization of deployment pipelines to improve service reliability, performance, and security.",
      ],
    },
    {
      period: "February 2024 - July 2024",
      title: "Final Year Project Intern - DevOps Intern",
      organization: "Scheidt & Bachmann Maghreb S.A.R.L",
      highlights: [
        "Deployed a parking web application solution on AWS.",
        "Set up a complete CI/CD pipeline for the project.",
        "Gained hands-on experience in deploying applications and managing continuous integration and continuous delivery processes.",
        "Strengthened proficiency with modern cloud-based tools while applying coding best practices to a real parking web application solution.",
      ],
    },
    {
      period: "June 2023 - August 2023",
      title: "Summer Intern - Web Developer",
      organization: "Smart For Green",
      highlights: [
        "Built practical experience with React.js, Docker, Jenkins, SonarQube, and Django REST Framework.",
        "Contributed to a project integrating React and Django with a PostgreSQL database.",
        "Strengthened technical proficiency through hands-on work with modern development tools and practices.",
      ],
    },
  ],
  certifications: [
    {
      name: "CKA Certified Kubernetes Administrator",
      issuer: "The Linux Foundation",
      status: "Completed",
    },
    {
      name: "Introduction to Front-End Development",
      issuer: "Meta - Coursera",
      status: "Completed",
    },
    {
      name: "Foundations: Data, Data, Everywhere",
      issuer: "Google",
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
      "Feel free to reach out for full-stack development, DevOps, or software engineering opportunities. I am always open to technical discussions, and new professional challenges",
  },
} as const;
