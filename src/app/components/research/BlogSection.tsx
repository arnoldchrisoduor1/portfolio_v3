"use client";
import { motion } from "framer-motion";
import { Clock, Calendar, ExternalLink } from "lucide-react";
import { BlogPost } from "@/types/research";

interface BlogSectionProps {
  posts: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
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
              <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
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

              <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300">
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

export default BlogSection;