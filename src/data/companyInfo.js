export const companyData = {
  legalName: "Anthropic Gen Digital Systems Pvt Ltd",
  shortName: "AGDS",
  tagline: "Reliable technology. Practical innovation. Long-term digital partnerships.",
  cin: "U72200KA2021PTC148920",
  headquarters: {
    addressLine1: "Outer Ring Road Tech Enclave, Bellandur",
    addressLine2: "Bengaluru, Karnataka 560103, India",
    phone: "+91 (80) 4129-8800",
    email: "inquiries@anthropicgendigital.com",
    supportEmail: "enterprise-support@anthropicgendigital.com"
  },
  regionalOffices: [
    { city: "Bengaluru", state: "Karnataka", address: "Outer Ring Road Tech Enclave, Bellandur, 560103" },
    { city: "Hyderabad", state: "Telangana", address: "HITEC City Phase II, Madhapur, 500081" },
    { city: "Mumbai", state: "Maharashtra", address: "Bandra Kurla Complex (BKC), Bandra East, 400051" }
  ],
  header: {
    navLinks: [
      { name: "Home", href: "#hero" },
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Industries", href: "#industries" },
      { name: "Process", href: "#process" },
      { name: "Contact", href: "#contact" }
    ],
    ctaText: "Talk to Our Team"
  },
  hero: {
    smallLabel: "ANTHROPIC GEN DIGITAL SYSTEMS",
    headline: "Building Reliable Digital Solutions for Modern Businesses",
    description: "We design, develop and deliver technology solutions that help businesses operate smarter, scale efficiently and build for the future.",
    primaryCta: "Explore Services",
    secondaryCta: "Talk to Our Team"
  },
  about: {
    eyebrow: "ABOUT THE COMPANY",
    heading: "Technology Built Around Real Business Needs",
    paragraph1: "Anthropic Gen Digital Systems Pvt Ltd provides technology and digital engineering services designed around real business requirements. From software development and cloud solutions to AI, data and enterprise technology, we help organizations build dependable digital systems and improve the way they operate.",
    paragraph2: "We are an established digital engineering partner to mid-market and enterprise organizations. Rather than pursuing speculative trends, our consulting and engineering practices focus strictly on high-availability architectures, verifiable code quality, security governance, and dependable business outcomes.",
    highlights: [
      {
        title: "Innovation",
        description: "Practical technology solutions."
      },
      {
        title: "Reliability",
        description: "Dependable systems designed for long-term use."
      },
      {
        title: "Scalability",
        description: "Technology that grows with the business."
      }
    ]
  },
  services: {
    eyebrow: "OUR SERVICES",
    heading: "Technology Services Built Around Your Business",
    supportingText: "Practical technology solutions across software, cloud, AI, security and data.",
    items: [
      {
        number: "01",
        id: "software-development",
        title: "Software Development",
        description: "Custom software, enterprise applications, SaaS platforms and scalable business systems.",
        category: "Core Engineering",
        capabilities: [
          "Enterprise Application Architecture",
          "SaaS Platform Development",
          "Custom Business Software",
          "API Development",
          "Software Modernization",
          "Maintenance & Support"
        ],
        techStack: ["Java / Spring Boot", "TypeScript / Node.js", "Go", "Python", "PostgreSQL", "Docker"],
        businessBenefits: "Accelerated release velocity, reduced technical debt, and linear operational scalability."
      },
      {
        number: "02",
        id: "web-development",
        title: "Web Development",
        description: "Responsive websites, web applications, portals and e-commerce platforms.",
        category: "Digital Platforms",
        capabilities: [
          "Enterprise Web Applications",
          "Single Page Applications (SPA)",
          "Web Portals & Extranets",
          "Headless E-commerce Platforms",
          "Web Performance Tuning",
          "WCAG 2.1 Accessibility"
        ],
        techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "GraphQL"],
        businessBenefits: "Sub-second page speeds, high conversion rates, and cross-device consistency."
      },
      {
        number: "03",
        id: "mobile-app-development",
        title: "Mobile App Development",
        description: "Android, iOS and cross-platform applications for modern businesses.",
        category: "Mobile Engineering",
        capabilities: [
          "Native iOS (Swift)",
          "Native Android (Kotlin)",
          "Cross-Platform (React Native / Flutter)",
          "Offline Data Synchronization",
          "Biometric Authentication",
          "MDM Enterprise Deployment"
        ],
        techStack: ["React Native", "Flutter", "Swift", "Kotlin", "SQLite", "Firebase"],
        businessBenefits: "Unified codebase efficiency with platform-native responsiveness and offline resilience."
      },
      {
        number: "04",
        id: "artificial-intelligence",
        title: "Artificial Intelligence",
        description: "Machine learning, AI applications, predictive analytics and intelligent automation.",
        category: "Applied Intelligence",
        capabilities: [
          "Supervised & Unsupervised Machine Learning",
          "Predictive Forecasting Engines",
          "Computer Vision & Optical Inspection",
          "Natural Language Processing (NLP)",
          "Anomaly Detection Systems",
          "Model Governance & Auditability"
        ],
        techStack: ["Python", "PyTorch", "TensorFlow", "Scikit-Learn", "FastAPI", "Pandas"],
        businessBenefits: "Proactive risk detection, cognitive task automation, and data-driven forecasting."
      },
      {
        number: "05",
        id: "gen-ai-llm",
        title: "Generative AI & LLM Solutions",
        description: "AI assistants, RAG applications, AI agents and LLM-powered business solutions.",
        category: "Applied Intelligence",
        capabilities: [
          "Enterprise Knowledge RAG Pipelines",
          "Private VPC LLM Deployment",
          "Autonomous Governed AI Agents",
          "Role-Based Conversational Assistants",
          "Context-Aware Document Parsing",
          "Model Hallucination Guardrails"
        ],
        techStack: ["LlamaIndex", "LangChain", "Milvus / pgvector", "OpenAI / Claude APIs", "vLLM"],
        businessBenefits: "Instant corporate knowledge retrieval with zero exposure of confidential IP to public models."
      },
      {
        number: "06",
        id: "cloud-devops",
        title: "Cloud & DevOps",
        description: "Cloud architecture, migration, deployment, CI/CD and infrastructure automation.",
        category: "Cloud Infrastructure",
        capabilities: [
          "Multi-Cloud Architecture (AWS, Azure, GCP)",
          "Zero-Downtime Cloud Migration",
          "Automated CI/CD Release Pipelines",
          "Infrastructure as Code (Terraform)",
          "Kubernetes Container Orchestration",
          "24/7 SRE Observability"
        ],
        techStack: ["AWS", "Azure", "Google Cloud", "Terraform", "Kubernetes", "GitHub Actions"],
        businessBenefits: "99.99% target uptime, automated self-healing, and disciplined cloud spend management."
      },
      {
        number: "07",
        id: "cybersecurity",
        title: "Cybersecurity",
        description: "Application security, cloud security, vulnerability assessment and data protection.",
        category: "Risk & Governance",
        capabilities: [
          "Application Security Audits (SAST/DAST)",
          "Cloud Security Posture (CSPM)",
          "Identity & Access Management (IAM / SSO)",
          "Penetration Testing & Threat Hunting",
          "Data Encryption & DLP Standards",
          "Compliance Readiness (ISO 27001, SOC 2)"
        ],
        techStack: ["SonarQube", "Wazuh SIEM", "HashiCorp Vault", "Okta", "CrowdStrike"],
        businessBenefits: "Defense-in-depth asset protection, reduced regulatory liability, and rapid incident mitigation."
      },
      {
        number: "08",
        id: "data-analytics",
        title: "Data & Analytics",
        description: "Data engineering, business intelligence, dashboards and predictive analytics.",
        category: "Data Management",
        capabilities: [
          "High-Throughput ETL/ELT Pipelines",
          "Cloud Data Warehousing",
          "Executive BI Dashboards",
          "Data Lineage & Schema Governance",
          "Automated Regulatory Reporting",
          "Real-Time Event Stream Analytics"
        ],
        techStack: ["Snowflake", "dbt", "Apache Airflow", "Power BI", "Tableau", "Apache Kafka"],
        businessBenefits: "Unified source of truth, elimination of data silos, and automated executive reporting."
      },
      {
        number: "09",
        id: "digital-transformation",
        title: "Digital Transformation",
        description: "Business automation, process digitization and technology modernization.",
        category: "Strategic Consulting",
        capabilities: [
          "Legacy Modernization Roadmaps",
          "Strangler-Fig System Decoupling",
          "Business Process Automation (BPA)",
          "Workflow Digitization & Optimization",
          "Cross-Departmental Orchestration",
          "Operational Cycle-Time Reduction"
        ],
        techStack: ["BPMN 2.0", "Kafka Event Architecture", "Microservices", "REST / gRPC"],
        businessBenefits: "Elimination of manual operational bottlenecks and up to 50% faster business cycle times."
      },
      {
        number: "10",
        id: "uiux-product-design",
        title: "UI/UX & Product Design",
        description: "UX research, interface design, product design and digital experiences.",
        category: "Experience Design",
        capabilities: [
          "User Research & Workflow Analysis",
          "Information Architecture & Wireframes",
          "Enterprise Design System Tokens",
          "High-Density Dashboard UI Design",
          "Interactive Figma Prototyping",
          "WCAG 2.1 AA Accessibility Validation"
        ],
        techStack: ["Figma", "Design Tokens", "Storybook", "React Components", "Tailwind CSS"],
        businessBenefits: "Reduced user error rates, accelerated onboarding, and unified brand experience across products."
      },
      {
        number: "11",
        id: "it-consulting",
        title: "IT Consulting",
        description: "Technology strategy, architecture consulting and digital technology roadmaps.",
        category: "Strategic Advisory",
        capabilities: [
          "Enterprise Architecture Audits",
          "Cloud TCO & Cost Optimization",
          "Technology Vendor Selection",
          "Disaster Recovery & BCP Strategy",
          "Engineering Delivery Frameworks",
          "Executive Technical Due Diligence"
        ],
        techStack: ["TOGAF Framework", "AWS Well-Architected", "FinOps", "Jira Align"],
        businessBenefits: "Objective technical advisory preventing costly architectural missteps and wasted software spend."
      },
      {
        number: "12",
        id: "system-integration",
        title: "System Integration",
        description: "APIs, third-party integrations and enterprise system integration.",
        category: "Enterprise Integration",
        capabilities: [
          "API Gateway & Service Mesh Architecture",
          "Enterprise Service Bus (ESB)",
          "ERP & CRM Data Synchronization",
          "Payment & Billing Gateway Connectors",
          "Legacy Monolith Decoupling",
          "Event-Driven Integration (EDA)"
        ],
        techStack: ["Kong Gateway", "Apache Kafka", "RabbitMQ", "GraphQL", "OAuth 2.0 / mTLS"],
        businessBenefits: "Seamless data interchange between disparate enterprise tools and legacy back-office systems."
      }
    ]
  },
  industries: {
    heading: "Technology Solutions Across Industries",
    items: [
      { id: "healthcare", name: "Healthcare", desc: "HIPAA-compliant EHR integrations, patient clinical portals, and diagnostic telemetry." },
      { id: "banking", name: "Banking & Finance", desc: "Audit-ready ledgers, AML/KYC automated pipelines, and core banking API connectors." },
      { id: "retail", name: "Retail", desc: "Omnichannel inventory orchestration, POS synchronization, and customer loyalty systems." },
      { id: "ecommerce", name: "E-commerce", desc: "Headless commerce, peak-load checkout resilience, and dynamic catalog architectures." },
      { id: "manufacturing", name: "Manufacturing", desc: "Shop-floor telemetry, predictive maintenance alerts, and ERP supply-chain sync." },
      { id: "logistics", name: "Logistics", desc: "Fleet tracking platforms, automated warehouse management (WMS), and dispatch routing." },
      { id: "education", name: "Education", desc: "Scalable institutional LMS, secure examination engines, and student performance metrics." },
      { id: "startups", name: "Startups", desc: "Production-ready MVP engineering, multi-tenant cloud foundations, and venture-scale readiness." }
    ]
  },
  techExpertise: {
    heading: "Technology Expertise",
    subheading: "A battle-tested, modern technology ecosystem engineered for longevity and security.",
    categories: [
      {
        name: "Frontend",
        technologies: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "HTML5/CSS3"]
      },
      {
        name: "Backend",
        technologies: ["Node.js", "Go", "Java / Spring Boot", "Python / FastAPI", "C# / .NET Core", "GraphQL"]
      },
      {
        name: "Mobile",
        technologies: ["React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)", "Expo"]
      },
      {
        name: "Databases",
        technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "ClickHouse"]
      },
      {
        name: "Cloud",
        technologies: ["Amazon Web Services", "Microsoft Azure", "Google Cloud Platform", "Cloudflare"]
      },
      {
        name: "AI & Machine Learning",
        technologies: ["PyTorch", "TensorFlow", "LlamaIndex", "LangChain", "Milvus / pgvector", "Scikit-Learn"]
      },
      {
        name: "DevOps",
        technologies: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "GitLab CI", "Prometheus"]
      },
      {
        name: "Security",
        technologies: ["Vault", "SonarQube", "Wazuh SIEM", "OAuth 2.0 / OIDC", "mTLS", "OWASP ZAP"]
      }
    ]
  },
  process: {
    heading: "Our Process",
    subheading: "A disciplined, transparent delivery methodology designed to eliminate surprises.",
    steps: [
      {
        id: "discover",
        stage: "Discovery",
        title: "Discover",
        description: "Understand the business challenge.",
        details: "We conduct deep discovery sessions, audit existing systems, and define verifiable technical requirements and success metrics."
      },
      {
        id: "plan",
        stage: "Architecture",
        title: "Plan",
        description: "Define the right technology strategy.",
        details: "Principal architects draft architecture blueprints, technology stack decisions, security baselines, and milestone sprint roadmaps."
      },
      {
        id: "build",
        stage: "Engineering",
        title: "Design & Build",
        description: "Create and develop the solution.",
        details: "Engineers work in transparent two-week sprints with automated testing, continuous code reviews, and bi-weekly milestone demonstrations."
      },
      {
        id: "deploy",
        stage: "Deployment",
        title: "Deploy",
        description: "Launch securely.",
        details: "We execute zero-downtime blue/green deployments backed by automated rollbacks, load stress testing, and comprehensive operational handoffs."
      },
      {
        id: "scale",
        stage: "Evolution",
        title: "Support & Scale",
        description: "Maintain and improve continuously.",
        details: "Dedicated engineering teams deliver 24/7 telemetry monitoring, patch governance, security updates, and performance tuning."
      }
    ]
  },
  whyChooseUs: {
    eyebrow: "WHY CHOOSE US",
    heading: "Technology Solutions Designed for Long-Term Business Value",
    supportingText: "We combine practical technology expertise, business understanding, and a reliable delivery approach to build solutions that are scalable, secure, and aligned with real business goals.",
    trustStatement: "Built for reliability. Designed for growth. Focused on results.",
    benefits: [
      {
        id: "business-focused",
        title: "Business-Focused Approach",
        description: "We understand the business objective behind every technology requirement and build solutions around measurable business needs.",
        icon: "Target"
      },
      {
        id: "scalable-technology",
        title: "Scalable Technology",
        description: "Our solutions are designed to grow with your business, allowing new features, users, and integrations to be added efficiently.",
        icon: "Layers"
      },
      {
        id: "reliable-delivery",
        title: "Reliable Delivery",
        description: "We follow a structured development and delivery process focused on quality, consistency, and dependable outcomes.",
        icon: "ShieldCheck"
      },
      {
        id: "modern-expertise",
        title: "Modern Technology Expertise",
        description: "We work with modern web, cloud, data, AI, and software technologies to create practical digital solutions.",
        icon: "Code2"
      },
      {
        id: "long-term-partnership",
        title: "Long-Term Partnership",
        description: "We aim to build lasting technology partnerships by providing continuous support, improvements, and reliable technical guidance.",
        icon: "Handshake"
      }
    ]
  },
  caseStudies: {
    heading: "Representative Engineering Implementations",
    subheading: "Demonstration architecture case studies illustrating our engineering capabilities across enterprise environments.",
    items: [
      {
        id: "healthcare-portal",
        industry: "Healthcare",
        title: "High-Throughput Clinical Telemetry & Patient Engagement System",
        problem: "A regional hospital network faced delayed patient telemetry synchronization, fragmented legacy EHR silos, and statutory HIPAA compliance audit hurdles.",
        solution: "Engineered a containerized microservices platform with FHIR API connectors, secure WebSocket data streams, and biometric role-based access control.",
        technology: ["TypeScript", "Go", "PostgreSQL", "AWS ECS", "Docker", "FHIR API"],
        result: "Achieved sub-second patient vital telemetry distribution and successful zero-deficiency statutory HIPAA security compliance audits."
      },
      {
        id: "fintech-reconciliation",
        industry: "Banking & Finance",
        title: "Real-Time Distributed Transaction Reconciliation Engine",
        problem: "Financial institution experiencing multi-hour batch reconciliation bottlenecks across five third-party payment settlement gateways.",
        solution: "Architected an event-driven stream processing pipeline with idempotency guarantees, automated variance alerting, and cryptographic audit logs.",
        technology: ["Java / Spring", "Apache Kafka", "PostgreSQL", "Redis", "Terraform", "Azure"],
        result: "Reduced batch settlement latency from 4 hours to under 30 seconds with 100% auditable deterministic ledger verification."
      },
      {
        id: "logistics-telemetry",
        industry: "Logistics & Supply Chain",
        title: "Multi-Hub Fleet Dispatch & Real-Time Warehouse Inventory Platform",
        problem: "Freight logistics operator suffered from blind spots between depot warehouse management systems (WMS) and transit truck telemetry.",
        solution: "Built an offline-first mobile inspection application for field drivers synchronized with an enterprise centralized dispatch dashboard.",
        technology: ["React", "React Native", "Python FastAPI", "TimescaleDB", "Google Cloud", "Docker"],
        result: "Eliminated manual paper manifest handoffs and improved route dispatch accuracy across 12 regional distribution hubs."
      }
    ]
  },
  cta: {
    heading: "Have a Digital Challenge to Solve?",
    supportingText: "Let’s discuss your requirements and explore the right technology approach.",
    buttonText: "Start a Conversation"
  },
  contact: {
    leftHeading: "Let’s Build What’s Next",
    leftDescription: "Talk to our senior leads about your project roadmap.",
    buttonText: "Send Inquiry"
  }
};
