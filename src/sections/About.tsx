"use client";
import { motion } from "framer-motion";
import React from "react";
import { 
  Cpu, 
  Database, 
  Cloud, 
  Code2, 
  Brain, 
  BarChart3,
  Server,
  TestTube,
  BookOpen,
  Award
} from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      items: [
        "Deep Neural Networks",
        "Computer Vision",
        "Statistical Analysis",
        "Data Visualization",
        "Model Deployment"
      ]
    },
    {
      title: "Full Stack Development",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      items: [
        "TypeScript/React/Next.js/Nest",
        "Python/FastAPI/Django",
        "Rust Systems Programming",
        "REST & GraphQL APIs",
        "Microservices Architecture",
        "MongoDB, Postgres, MySQL"
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      items: [
        "AWS Infrastructure",
        "Docker & Containerization",
        "Serverless Architecture",
        "Prometheus & Grafana",
        "CI/CD Pipelines"
      ]
    },
    {
      title: "Data Engineering",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      items: [
        "Data Analytics",
        "Jupyter Notebooks",
        "ETL Pipelines",
        "Statistical Modeling",
        "Dashboard Creation"
      ]
    }
  ];

  const education = [
    {
      institution: "Mount Kenya University",
      degree: "BTech Electronics & Computer Systems Engineering",
      period: "Ongoing",
      focus: "Artificial Intelligence & Systems Engineering"
    },
    {
      institution: "ALX Software Engineering",
      degree: "Software Engineering Certification",
      period: "2023",
      focus: "Full Stack Development & System Design"
    },
    {
      institution: "DataCamp",
      degree: "Data Science & Machine Learning",
      period: "2025",
      focus: "Statistical Analysis & ML Modeling"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-green-400 tracking-wide">
              ABOUT ME
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full animate-pulse" />
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
            Engineering <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Intelligent</span> Systems
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Electronics & Computer Systems Engineer specializing in AI, scalable architectures, 
            and data-driven solutions. Bridging the gap between theoretical mathematics and 
            practical software engineering.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Introduction */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-light mb-4 text-green-400">Background</h3>
              <p className="text-gray-300 leading-relaxed">
                As an Electronics and Computer Systems Engineering student, I combine 
                strong mathematical foundations in <span className="text-blue-400">calculus</span> and{" "}
                <span className="text-purple-400">linear algebra</span> with practical software engineering 
                to build intelligent, scalable systems.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-light mb-4 text-blue-400">Focus Areas</h3>
              <p className="text-gray-300 leading-relaxed">
                My passion lies in creating <span className="text-green-400">data-driven applications</span>, 
                deploying <span className="text-pink-400">machine learning models</span>, and architecting{" "}
                <span className="text-orange-400">high-performance systems</span> using modern technologies 
                across the entire stack.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-light mb-4 text-purple-400">Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                I believe in <span className="text-cyan-400">test-driven development</span>,{" "}
                <span className="text-yellow-400">continuous integration</span>, and building 
                systems that are not just functional, but <span className="text-green-400">resilient and maintainable</span>.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-3 text-white">
                    {category.title}
                  </h4>
                  
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <motion.li
                        key={item}
                        className="text-sm text-gray-300 flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (itemIndex * 0.05) }}
                      >
                        <div className="w-1 h-1 bg-gray-400 rounded-full mr-3" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light mb-4">Education & Certifications</h3>
            <p className="text-gray-400">Formal education and continuous learning</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <BookOpen className="text-white" size={20} />
                </div>
                
                <h4 className="text-xl font-semibold mb-2 text-white">{edu.institution}</h4>
                <p className="text-green-400 text-sm mb-3">{edu.degree}</p>
                <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                <p className="text-gray-300 text-sm">{edu.focus}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Overview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-white/10"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-light mb-4">Technical Arsenal</h3>
            <p className="text-gray-400">Technologies I use to bring ideas to life</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { name: "TypeScript", count: 12, color: "bg-blue-500" },
              { name: "Python", count: 15, color: "bg-yellow-500" },
              { name: "AWS", count: 8, color: "bg-orange-500" },
              { name: "React/Next", count: 10, color: "bg-cyan-500" },
              { name: "Docker", count: 7, color: "bg-blue-400" },
              { name: "TensorFlow", count: 6, color: "bg-orange-400" },
              { name: "FastAPI", count: 5, color: "bg-green-500" },
              { name: "Rust", count: 4, color: "bg-red-500" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-3 h-3 ${tech.color} rounded-full mx-auto mb-2`} />
                <h4 className="font-medium text-white mb-1">{tech.name}</h4>
                <p className="text-gray-400 text-sm">{tech.count}+ projects</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;