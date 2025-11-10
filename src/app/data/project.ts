import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: "neumoai",
    title: "NeumoAI",
    subtitle: "Pneumonia Detection from X-ray Scans",
    description: "Medical AI system for automated pneumonia detection using deep learning",
    fullDescription: "A comprehensive medical AI platform that uses custom Convolutional Neural Networks to detect pneumonia from chest X-ray scans with 96% accuracy. The system includes real-time inference, continuous model training, and a clinician-friendly interface.",
    categories: ["AI/ML", "FullStack", "MLOps", "Healthcare"],
    technologies: [
      { name: "Python", category: "Language" },
      { name: "TensorFlow", category: "ML Framework" },
      { name: "Next.js", category: "Frontend" },
      { name: "FastAPI", category: "Backend" },
      { name: "Docker", category: "DevOps" },
      { name: "AWS S3", category: "Cloud" },
      { name: "OpenCV", category: "Image Processing" }
    ],
    images: ["images/neumo_1.png", "images/neumo_2.png", "images/neumo_3.png"],
    challenges: [
      {
        problem: "Limited medical dataset for training",
        solution: "Implemented data augmentation and transfer learning from pre-trained models",
        impact: "Improved model accuracy from 85% to 96%"
      },
      {
        problem: "Real-time inference requirements",
        solution: "Optimized model architecture and implemented GPU acceleration",
        impact: "Reduced inference time from 2s to 200ms"
      },
      {
        problem: "Medical regulatory compliance",
        solution: "Built explainability features and confidence scoring",
        impact: "Increased clinician trust and adoption"
      }
    ],
    process: [
      {
        phase: "Research & Data Collection",
        description: "Analyzed medical imaging datasets and literature review",
        tools: ["PubMed", "Kaggle", "Medical Journals"]
      },
      {
        phase: "Model Development",
        description: "Custom CNN architecture design and hyperparameter tuning",
        tools: ["TensorFlow", "Keras", "Jupyter Notebooks"]
      },
      {
        phase: "Backend Development",
        description: "REST API development with batch processing capabilities",
        tools: ["FastAPI", "PostgreSQL", "Redis"]
      },
      {
        phase: "Frontend Development",
        description: "Clinician dashboard with real-time results",
        tools: ["Next.js", "TypeScript", "Tailwind CSS"]
      },
      {
        phase: "Deployment & Monitoring",
        description: "Containerized deployment with performance monitoring",
        tools: ["Docker", "AWS", "Grafana"]
      }
    ],
    testing: {
      approach: "Comprehensive testing including unit tests, integration tests, and model validation",
      tools: ["pytest", "Jest", "Model Validation Suite"],
      coverage: "92% test coverage"
    },
    deployment: {
      infrastructure: "AWS ECS with auto-scaling and load balancing",
      monitoring: "Real-time performance tracking with Prometheus",
      cicd: "GitHub Actions with automated testing and deployment"
    },
    metrics: [
      { label: "Accuracy", value: "96%" },
      { label: "Inference Time", value: "200ms" },
      { label: "Uptime", value: "99.9%" },
      { label: "Users", value: "500+" }
    ],
    codeLink: "https://github.com/arnoldchrisoduor1/NeumoAI",
    liveLink: "https://neumoai.netlify.app/",
    featured: true,
    delay: 0.1
  },
  {
    id: "fluxstore",
    title: "Flux Store",
    subtitle: "Modern E-commerce Landing Page",
    description: "Interactive e-commerce landing page with animated design",
    fullDescription: "A modern, visually stunning e-commerce landing page built with Vue.js and Vue animations. Features smooth scroll animations, interactive product showcases, and optimized performance for enhanced user engagement and conversion rates.",
    categories: ["Frontend", "Web", "E-commerce"],
    technologies: [
      { name: "Vue.js", category: "Frontend" },
      { name: "Vue Animations", category: "Animation" },
      { name: "TypeScript", category: "Language" },
      { name: "CSS3", category: "Styling" },
      { name: "Netlify", category: "Deployment" }
    ],
    images: ["/images/fluxstore_3.png", "/images/fluxstore_2.png", "/images/fluxstore_1.png", "/images/fluxstore_4.png"],
    challenges: [
      {
        problem: "Performance optimization with complex animations",
        solution: "Implemented lazy loading and optimized animation triggers using Vue's transition system",
        impact: "Achieved 95+ Google PageSpeed score while maintaining smooth animations"
      },
      {
        problem: "Cross-browser compatibility for modern CSS features",
        solution: "Used progressive enhancement and fallbacks for older browsers",
        impact: "Consistent experience across all modern browsers"
      },
      {
        problem: "Mobile-responsive design with complex layouts",
        solution: "Implemented CSS Grid and Flexbox with mobile-first approach",
        impact: "Seamless experience across all device sizes"
      }
    ],
    process: [
      {
        phase: "UI/UX Design",
        description: "Created modern e-commerce design with focus on user engagement",
        tools: ["Figma", "Adobe XD"]
      },
      {
        phase: "Frontend Development",
        description: "Built interactive components with Vue.js and animations",
        tools: ["Vue.js", "Vue Router", "CSS3"]
      },
      {
        phase: "Performance Optimization",
        description: "Optimized loading times and animation performance",
        tools: ["Lighthouse", "Chrome DevTools"]
      },
      {
        phase: "Deployment",
        description: "Deployed to Netlify with CI/CD pipeline",
        tools: ["Netlify", "GitHub Actions"]
      }
    ],
    metrics: [
      { label: "PageSpeed Score", value: "95%" },
      { label: "Load Time", value: "1.2s" },
      { label: "Animation FPS", value: "60 FPS" }
    ],
    codeLink: "https://github.com/arnoldchrisoduor1/FluxStore",
    liveLink: "https://fluxstore.netlify.app/",
    featured: true,
    delay: 0.2
  },
  {
    id: "Collective Poetry",
    title: "Collective Poetry",
    subtitle: "Creative Writing Social Platform powered by LLMS and Blockchain Technology",
    description: "Creative Writing Social Platform powered by LLMS and Blockchain Technology",
    fullDescription: "A dedicated social platform for creative writers and poets to share their work, get feedback, and connect with other writers. Features include collaborative writing, writing prompts, and publication tools. It features blockchain integrations for proof of wonership and tokenization and aollective AI that learns from all writings on the site and that can be queried to get collective ideas of individuals on a topic",
    categories: ["FullStack", "Web", "Social Media"],
    technologies: [
      { name: "Next", category: "Frontend" },
      { name: "Nest", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "AWS S3", category: "Storage" },
      { name: "Redis", category: "Caching" },
      { name: "Docker", category: "DevOps" },
      { name: "Etherium", category: "Blockchain" },
      { name: "Claude", category: "AI" }
    ],
    images: ["/images/muse_1.png", "/images/muse_2.png", "/images/muse_3.png"],
    challenges: [
      {
        problem: "Real-time collaboration features",
        solution: "Implemented WebSocket connections for live editing",
        impact: "Enabled multiple users to collaborate simultaneously"
      },
      {
        problem: "Content moderation and plagiarism detection",
        solution: "Built automated moderation system with similarity checking",
        impact: "Maintained platform integrity with 99% accuracy"
      }
    ],
    process: [
      {
        phase: "Backend Development",
        description: "REST API with user management and content handling",
        tools: ["Django", "Django REST Framework", "PostgreSQL"]
      },
      {
        phase: "Frontend Development",
        description: "Interactive UI with real-time features",
        tools: ["React", "Redux", "WebSocket"]
      },
      {
        phase: "File Management",
        description: "Implemented AWS S3 for media storage",
        tools: ["AWS S3", "Django Storages"]
      }
    ],
    codeLink: "https://github.com/arnoldchrisoduor1/Muse_v2",
    liveLink: "https://collectivepoetry.netlify.app/",
    featured: false,
    delay: 0.4
  },
  {
    id: "iris",
    title: "Iris Mobile",
    subtitle: "Plant Identification Mobile App",
    description: "AI-powered plant identification using mobile vision",
    fullDescription: "A React Native mobile application that uses transfer learning with MobileNet to identify plant species from photos. Features real-time camera processing, plant care information, and social sharing capabilities.",
    categories: ["Mobile", "AI/ML", "Computer Vision"],
    technologies: [
      { name: "React Native", category: "Mobile" },
      { name: "Flask", category: "Backend" },
      { name: "MobileNet", category: "ML Model" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Redis", category: "Caching" },
      { name: "AWS Lightsail", category: "Cloud" },
      { name: "TensorFlow Lite", category: "ML Framework" }
    ],
    images: ["/images/iris_1.jpg", "/images/iris_2.png", "/images/iris_3.png"],
    challenges: [
      {
        problem: "Mobile device computational limitations",
        solution: "Implemented model quantization and TensorFlow Lite for optimized inference",
        impact: "Reduced model size by 75% while maintaining 94% accuracy"
      },
      {
        problem: "Real-time camera processing on mobile",
        solution: "Optimized image preprocessing and frame sampling",
        impact: "Achieved real-time classification at 30 FPS"
      },
      {
        problem: "Database performance with image metadata",
        solution: "Implemented Redis caching for frequent queries",
        impact: "Reduced database query time from 200ms to 20ms"
      }
    ],
    process: [
      {
        phase: "Model Training",
        description: "Transfer learning with MobileNet on plant dataset",
        tools: ["TensorFlow", "PlantNet Dataset", "Jupyter"]
      },
      {
        phase: "Backend Development",
        description: "REST API for model serving and data management",
        tools: ["Flask", "PostgreSQL", "Redis"]
      },
      {
        phase: "Mobile App Development",
        description: "Cross-platform app with camera integration",
        tools: ["React Native", "Expo", "Camera API"]
      },
      {
        phase: "Deployment",
        description: "Backend deployed on AWS Lightsail",
        tools: ["AWS Lightsail", "Docker", "Nginx"]
      }
    ],
    deployment: {
      infrastructure: "AWS Lightsail with load balancing",
      monitoring: "Custom logging and performance tracking",
      cicd: "GitHub Actions with automated testing"
    },
    codeLink: "https://github.com/arnoldchrisoduor1/Iris",
    liveLink: null,
    featured: true,
    delay: 0.3
  },
  {
    id: "rust-space-shooter",
    title: "Rust Space Shooter",
    subtitle: "2D Space Shooter Game",
    description: "Retro-style 2D space shooter built with Rust",
    fullDescription: "A classic 2D space shooter game built from scratch using Rust and game development principles. Features enemy AI, power-ups, scoring system, and particle effects.",
    categories: ["Game Development", "Rust"],
    technologies: [
      { name: "Rust", category: "Language" },
      { name: "Bevy", category: "Game Engine" },
      { name: "SDL2", category: "Graphics" }
    ],
    images: ["/images/rust_game_1.png", "/images/rust_game_2.png", "/images/rust_game_3.png"],
    challenges: [
      {
        problem: "Game loop optimization in Rust",
        solution: "Implemented efficient ECS (Entity Component System) architecture",
        impact: "Achieved consistent 60 FPS with hundreds of entities"
      },
      {
        problem: "Collision detection performance",
        solution: "Used spatial partitioning for collision checks",
        impact: "Reduced collision computation time by 80%"
      }
    ],
    process: [
      {
        phase: "Game Design",
        description: "Designed game mechanics and architecture",
        tools: ["Bevy ECS", "Game Design Documents"]
      },
      {
        phase: "Implementation",
        description: "Built game systems and components",
        tools: ["Rust", "Bevy Engine"]
      },
      {
        phase: "Testing & Optimization",
        description: "Performance testing and bug fixing",
        tools: ["Cargo", "Profiling Tools"]
      }
    ],
    codeLink: "https://github.com/arnoldchrisoduor1/Rust/tree/main/space_shooter",
    liveLink: null,
    featured: false,
    delay: 0.5
  },
  {
    id: "climatecore",
    title: "ClimateCore",
    subtitle: "Weather Data Processing System",
    description: "Real-time weather data processing and API",
    fullDescription: "A comprehensive weather data processing system that collects data from multiple weather APIs, processes it using pandas and numpy, stores it in PostgreSQL, and exposes cleaned data through a REST API with monitoring for data integrity.",
    categories: ["Data Processing", "Backend", "API"],
    technologies: [
      { name: "Flask", category: "Backend" },
      { name: "Pandas", category: "Data Processing" },
      { name: "NumPy", category: "Data Analysis" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Docker", category: "DevOps" },
      { name: "Weather APIs", category: "Data Source" }
    ],
    images: ["/images/climatecore_1.png", "/images/climatecore_2.png", "/images/climatecore_3.png"],
    challenges: [
      {
        problem: "Data consistency across multiple API sources",
        solution: "Implemented data validation and reconciliation algorithms",
        impact: "Achieved 99.8% data accuracy across sources"
      },
      {
        problem: "Database performance with large time-series data",
        solution: "Used database partitioning and indexing strategies",
        impact: "Improved query performance by 10x"
      }
    ],
    process: [
      {
        phase: "Data Collection",
        description: "Integrated multiple weather data APIs",
        tools: ["Python Requests", "API Integration"]
      },
      {
        phase: "Data Processing",
        description: "Data cleaning and transformation pipeline",
        tools: ["Pandas", "NumPy", "Data Validation"]
      },
      {
        phase: "Database Design",
        description: "Optimized schema for time-series data",
        tools: ["PostgreSQL", "Database Optimization"]
      },
      {
        phase: "API Development",
        description: "REST API with data integrity monitoring",
        tools: ["Flask", "SQLAlchemy", "Monitoring"]
      }
    ],
    metrics: [
      { label: "Data Accuracy", value: "99.8%" },
      { label: "API Response Time", value: "150ms" },
      { label: "Uptime", value: "99.5%" }
    ],
    codeLink: "https://github.com/arnoldchrisoduor1/ClimateCore",
    liveLink: null,
    featured: false,
    delay: 0.6
  },
  {
    id: "jumia-webcrawler",
    title: "Jumia WebCrawler",
    subtitle: "E-commerce Data Scraper",
    description: "Automated product data scraping and email reporting",
    fullDescription: "An automated web crawler that scrapes product data from Jumia e-commerce platform, processes the information, and automatically sends curated product reports via email. Features intelligent data extraction and scheduling.",
    categories: ["Web Scraping", "Automation", "Data Processing"],
    technologies: [
      { name: "Python", category: "Language" },
      { name: "BeautifulSoup", category: "Web Scraping" },
      { name: "Selenium", category: "Browser Automation" },
      { name: "Pandas", category: "Data Processing" },
      { name: "SMTP", category: "Email" },
      { name: "Cron", category: "Scheduling" }
    ],
    images: ["/images/webcrawler.jpg", "/images/webcrawler_2.png", "/images/webcrawler_3.png"],
    challenges: [
      {
        problem: "Anti-bot protection bypass",
        solution: "Implemented rotating user agents and request throttling",
        impact: "Maintained 99% success rate in data collection"
      },
      {
        problem: "Data structure changes on target website",
        solution: "Built adaptive parsing with fallback selectors",
        impact: "Reduced maintenance time by 70%"
      }
    ],
    process: [
      {
        phase: "Scraper Development",
        description: "Built robust web scraping pipeline",
        tools: ["BeautifulSoup", "Selenium", "Requests"]
      },
      {
        phase: "Data Processing",
        description: "Data cleaning and transformation",
        tools: ["Pandas", "Data Validation"]
      },
      {
        phase: "Automation",
        description: "Scheduled execution and email reporting",
        tools: ["Cron", "SMTP", "Email Templates"]
      }
    ],
    codeLink: "https://github.com/arnoldchrisoduor1/Scrapers_Crawlers_Spiders_Bots",
    liveLink: null,
    featured: false,
    delay: 0.7
  },
  {
    id: "beancart",
    title: "BeanCart",
    subtitle: "Modern E-commerce Platform",
    description: "Full-stack e-commerce solution with microservices architecture",
    fullDescription: "A scalable e-commerce platform built with microservices architecture, featuring real-time inventory management, payment processing, and advanced analytics.",
    categories: ["FullStack", "Web", "Microservices"],
    technologies: [
      { name: "Angular", category: "Frontend" },
      { name: "Spring Boot", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Docker", category: "DevOps" },
      { name: "AWS", category: "Cloud" },
      { name: "Redis", category: "Caching" }
    ],
    images: ["/images/beancart_1.png", "/images/beancart_2.png", "/images/beancart_3.png"],
    challenges: [
      {
        problem: "High traffic scalability",
        solution: "Microservices with load balancing and caching",
        impact: "Handled 10k+ concurrent users"
      },
      {
        problem: "Payment integration complexity",
        solution: "Modular payment gateway architecture",
        impact: "Multiple payment provider support"
      }
    ],
    codeLink: "https://github.com/arnoldchrisoduor1/BeanCart",
    liveLink: "https://app.beancart.shop",
    featured: true,
    delay: 0.8
  },
  {
    id: "portfolio-v3",
    title: "Portfolio v3",
    subtitle: "Personal Developer Portfolio",
    description: "Modern responsive portfolio website",
    fullDescription: "A cutting-edge portfolio website showcasing my projects and skills. Built with modern web technologies focusing on performance, accessibility, and smooth animations.",
    categories: ["Frontend", "Web", "Portfolio"],
    technologies: [
      { name: "Next.js", category: "Frontend" },
      { name: "TypeScript", category: "Language" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Framer Motion", category: "Animation" },
      { name: "Vercel", category: "Deployment" }
    ],
    images: ["/images/portfolio_1.png", "/images/portfolio_2.png", "/images/portfolio_3.png"],
    challenges: [
      {
        problem: "Performance optimization with animations",
        solution: "Implemented lazy loading and optimized animation triggers",
        impact: "Achieved 98+ PageSpeed score"
      }
    ],
    process: [
      {
        phase: "Design",
        description: "Modern UI/UX design with focus on user experience",
        tools: ["Figma", "Design System"]
      },
      {
        phase: "Development",
        description: "Built with Next.js and modern web practices",
        tools: ["Next.js", "TypeScript", "Tailwind"]
      },
      {
        phase: "Optimization",
        description: "Performance and SEO optimization",
        tools: ["Lighthouse", "SEO Tools"]
      }
    ],
    codeLink: "https://github.com/arnoldchrisoduor1/portfolio_v3",
    liveLink: "https://oduorr.netlify.app/",
    featured: false,
    delay: 0.9
  }
];