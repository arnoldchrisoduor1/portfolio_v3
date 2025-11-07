"use client";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-green-500/5 to-transparent">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div className="inline-flex items-center gap-3 mb-6" whileHover={{ scale: 1.05 }}>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-green-400 tracking-wide">RESEARCH & WRITING</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
            Exploring{" "}
            <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Frontiers
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Deep dives into technology, research findings, and technical insights from my journey in AI, blockchain, and software engineering.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;