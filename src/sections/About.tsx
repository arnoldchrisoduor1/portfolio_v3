"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { 
  Cpu, 
  Code2, 
  Brain, 
  Server,
  BookOpen,
  Briefcase,
  Building2,
  type LucideIcon,
} from "lucide-react";

type ExperienceItem =
  | {
      company: string;
      role: string;
      period: string;
      tenure: string;
      logo: string;
      accentColor: string;
      dotColor: string;
      borderColor: string;
      responsibilities: string[];
    }
  | {
      company: string;
      role: string;
      period: string;
      tenure: string;
      icon: LucideIcon;
      accentColor: string;
      dotColor: string;
      borderColor: string;
      responsibilities: string[];
    };

function tenureSince(start: string): string {
  const [year, month = 1] = start.split("-").map(Number);
  const now = new Date();
  const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month);
  if (months < 12) return `${Math.max(months, 1)} months`;
  const years = Math.floor(months / 12);
  const remainder = months % 12;
  const yearLabel = years === 1 ? "1 year" : `${years} years`;
  return remainder === 0 ? yearLabel : `${yearLabel} ${remainder} mo`;
}

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
      title: "Languages",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      items: [
        "Go, Rust, Elixir",
        "TypeScript, Python, SQL",
        "C/C++, Java"
      ]
    },
    {
      title: "Backend & Web",
      icon: Server,
      color: "from-cyan-500 to-blue-500",
      items: [
        "Go (Fiber, GORM), NestJS, FastAPI, Laravel",
        "Next.js, React, REST APIs",
        "PostgreSQL, MySQL, Redis, Flyway"
      ]
    },
    {
      title: "ML & Automation",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      items: [
        "TensorFlow, Keras, scikit-learn, Pandas, NumPy",
        "CNNs, autoencoders, face recognition",
        "n8n, OpenRouter, SAP RFC, SAM.gov"
      ]
    },
    {
      title: "DevOps & Hardware",
      icon: Cpu,
      color: "from-orange-500 to-red-500",
      items: [
        "Docker Compose, Nginx, Caddy, Certbot",
        "DigitalOcean, AWS Lightsail, GitHub Actions",
        "STM32/ESP32, Dahua device SDK, Playwright"
      ]
    }
  ];

  const education = [
    {
      institution: "Mount Kenya University",
      degree: "BTech Electronics and Computer Systems",
      period: "Nairobi",
      focus: "Coursework: Artificial Intelligence, Algorithms and Data Structures, System Design, Compiler Design, Network Administration, Power Electronics"
    },
    {
      institution: "Certifications",
      degree: "DataCamp Data Scientist Associate",
      period: "AWS Solutions Architect Associate",
      focus: "Data science practice, and cloud architecture on AWS"
    },
    {
      institution: "Self-directed",
      degree: "Electronics and mathematics for ML",
      period: "Independent study",
      focus: "Electronics principles (Schuler), linear algebra, statistics, and calculus for machine learning"
    }
  ];

  const experience: ExperienceItem[] = [
    {
      company: "Unga Group PLC",
      role: "Full Stack Engineer (Contract)",
      period: "Dec 2025 – Present",
      tenure: tenureSince("2025-12"),
      logo: "/unga-group-logo.png",
      accentColor: "from-amber-500 to-orange-500",
      dotColor: "bg-amber-500",
      borderColor: "border-amber-500/40",
      responsibilities: [
        "Built and maintained Point of Entry, a biometric access-control platform (Go/Fiber, Next.js, PostgreSQL, Docker) for 2,000 users across 5 sites. It talks to Dahua access-control devices through their SDK, so enrollment, device sync, and access events live in one system.",
        "Develop and maintain Unga FugoSmart, a Java mobile app, and built its web version from scratch so the same workflows are available beyond the mobile audience.",
        "Work with HR, Procurement, and Logistics to gather requirements and keep the software each department uses aligned with how they actually work.",
        "Developed and integrated face recognition and other machine-learning features into the access-control platform and the existing factory-operations software.",
        "Maintained a Laravel vendor-onboarding portal connected to SAP through RFC middleware, syncing vendors, purchase orders, and invoices so procurement data stays consistent.",
        "Monitored the logistics application in production, including database locking, DNS resolution faults, and mail-delivery failures.",
        "Run separate production and test Docker environments with Flyway migrations, a systemd watchdog for automatic recovery, and email notifications, so a release is exercised before it reaches production.",
      ],
    },
    {
      company: "Nuvemite Technologies",
      role: "Forward Deployment Engineer",
      period: "Dec 2025 – Present",
      tenure: tenureSince("2025-12"),
      icon: Briefcase,
      accentColor: "from-indigo-500 to-purple-500",
      dotColor: "bg-indigo-500",
      borderColor: "border-indigo-500/40",
      responsibilities: [
        "Deliver end-to-end software for large organizations, from requirements through deployment and ongoing support. This role started in the same month as the Unga contract because the two companies work together.",
        "Deploy client systems on DigitalOcean and AWS Lightsail with Docker Compose, Nginx, and scripted deploys.",
      ],
    },
    {
      company: "Digital Wilderness Labs",
      role: "Co-Founder",
      period: "2023 – Present",
      tenure: "Since 2023",
      icon: Building2,
      accentColor: "from-emerald-500 to-teal-500",
      dotColor: "bg-emerald-500",
      borderColor: "border-emerald-500/40",
      responsibilities: [
        "Software and hardware studio and applied research lab. Designed and shipped multi-tenant SaaS products, including a visitor management system and barber, wellness, and laundry POS platforms, with Pesapal/M-Pesa payments and SMS, WhatsApp, and email notifications.",
        "Built an LLM-powered contract-scouting agent for a US-based holding company. The pipeline is described under Projects.",
        "Deploy and operate several client applications on shared cloud servers, each in its own Docker stack.",
      ],
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            Production <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">systems</span> and hardware
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Full-stack and automation engineer working in Go, TypeScript, and Python.
            Multi-tenant SaaS, biometric and IoT integrations, and LLM-driven workflows,
            with a background in electronics and embedded systems.
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
                BTech in Electronics and Computer Systems from Mount Kenya University, Nairobi.
                I use that hardware background on biometric devices, analog signal conditioning,
                and STM32/ESP32 firmware, and ship the software around them in{" "}
                <span className="text-blue-400">Go</span>,{" "}
                <span className="text-purple-400">TypeScript</span>, and Python.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-light mb-4 text-blue-400">Focus Areas</h3>
              <p className="text-gray-300 leading-relaxed">
                Access control that stays in sync with{" "}
                <span className="text-green-400">Dahua devices</span>, multi-tenant products for
                visitors, barbers, wellness, and laundry, and{" "}
                <span className="text-pink-400">LLM pipelines</span> that turn a manual research
                task into a daily digest. Machine learning shows up where the product needs it:
                CNNs, autoencoders, and face recognition.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-light mb-4 text-purple-400">Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                Separate test and production Docker environments,{" "}
                <span className="text-cyan-400">Flyway</span> migrations, Go integration tests,
                and Playwright end-to-end coverage. Releases are exercised before they reach
                production, and a systemd watchdog restarts a failed service on its own.
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

        {/* Experience — Building Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          {/* Section heading */}
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-green-400 tracking-wide">Solutions Oriented</span>
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full animate-pulse" />
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-4">
              Work{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Unga Group and Nuvemite started in December 2025 and run in parallel because the companies work together. Digital Wilderness Labs is the studio behind several of the products.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/60 via-indigo-500/60 to-transparent hidden sm:block" />

            <div className="space-y-12">
              {experience.map((job, index) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="relative sm:pl-20"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-0 top-6 w-12 h-12 rounded-full ${job.dotColor}/20 border-2 ${job.borderColor} items-center justify-center hidden sm:flex`}>
                    {"logo" in job ? (
                      <Image
                        src={job.logo}
                        alt={`${job.company} logo`}
                        width={28}
                        height={28}
                        className="object-contain rounded-full bg-white h-full w-full"
                      />
                    ) : (
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${job.accentColor} flex items-center justify-center`}>
                        <job.icon size={13} className="text-white" />
                      </div>
                    )}
                  </div>

                  {/* Card */}
                  <div className={`bg-white/5 backdrop-blur-sm border border-white/10 hover:${job.borderColor} rounded-2xl p-7 transition-all duration-300 hover:bg-white/8 group`}>
                    {/* Card header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                      <div>
                        <h4 className="text-2xl font-semibold text-white mb-1">{job.company}</h4>
                        <p className={`text-sm font-medium bg-gradient-to-r ${job.accentColor} bg-clip-text text-transparent`}>
                          {job.role}
                        </p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                        <span className="text-gray-300 text-sm">{job.period}</span>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${job.accentColor} text-white`}>
                          {job.tenure}
                        </span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-3">
                      {job.responsibilities.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.06 }}
                          className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed"
                        >
                          <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${job.accentColor} shrink-0`} />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
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
            <h3 className="text-3xl font-light mb-4">Technical stack</h3>
            <p className="text-gray-400">Tools used on the systems above</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { name: "Go", detail: "Fiber, GORM", color: "bg-cyan-500" },
              { name: "TypeScript", detail: "Next.js, React, NestJS", color: "bg-blue-500" },
              { name: "Python", detail: "FastAPI, TensorFlow", color: "bg-yellow-500" },
              { name: "Java", detail: "FugoSmart mobile", color: "bg-orange-500" },
              { name: "PostgreSQL", detail: "Flyway, Redis, MySQL", color: "bg-blue-400" },
              { name: "Docker", detail: "Compose, Nginx, Caddy", color: "bg-sky-400" },
              { name: "Cloud", detail: "DigitalOcean, Lightsail", color: "bg-orange-400" },
              { name: "Automation", detail: "n8n, SAP RFC, M-Pesa", color: "bg-emerald-400" },
              { name: "Testing", detail: "Playwright, Go, Jest", color: "bg-green-300" },
              { name: "ML", detail: "Keras, CNNs, OpenRouter", color: "bg-purple-400" },
              { name: "Embedded", detail: "STM32, ESP32, Proteus", color: "bg-red-400" },
              { name: "Systems", detail: "Rust, Elixir, C/C++", color: "bg-rose-300" },
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
                <p className="text-gray-400 text-sm">{tech.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;