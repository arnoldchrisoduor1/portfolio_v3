"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { ResearchProject } from "@/types/research";

interface ResearchSectionProps {
  projects: ResearchProject[];
  onProjectSelect: (project: ResearchProject) => void;
}

const ResearchSection: React.FC<ResearchSectionProps> = ({ projects, onProjectSelect }) => {
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
                      src={project.image ?? ""} 
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

                  <p className="text-lg text-gray-300 mb-2">{project.subtitle}</p>

                  <p className="text-gray-400 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {(project.technologies ?? []).map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/10 rounded-lg text-sm text-gray-300">
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

export default ResearchSection;