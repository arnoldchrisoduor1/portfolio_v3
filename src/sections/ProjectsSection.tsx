"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useMemo } from "react";
import {
  X,
  ExternalLink,
  Github,
  Play,
  AlertTriangle
} from "lucide-react";
import Image from "next/image";
import useUIStore from "@/store/useStore";

/* ============================
   Types / Interfaces
   ============================ */

interface Technology {
  name: string;
  category: string;
}

interface Challenge {
  problem: string;
  solution: string;
  impact: string;
}

interface ProcessPhase {
  phase: string;
  description: string;
  tools: string[];
}

interface Testing {
  approach: string;
  tools: string[];
  coverage?: string;
}

interface Deployment {
  infrastructure?: string;
  monitoring?: string;
  cicd?: string;
}

interface Metric {
  label: string;
  value: string;
}

interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  fullDescription?: string;
  categories: string[];
  technologies: Technology[];
  images: string[];
  challenges?: Challenge[];
  process?: ProcessPhase[];
  testing?: Testing;
  deployment?: Deployment;
  metrics?: Metric[];
  codeLink?: string | null;
  liveLink?: string | null;
  featured?: boolean;
  delay?: number;
}

/* ============================
   Data (typed)
   ============================ */

const projects: Project[] = [
  {
    id: "neumoai",
    title: "NeumoAI",
    subtitle: "Pneumonia Detection from X-ray Scans",
    description: "Medical AI system for automated pneumonia detection using deep learning",
    fullDescription:
      "A comprehensive medical AI platform that uses custom Convolutional Neural Networks to detect pneumonia from chest X-ray scans with 96% accuracy. The system includes real-time inference, continuous model training, and a clinician-friendly interface.",
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
    images: [
      "images/neumo_1.png",
      "images/neumo_2.png",
      "images/neumo_3.png"
    ],
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
    subtitle: "An online ecommerce landing page",
    description: "Modern, interactive e-commerce landing page of the future",
    fullDescription:
      "This is an e-commerce landing page built with the focus of a modern look, interactive feel and modern technologies for fast load and SWE optimization.",
    categories: ["AI/ML", "Mobile", "Computer Vision"],
    technologies: [
      { name: "Vue", category: "Web" },
    //   { name: "TensorFlow Lite", category: "ML Framework" },
      { name: "Typescript", category: "Language" },
    //   { name: "AWS Lambda", category: "Cloud" },
    ],
    images: [
      "/images/fluxstore_3.png",
      "/images/fluxstore_2.png",
      "/images/fluxstore_1.png",
      "/images/fluxstore_4.png",
    ],
    challenges: [
      {
        problem: "Mobile computational constraints",
        solution: "Model quantization and TensorFlow Lite optimization",
        impact: "Enabled real-time inference on mobile devices"
      },
      {
        problem: "Cross-platform compatibility",
        solution: "React Native with native module optimization",
        impact: "Consistent performance on iOS and Android"
      }
    ],
    process: [
      {
        phase: "Model Training",
        description: "Transfer learning with MobileNet architecture",
        tools: ["TensorFlow", "COCO Dataset"]
      },
      {
        phase: "Mobile Development",
        description: "Cross-platform app with camera integration",
        tools: ["React Native", "Expo"]
      },
      {
        phase: "Cloud Integration",
        description: "Serverless functions for model updates",
        tools: ["AWS Lambda", "Firebase"]
      }
    ],
    codeLink: "https://github.com/arnoldchrisoduor1/Iris",
    liveLink: "https://fluxstore.netlify.app/",
    featured: true,
    delay: 0.2
  },
  {
    id: "beancart",
    title: "BeanCart",
    subtitle: "Modern E-commerce Platform",
    description: "Full-stack e-commerce solution with microservices architecture",
    fullDescription:
      "A scalable e-commerce platform built with microservices architecture, featuring real-time inventory management, payment processing, and advanced analytics.",
    categories: ["FullStack", "Web", "Microservices"],
    technologies: [
      { name: "Angular", category: "Frontend" },
      { name: "Spring Boot", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Docker", category: "DevOps" },
      { name: "AWS", category: "Cloud" },
      { name: "Redis", category: "Caching" }
    ],
    images: [
      "/api/placeholder/800/600?text=BeanCart+Storefront",
      "/api/placeholder/800/600?text=Admin+Dashboard",
      "/api/placeholder/800/600?text=Architecture+Diagram"
    ],
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
    delay: 0.3
  }
];

/* ============================
   Helpers
   ============================ */

const groupByCategory = (technologies: Technology[]): Record<string, Technology[]> => {
  const grouped: Record<string, Technology[]> = {};
  technologies.forEach((tech) => {
    if (!grouped[tech.category]) {
      grouped[tech.category] = [];
    }
    grouped[tech.category].push(tech);
  });
  return grouped;
};

/* ============================
   Main Component
   ============================ */

const ProjectsSection: React.FC = () => {
  // Typing the store result — keep shape narrow so TS is happy.
  const { activeProjectTab, setActiveProjectTab } = useUIStore() as {
    activeProjectTab: string;
    setActiveProjectTab: (tab: string) => void;
  };

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const categories = useMemo<string[]>(() => {
    const allCategories = new Set<string>(["all", "featured"]);
    projects.forEach((project) => {
      project.categories.forEach((category) => allCategories.add(category));
    });
    return Array.from(allCategories);
  }, []);

  const filteredProjects = useMemo<Project[]>(() => {
    if (activeProjectTab === "all") return projects;
    if (activeProjectTab === "featured") return projects.filter((p) => p.featured);
    return projects.filter((project) => project.categories.includes(activeProjectTab));
  }, [activeProjectTab]);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="inline-flex items-center gap-3 mb-6" whileHover={{ scale: 1.05 }}>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-blue-400 tracking-wide">PROJECT PORTFOLIO</span>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
            Building{" "}
            <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, each project represents a unique challenge and an opportunity to innovate. Here's a showcase of my technical journey.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveProjectTab(category)}
              className={`px-6 py-3 rounded-full border text-sm font-medium transition-all duration-300 capitalize ${
                activeProjectTab === category ? "bg-white text-black border-white" : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => openProjectModal(project)}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group-hover:scale-105 group-hover:border-white/20">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Category Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.categories.slice(0, 2).map((category) => (
                      <span key={category} className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs text-white">
                        {category}
                      </span>
                    ))}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <Play size={48} className="text-white mx-auto mb-2" />
                      <p className="text-white font-medium">View Case Study</p>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech.name} className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                        {tech.name}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300">+{project.technologies.length - 3}</span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-green-400 hover:text-green-300 transition-colors"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      {project.codeLink && (
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                    <span className="text-xs text-gray-400">View Details →</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectModal}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl max-w-6xl max-h-[90vh] overflow-y-auto w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ProjectModal
                project={selectedProject}
                onClose={closeProjectModal}
                activeImageIndex={activeImageIndex}
                setActiveImageIndex={setActiveImageIndex}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

/* ============================
   Project Modal Component
   ============================ */

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  activeImageIndex: number;
  setActiveImageIndex: (i: number) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, activeImageIndex, setActiveImageIndex }) => {
  return (
    <div className="relative">
      {/* Header */}
      <div className="sticky top-0 bg-gray-900 border-b border-white/10 p-6 flex justify-between items-center z-10">
        <div>
          <h2 className="text-3xl font-bold text-white">{project.title}</h2>
          <p className="text-gray-400">{project.subtitle}</p>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <X size={24} className="text-gray-400" />
        </button>
      </div>

      <div className="p-6 space-y-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image src={project.images[activeImageIndex]} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw" />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {project.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`relative h-20 w-32 rounded-lg overflow-hidden flex-shrink-0 ${activeImageIndex === index ? "ring-2 ring-blue-500" : ""}`}
              >
                <Image src={image} alt={`${project.title} ${index + 1}`} fill className="object-cover" sizes="128px" />
              </button>
            ))}
          </div>
        </div>

        {/* Project Description */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Overview</h3>
          <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
        </div>

        {/* Key Metrics */}
        {project.metrics && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.metrics.map((metric: Metric, index: number) => (
              <motion.div
                key={metric.label}
                className="bg-white/5 rounded-lg p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-2xl font-bold text-blue-400 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Technologies */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Technologies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(groupByCategory(project.technologies)).map(([category, techs]) => (
              <div key={category}>
                <h4 className="text-lg font-medium text-gray-300 mb-3">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech: Technology) => (
                    <span key={tech.name} className="px-3 py-2 bg-white/10 rounded-lg text-sm text-gray-300">
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Solutions */}
        {project.challenges && (
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Challenges & Solutions</h3>
            <div className="space-y-4">
              {project.challenges.map((challenge: Challenge, index: number) => (
                <motion.div
                  key={index}
                  className="bg-white/5 rounded-lg p-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                    <div className="flex-1">
                      <h4 className="font-medium text-white mb-2">{challenge.problem}</h4>
                      <p className="text-gray-300 text-sm mb-2">
                        <strong>Solution:</strong> {challenge.solution}
                      </p>
                      <p className="text-green-400 text-sm">
                        <strong>Impact:</strong> {challenge.impact}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Development Process */}
        {project.process && (
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Development Process</h3>
            <div className="space-y-4">
              {project.process.map((phase: ProcessPhase, index: number) => (
                <motion.div
                  key={phase.phase}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">{index + 1}</div>
                    {index < (project.process?.length ?? 0) - 1 && <div className="w-0.5 h-full bg-gray-600 mt-2" />}
                  </div>
                  <div className="flex-1 pb-6">
                    <h4 className="font-medium text-white mb-2">{phase.phase}</h4>
                    <p className="text-gray-300 text-sm mb-2">{phase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.tools.map((tool) => (
                        <span key={tool} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-400">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Project Links */}
        <div className="flex gap-4 pt-6 border-t border-white/10">
          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white"
            >
              <Github size={20} />
              View Code
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors text-white"
            >
              <ExternalLink size={20} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
