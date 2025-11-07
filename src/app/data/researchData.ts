import { BlogPost, ResearchProject } from "@/types/research";

export const blogPosts: BlogPost[] = [
  {
    id: "denoising-autoencoder-unet",
    title: "Denoising Autoencoder — A Look into the U-NET Architecture",
    description: "Deep dive into U-NET architecture for image denoising, exploring encoder-decoder structure, skip connections, and practical applications in medical imaging and computer vision.",
    image: "/images/denoising_1.png",
    readTime: "12 min read",
    date: "2024-02-15",
    category: "Deep Learning",
    link: "https://medium.com/@arnoldchris262/denoising-autoencoder-a-look-into-the-u-net-architecture-5f6fa1397832",
    tags: ["U-NET", "Autoencoder", "Computer Vision", "Deep Learning"]
  },
  {
    id: "ml-model-selection",
    title: "Machine Learning Model Selection: Beyond Accuracy",
    description: "Comprehensive guide to selecting the right ML model for your problem, covering trade-offs between complexity, interpretability, and computational requirements.",
    image: "/images/model_selection_1.jpg",
    readTime: "10 min read",
    date: "2024-02-10",
    category: "Machine Learning",
    link: "https://dev.to/oduor_arnold/ml-model-selection-1437",
    tags: ["Model Selection", "MLOps", "Algorithm Comparison", "Best Practices"]
  },
  {
    id: "evaluation-strategies",
    title: "Strategies in Evaluating Machine Learning Models",
    description: "Exploring robust evaluation methodologies including cross-validation, confidence intervals, statistical testing, and business metric alignment for ML models.",
    image: "/images/evaluation_strategies_1.jpg",
    readTime: "14 min read",
    date: "2024-02-05",
    category: "Machine Learning",
    link: "https://dev.to/oduor_arnold/strategies-in-evaluating-machine-learning-models-3jeg",
    tags: ["Evaluation", "Metrics", "Validation", "Statistics"]
  },
  {
    id: "immutable-datatypes",
    title: "What Do We Really Mean by Immutable Data Types?",
    description: "Understanding immutability in programming languages, its benefits for concurrent systems, and practical implications in functional programming and distributed systems.",
    image: "/images/immutable_datatypes_1.jpg",
    readTime: "8 min read",
    date: "2024-01-25",
    category: "Software Engineering",
    link: "https://dev.to/oduor_arnold/what-do-we-really-mean-by-immutable-data-types-edk",
    tags: ["Immutability", "Functional Programming", "Concurrency", "Data Structures"]
  },
  {
    id: "elixir-apis",
    title: "Building High-Performance APIs with Elixir and Phoenix",
    description: "Leveraging Elixir's concurrency model and Phoenix framework to build scalable, real-time APIs that handle millions of requests.",
    image: "/images/phoenix_api_1.jpg",
    readTime: "6 min read",
    date: "2024-01-10",
    category: "Backend Development",
    link: "https://medium.com/@arnoldchris262/how-to-build-scalable-production-ready-apis-in-phoenix-elixir-part-1-bdc5d7981d83",
    tags: ["Elixir", "Phoenix", "APIs", "Concurrency"]
  },
  {
    id: "django-rest",
    title: "Modern API Development with Django REST Framework",
    description: "Comprehensive guide to building robust, secure, and scalable REST APIs using Django REST Framework with best practices.",
    image: "/images/django_api_1.png",
    readTime: "10 min read",
    date: "2024-01-05",
    category: "Backend Development",
    link: "https://medium.com/@arnoldchris262/django-overview-part-1-setup-routes-templates-0293b35a0b1a",
    tags: ["Django", "REST", "Python", "Web Development"]
  }
];

export const researchProjects: ResearchProject[] = [
  {
    id: "authoryse",
    title: "DECENTRALIZED BIOMETRIC AUTHENTICATION THROUGH BLOCKCHAIN-NEURAL NETWORK CONVERGENCE",
    subtitle: "Development and Analysis of the AuthoRyse System",
    description: "A novel authentication system combining blockchain technology with neural networks for secure, decentralized biometric authentication.",
    image: "/images/authoryse_1.jpg",
    category: "Security & AI",
    date: "2025",
    abstract: "This research presents AuthoRyse, a decentralized biometric authentication system that leverages the convergence of blockchain technology and neural networks. The system addresses critical security vulnerabilities in traditional centralized authentication systems while maintaining high accuracy and user privacy.",
    objectives: [
      "Develop a decentralized framework for biometric authentication",
      "Integrate neural networks for accurate biometric verification",
      "Implement blockchain for secure, tamper-proof identity management",
      "Ensure user privacy through zero-knowledge proofs"
    ],
    methodology: "The research employed a mixed-methods approach combining quantitative analysis of authentication accuracy with qualitative assessment of system security and usability.",
    results: "The AuthoRyse system achieved 99.2% authentication accuracy while reducing vulnerability to common attacks by 87% compared to traditional systems.",
    technologies: ["Blockchain", "Neural Networks", "Cryptography", "Biometrics"],
    link: "https://medium.com/@arnoldchris262",
    publication: "Journal of Cybersecurity and AI Research",
    status: "In Progress"
  }
];