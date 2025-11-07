"use client";
import { motion } from "framer-motion";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Systems Engineering Student",
      "Full Stack Developer", 
      "ML Engineer",
      "Technical Writer",
      "Problem Solver"
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div
          className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
          <span className="text-sm font-light tracking-wide">
            Currently building intelligent systems
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-6">
            Intelligence{" "}
            <span className="text-green-500 font-medium">Engineering</span>
          </h1>
        </motion.div>

        {/* Typewriter Section */}
        <motion.div
          className="text-xl sm:text-2xl text-gray-300 mb-12 h-8"
          variants={itemVariants}
        >
          <span className="font-light">
            {text}
            <Cursor cursorColor="#10B981" />
          </span>
        </motion.div>

        {/* Description */}
        <motion.div
          className="max-w-2xl mx-auto space-y-4 text-lg text-gray-400"
          variants={itemVariants}
        >
          <p>
            Building the future of intelligent systems through{" "}
            <span className="text-green-400 font-medium">machine learning</span>,{" "}
            <span className="text-blue-400 font-medium">scalable architecture</span>, and{" "}
            <span className="text-purple-400 font-medium">cutting-edge research</span>.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-12"
          variants={itemVariants}
        >
          {[
            { name: "Mount Kenya University", type: "education", url: "#" },
            { name: "BeanCart", type: "venture", url: "#" },
            { name: "Medium", type: "writing", url: "#" },
          ].map((item, index) => (
            <motion.a
              key={item.name}
              href={item.url}
              className={`px-4 py-2 rounded-full border text-sm transition-all duration-300 ${
                item.type === "education" 
                  ? "border-blue-500/30 text-blue-400 hover:bg-blue-500/10" 
                  : item.type === "venture"
                  ? "border-green-500/30 text-green-400 hover:bg-green-500/10"
                  : "border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
              }`}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-green-500 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;