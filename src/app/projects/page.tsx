"use client";
import useUIStore from "@/store/useStore";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Project, Tool, UIStore, LoadingState, FilteredProjects } from "../../types/types";

const projects = [
  {
    id: "ai",
    category: "AI/ML",
    title: "SmartAssist",
    description:
      "AI-powered virtual assistant that learns from user interactions to provide personalized recommendations and task automation",
    tools: [
      {id: 1, item: "Python", color: "bg-blue-500"}, 
      {id: 2, item: "TensorFlow", color: "bg-orange-500"}, 
      {id: 3, item: "Docker", color: "bg-blue-300"}
    ], 
    delay: 0.1
  },
  {
    id: "web",
    category: "Web",
    title: "PortfolioHub",
    description:
      "Responsive web application for creative professionals to showcase their work with customizable themes and analytics",
    tools: [
      {id: 4, item: "React", color: "bg-blue-400"}, 
      {id: 5, item: "NextJS", color: "bg-black"}, 
      {id: 6, item: "Tailwind", color: "bg-cyan-500"}
    ], 
    delay: 0.2
  },
  {
    id: "analysis",
    category: "Analysis",
    title: "DataVision",
    description:
      "Data analysis platform with interactive visualizations for business intelligence and decision-making processes",
    tools: [
      {id: 7, item: "Python", color: "bg-blue-500"}, 
      {id: 8, item: "Pandas", color: "bg-purple-500"}, 
      {id: 9, item: "D3.js", color: "bg-orange-400"}
    ], 
    delay: 0.3
  },
  {
    id: "algos",
    category: "Algorithms",
    title: "PathFinder",
    description:
      "Algorithm visualization tool that demonstrates sorting, searching, and graph algorithms with step-by-step explanations",
    tools: [
      {id: 10, item: "JavaScript", color: "bg-yellow-500"}, 
      {id: 11, item: "TypeScript", color: "bg-blue-600"}, 
      {id: 12, item: "Canvas API", color: "bg-green-500"}
    ], 
    delay: 0.4
  },
  {
    id: "mlops",
    category: "MLOps/DevOps",
    title: "DeployFlow",
    description:
      "CI/CD pipeline automation system for machine learning models with built-in monitoring and performance tracking",
    tools: [
      {id: 13, item: "Kubernetes", color: "bg-blue-600"}, 
      {id: 14, item: "Jenkins", color: "bg-red-500"}, 
      {id: 15, item: "Terraform", color: "bg-purple-600"}
    ], 
    delay: 0.5
  },
];

const Page = () => {
  const { activeProjectTab, setActiveProjectTab } = useUIStore();
  const [loading, setLoading] = useState<LoadingState>(true);
  const [filteredProjects, setFilteredProjects] = useState<FilteredProjects>([]);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Filter projects based on active tab
    if (activeProjectTab === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.id === activeProjectTab));
    }

    return () => clearTimeout(timer);
  }, [activeProjectTab]);

  return (
    <>
      <div className="text-center mt-10">
        <p className="text-lg font-extralight">The best software solutions evolve from understanding the problem deeply</p>
        <p className="italic">- Linus Torvalds (2003)</p>
      </div>

      <div className="mt-10 flex flex-wrap mx-2 gap-3 justify-center">
        <div onClick={() => setActiveProjectTab("all")}>
          <p
            className={`px-2 py-1 inline-block rounded-full min-w-max text-lg hover:cursor-pointer ${
              activeProjectTab === "all" ? "bg-black" : "bg-black/30"
            }`}
          >
            All
          </p>
        </div>
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveProjectTab(project.id)}
            className=""
          >
            <p
              className={`px-2 py-1 inline-block rounded-full min-w-max text-lg lg:text-xl hover:cursor-pointer hover:bg-black/60 ${
                activeProjectTab === project.id ? "bg-black" : "bg-black/30"
              }`}
            >
              {project.category}
            </p>
          </div>
        ))}
      </div>

      <div className="w-[80%] mx-auto flex flex-col gap-10 mt-10 lg:mt-18 mb-[30%] lg:mb-[5%]">
        {loading ? (
          // Loading skeletons
          Array(3).fill(0).map((_, index) => (
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
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{ delay: project.delay }}
            >
              <div>
                <p className="text-2xl lg:text-3xl">{project.title}</p>
              </div>
              <div className="lg:text-xl">{project.description}</div>
              <div className="flex gap-5">
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