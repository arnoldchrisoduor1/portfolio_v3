"use client";
import useUIStore from "@/store/useStore";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Project, Tool, UIStore, LoadingState, FilteredProjects } from "../../types/types";
import Link from "next/link";

// Updated project data with multiple categories and links
const projects: Project[] = [
  {
    id: "medicals",
    categories: ["AI/ML"],
    title: "Medical ML Model",
    description:
      "Trained and tuned the parameters of various regression machine learning models to get the best model that can predict a patients medical costs based on certain criteria some of the models were:- XGBoost, Random, Forest with RFE, Ridge regression and others.",
    tools: [
      { id: 1, item: "Python", color: "bg-blue-600" },
      { id: 2, item: "Scikit-learn", color: "bg-yellow-500" },
      { id: 3, item: "TensorFlow", color: "bg-orange-500" },
    ],
    codeLink: "https://github.com/arnoldchrisoduor1/MachineLearning-and-NeuralNetworks",
    liveLink: null,
    delay: 0.1
  },
  {
    id: "iris",
    categories: ["AI/ML", "Mobile"],
    title: "Iris",
    description:
      "A mobile app designed to detect various everyday objects using custom trained Convolutional Neural Networks (CNNs) trained on vast images.",
    tools: [
      { id: 1, item: "Python", color: "bg-blue-600" },
      { id: 2, item: "React Native", color: "bg-blue-400" },
      { id: 3, item: "JavaScript", color: "bg-yellow-400" },
      { id: 4, item: "TensorFlow", color: "bg-orange-500" },
      { id: 5, item: "AWS", color: "bg-yellow-600" }
    ],
    codeLink: "https://github.com/arnoldchrisoduor1/Iris",
    liveLink: null,
    delay: 0.1
  },
  {
    id: "muse",
    categories: ["Web", "Full Stack"],
    title: "Muse",
    description:
      "A social media platform built for creatives to share writings in poetry and satings and short stories",
    tools: [
      { id: 4, item: "React", color: "bg-blue-400" },
      { id: 5, item: "Django", color: "bg-green-800" },
      { id: 6, item: "Tailwind", color: "bg-cyan-500" },
      { id: 7, item: "Postgres", color: "bg-blue-500" },
      { id: 8, item: "AWS", color: "bg-yellow-600" }
    ],
    codeLink: "https://github.com/arnoldchrisoduor1/Iris",
    liveLink: "https://muse1.netlify.app/",
    delay: 0.2
  },
  {
    id: "beancart-app",
    categories: ["Web", "Full Stack"],
    title: "BeanCart Web Application",
    description:
      "An e-commerce platform built for the future, optimized for speed and security",
    tools: [
      { id: 4, item: "Angular", color: "bg-indigo-600" },
      { id: 5, item: "Springboot", color: "bg-red-500" },
      { id: 6, item: "Tailwind", color: "bg-cyan-500" },
      { id: 7, item: "Postgres", color: "bg-blue-500" },
      { id: 8, item: "AWS", color: "bg-yellow-600" },
    ],
    codeLink: "https://github.com/arnoldchrisoduor1/BeanCart",
    liveLink: "https://app.beancart.shop",
    delay: 0.2
  },
  {
    id: "beancart-landing",
    categories: ["Web", "FrontEnd"],
    title: "BeanCart Landing Page",
    description:
      "This is the landing page for the BeanCart e-commerce platform, modern design with intuitive animation to make the page responsive",
    tools: [
      { id: 4, item: "Vue", color: "bg-green-300" },
      { id: 6, item: "Tailwind", color: "bg-cyan-500" },
    ],
    codeLink: "https://github.com/arnoldchrisoduor1/BeanCart",
    liveLink: "https://beancart.shop",
    delay: 0.2
  },
  {
    id: "ai-medicals-landing",
    categories: ["Web", "FrontEnd"],
    title: "AI Medicals Landing Page",
    description:
      "This is the landing page for an AI powered hospital management system",
    tools: [
      { id: 4, item: "Nextjs", color: "bg-black" },
      { id: 6, item: "Tailwind", color: "bg-cyan-500" },
      { id: 7, item: "Framer-Motion", color: "bg-red-200" },
    ],
    codeLink: "https://github.com/arnoldchrisoduor1/Clinic_Management_System",
    liveLink: "https://aimedicals.netlify.app/",
    delay: 0.2
  },
  {
    id: "jumia-spider",
    categories: ["Analysis"],
    title: "Jumia Spider",
    description:
      "This spider can crawl and scrape the entire Jumia Online Retail Catalogue, it gets the product name, current price and previous price if a discount was offered. It then converts the data to csv format and sends it to my email.",
    tools: [
      { id: 7, item: "Python", color: "bg-blue-600" },
      { id: 8, item: "Pandas", color: "bg-purple-500" },
      { id: 9, item: "Scrapy", color: "bg-green-600" }
    ],
    codeLink: "https://github.com/arnoldchrisoduor1/Scrapers_Crawlers_Spiders_Bots",
    liveLink: null,
    delay: 0.3
  },
  {
    id: "climate-core",
    categories: ["Analysis", "Data Engineering"],
    title: "Climate Core",
    description:
      "Pulling data from a weather api, processing it and storing in the DB after performing light data analysis, also implmented a database intergrity and real time data monitoring system.",
    tools: [
      { id: 7, item: "Python", color: "bg-blue-600" },
      { id: 8, item: "Pandas", color: "bg-purple-500" },
      { id: 9, item: "numpy", color: "bg-green-600" }
    ],
    codeLink: "https://github.com/arnoldchrisoduor1/ClimateCore",
    liveLink: null,
    delay: 0.3
  },
  {
    id: "algos",
    categories: ["Algorithms"],
    title: "List Implementation",
    description:
      "Implemented the List data structure from scratch",
    tools: [
      { id: 10, item: "C++", color: "bg-blue-500" },
      { id: 11, item: "Python", color: "bg-blue-600" },
    ],
    codeLink: "https://github.com/arnoldchrisoduor1/DSA",
    liveLink: null,
    delay: 0.4
  },
  
  {
    id: "mlops-2",
    categories: ["MLOps/DevOps", "Backend"],
    title: "Flask Devops Pipeline",
    description:
      "A CRUD Flask Server Dockerized with Dockerfile that builds, runs unit tests and load testing with Locust before automatically registering the container to Docker Hub.",
    tools: [
      { id: 16, item: "Flask", color: "bg-black" },
      { id: 17, item: "Docker", color: "bg-blue-600" },
      { id: 18, item: "Locust", color: "bg-green-500" }
    ],
    codeLink: null,
    liveLink: null,
    delay: 0.6
  }
];

const Page = () => {
  const { activeProjectTab, setActiveProjectTab } = useUIStore();
  const [loading, setLoading] = useState<LoadingState>(true);
  const [filteredProjects, setFilteredProjects] = useState<FilteredProjects>([]);

  // Extract all unique categories from projects
  const getAllCategories = () => {
    const categoriesSet = new Set<string>();
    projects.forEach(project => {
      project.categories.forEach(category => {
        categoriesSet.add(category);
      });
    });
    return ["all", ...Array.from(categoriesSet)];
  };

  const categories = getAllCategories();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    if (activeProjectTab === "all") {
      setFilteredProjects(projects);
    } else {
      // Filter projects that have the active category in their categories array
      setFilteredProjects(
        projects.filter((project) => project.categories.includes(activeProjectTab))
      );
    }

    return () => clearTimeout(timer);
  }, [activeProjectTab]);

  return (
    <>
      <div className="text-center mt-10">
        <p className="text-lg font-extralight">
          The best software solutions evolve from understanding the problem deeply
        </p>
        <p className="italic">- Linus Torvalds (2003)</p>
      </div>

      <div className="mt-10 flex flex-wrap mx-2 gap-3 justify-center">
        {categories.map((category) => (
          <div key={category} onClick={() => setActiveProjectTab(category)}>
            <p
              className={`px-2 py-1 inline-block rounded-full min-w-max text-lg lg:text-xl hover:cursor-pointer hover:bg-black/60 ${
                activeProjectTab === category ? "bg-black text-white" : "bg-black/30"
              }`}
            >
              {category}
            </p>
          </div>
        ))}
      </div>

      <div className="w-[80%] mx-auto flex flex-col gap-10 mt-10 lg:mt-18 mb-[30%] lg:mb-[5%]">
        {loading ? (
          Array(3)
            .fill(0)
            .map((_, index) => (
              <div key={`skeleton-${index}`} className="animate-pulse flex flex-col gap-3 lg:w-[50%] lg:mx-auto">
                <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="flex gap-5">
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
            ))
        ) : (
          filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="flex flex-col gap-3 lg:gap-5 lg:w-[50%] lg:mx-auto hover:cursor-pointer hover:scale-105 transform duration-150"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: project.delay }}
            >
              <div className="flex justify-between items-center">
                <p className="text-2xl lg:text-3xl">{project.title}</p>
                <div className="flex gap-3">
                  {project.codeLink && (
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="border-2 border-gray-900 hover:bg-gray-900 text-white px-3 py-1 rounded-full text-sm flex items-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Code
                    </a>
                  )}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="border-2 border-green-900 hover:bg-green-700 text-white px-3 py-1 rounded-full text-sm flex items-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live
                    </a>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-1">
                {project.categories.map((category, index) => (
                  <span 
                    key={`${project.id}-category-${index}`} 
                    className="text-xs  px-2 py-1 rounded-full cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProjectTab(category);
                    }}
                  >
                    {category}
                  </span>
                ))}
              </div>
              <div className="lg:text-xl">{project.description}</div>
              <div className="flex gap-5 flex-wrap">
                {project.tools.map((tool) => (
                  <div key={tool.id} className="flex gap-1 items-center">
                    <div className={`w-2 h-2 rounded-full ${tool.color}`}></div>
                    <div className="inline-block min-w-max">{tool.item}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))
        )}
      </div>
    </>
  );
};

export default Page;