"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { 
  BookOpen, 
  FileText, 
  ExternalLink, 
  Clock, 
  Calendar,
  Brain,
  Shield,
  Network,
  X
} from "lucide-react";
import Navigation from "@/sections/Navigation";
// import Footer from "@/components/Footer";
import Footer from "../components/Footer";

// Blog posts data
const blogPosts = [
  {
    id: "ml-training",
    title: "Advanced Techniques for Training Machine Learning Models",
    description: "Exploring cutting-edge methods for optimizing neural network training, including transfer learning, hyperparameter tuning, and regularization techniques.",
    image: "/api/placeholder/600/400?text=ML+Training",
    readTime: "8 min read",
    date: "2024-01-15",
    category: "Machine Learning",
    link: "https://medium.com/@yourusername/advanced-techniques-for-training-machine-learning-models",
    tags: ["ML", "Deep Learning", "Training"]
  },
  {
    id: "elixir-apis",
    title: "Building High-Performance APIs with Elixir and Phoenix",
    description: "Leveraging Elixir's concurrency model and Phoenix framework to build scalable, real-time APIs that handle millions of requests.",
    image: "/api/placeholder/600/400?text=Elixir+APIs",
    readTime: "6 min read",
    date: "2024-01-10",
    category: "Backend Development",
    link: "https://medium.com/@yourusername/building-high-performance-apis-with-elixir-and-phoenix",
    tags: ["Elixir", "Phoenix", "APIs"]
  },
  {
    id: "django-rest",
    title: "Modern API Development with Django REST Framework",
    description: "Comprehensive guide to building robust, secure, and scalable REST APIs using Django REST Framework with best practices.",
    image: "/api/placeholder/600/400?text=Django+APIs",
    readTime: "10 min read",
    date: "2024-01-05",
    category: "Backend Development",
    link: "https://medium.com/@yourusername/modern-api-development-with-django-rest-framework",
    tags: ["Django", "REST", "Python"]
  },
  {
    id: "diffusion-models",
    title: "Understanding Diffusion Models and Stable Diffusion",
    description: "Deep dive into the mathematics and implementation of diffusion models for image generation, including Stable Diffusion architecture.",
    image: "/api/placeholder/600/400?text=Diffusion+Models",
    readTime: "12 min read",
    date: "2023-12-20",
    category: "Generative AI",
    link: "https://medium.com/@yourusername/understanding-diffusion-models-and-stable-diffusion",
    tags: ["AI", "Diffusion", "Generative"]
  },
  {
    id: "llms-guide",
    title: "Large Language Models: From Transformers to Practical Applications",
    description: "Exploring the evolution of LLMs, transformer architecture, and practical implementation strategies for real-world applications.",
    image: "/api/placeholder/600/400?text=LLMs+Guide",
    readTime: "15 min read",
    date: "2023-12-15",
    category: "Natural Language Processing",
    link: "https://medium.com/@yourusername/large-language-models-from-transformers-to-practical-applications",
    tags: ["LLMs", "Transformers", "NLP"]
  }
];

// Research projects data
const researchProjects = [
  {
    id: "authoryse",
    title: "DECENTRALIZED BIOMETRIC AUTHENTICATION THROUGH BLOCKCHAIN-NEURAL NETWORK CONVERGENCE",
    subtitle: "Development and Analysis of the AuthoRyse System",
    description: "A novel authentication system combining blockchain technology with neural networks for secure, decentralized biometric authentication.",
    image: "/api/placeholder/600/400?text=AuthoRyse+System",
    category: "Security & AI",
    date: "2024",
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
    link: "https://medium.com/@yourusername/authoryse-decentralized-biometric-authentication",
    publication: "Journal of Cybersecurity and AI Research",
    status: "Completed"
  }
];

const ResearchPage = () => {
  const [activeSection, setActiveSection] = useState<"blog" | "research">("blog");
  const [selectedResearch, setSelectedResearch] = useState(null);

  const openResearchModal = (project) => {
    setSelectedResearch(project);
    document.body.style.overflow = 'hidden';
  };

  const closeResearchModal = () => {
    setSelectedResearch(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-green-500/5 to-transparent">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-3 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-green-400 tracking-wide">
                  RESEARCH & WRITING
                </span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
                Exploring <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Frontiers</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Deep dives into technology, research findings, and technical insights 
                from my journey in AI, blockchain, and software engineering.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Navigation Toggle */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="flex justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button
                onClick={() => setActiveSection("blog")}
                className={`px-8 py-4 rounded-full border text-lg font-medium transition-all duration-300 flex items-center gap-3 ${
                  activeSection === "blog"
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <BookOpen size={20} />
                Technical Blog
              </button>
              <button
                onClick={() => setActiveSection("research")}
                className={`px-8 py-4 rounded-full border text-lg font-medium transition-all duration-300 flex items-center gap-3 ${
                  activeSection === "research"
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <FileText size={20} />
                Research Projects
              </button>
            </motion.div>

            <AnimatePresence mode="wait">
              {activeSection === "blog" && (
                <motion.div
                  key="blog"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <BlogSection posts={blogPosts} />
                </motion.div>
              )}

              {activeSection === "research" && (
                <motion.div
                  key="research"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <ResearchSection 
                    projects={researchProjects} 
                    onProjectSelect={openResearchModal}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>

      {/* Research Project Modal */}
      <AnimatePresence>
        {selectedResearch && (
          <ResearchModal 
            project={selectedResearch} 
            onClose={closeResearchModal} 
          />
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
};

// Blog Section Component
const BlogSection = ({ posts }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <motion.article
          key={post.id}
          className="group cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group-hover:scale-105 group-hover:border-white/20"
          >
            {/* Blog Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-green-500/80 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Blog Content */}
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  {post.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {new Date(post.date).toLocaleDateString()}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-green-400 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {post.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Read More */}
              <div className="flex items-center justify-between">
                <span className="text-green-400 text-sm font-medium group-hover:underline">
                  Read on Medium →
                </span>
                <ExternalLink size={16} className="text-gray-400 group-hover:text-green-400 transition-colors" />
              </div>
            </div>
          </a>
        </motion.article>
      ))}
    </div>
  );
};

// Research Section Component
const ResearchSection = ({ projects, onProjectSelect }) => {
  return (
    <div className="grid gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          className="group cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          onClick={() => onProjectSelect(project)}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group-hover:scale-105 group-hover:border-green-500/30">
            <div className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Research Image */}
                <div className="lg:w-1/3">
                  <div className="relative h-48 lg:h-full rounded-xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Research Content */}
                <div className="lg:w-2/3 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                    <span className="text-gray-400 text-sm">{project.date}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-gray-300 mb-2">
                    {project.subtitle}
                  </p>

                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 rounded-lg text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action */}
                  <div className="flex items-center justify-between pt-6">
                    <span className="text-green-400 text-sm font-medium group-hover:underline">
                      View Research Details →
                    </span>
                    <div className="flex gap-2">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Research Modal Component
const ResearchModal = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gray-900 rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full border border-green-500/20"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {/* Header */}
          <div className="sticky top-0 bg-gray-900 border-b border-green-500/20 p-6 flex justify-between items-start z-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <span className="text-gray-400 text-sm">{project.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              <p className="text-lg text-green-400 mt-1">{project.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors ml-4"
            >
              <X size={24} className="text-gray-400" />
            </button>
          </div>

          <div className="p-6 space-y-8">
            {/* Abstract */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <FileText className="text-green-400" size={20} />
                Abstract
              </h3>
              <p className="text-gray-300 leading-relaxed">{project.abstract}</p>
            </div>

            {/* Objectives */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Brain className="text-green-400" size={20} />
                Research Objectives
              </h3>
              <ul className="space-y-2">
                {project.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    {objective}
                  </li>
                ))}
              </ul>
            </div>

            {/* Methodology */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Network className="text-green-400" size={20} />
                Methodology
              </h3>
              <p className="text-gray-300 leading-relaxed">{project.methodology}</p>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Shield className="text-green-400" size={20} />
                Key Results
              </h3>
              <p className="text-gray-300 leading-relaxed">{project.results}</p>
            </div>

            {/* Publication & Links */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-green-500/20">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg transition-colors text-white font-medium"
                >
                  <ExternalLink size={20} />
                  Read Full Paper
                </a>
              )}
              {project.publication && (
                <div className="flex-1">
                  <p className="text-sm text-gray-400">Published in</p>
                  <p className="text-green-400 font-medium">{project.publication}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ResearchPage;