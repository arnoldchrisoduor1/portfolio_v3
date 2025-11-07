"use client";
import {
  Atom,
  ChevronUp,
  FolderKanban,
  Github,
  Linkedin,
  Mail,
  User,
  BookOpen,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useUIStore from "@/store/useStore";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const { showSocials, setShowSocials, activeNav, setActiveNav } = useUIStore();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Sync activeNav with current route
  useEffect(() => {
    if (pathname === "/") setActiveNav("about");
    // else if (pathname === "/projects") setActiveNav("projects");
    else if (pathname === "/research") setActiveNav("research");
  }, [pathname, setActiveNav]);

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items data
  const navItems = [
    { id: "about", title: "About", icon: User, href: "/" },
    // { id: "projects", title: "Projects", icon: FolderKanban, href: "/projects" },
    { id: "research", title: "Research", icon: BookOpen, href: "/research" },
  ];

  // Social items data
  const socialItems = [
    { 
      id: "github", 
      icon: Github, 
      text: "See Code", 
      delay: 0.1,
      href: "https://github.com/yourusername",
      color: "hover:text-gray-400"
    },
    { 
      id: "mail", 
      icon: Mail, 
      text: "Email Me", 
      delay: 0.2,
      href: "mailto:your.email@example.com",
      color: "hover:text-red-400"
    },
    { 
      id: "linkedin", 
      icon: Linkedin, 
      text: "Let's Network", 
      delay: 0.3,
      href: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-400"
    },
  ];

  const toggleSocials = () => setShowSocials(!showSocials);

  return (
    <>
      {/* Enhanced Navigation Bar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3" 
            : "bg-transparent py-6"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo/Brand */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xl font-light tracking-tight">
                Arnold<span className="text-green-500">.</span>
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link key={item.id} href={item.href}>
                  <motion.div
                    className={`relative px-4 py-2 rounded-full transition-all duration-300 group ${
                      activeNav === item.id 
                        ? "text-green-500" 
                        : "text-gray-300 hover:text-white"
                    }`}
                    onClick={() => setActiveNav(item.id)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <div className="flex items-center space-x-2">
                      <item.icon size={18} />
                      <span className="text-sm font-medium">{item.title}</span>
                    </div>
                    
                    {/* Active indicator */}
                    {activeNav === item.id && (
                      <motion.div
                        className="absolute inset-0 border border-green-500/30 rounded-full"
                        layoutId="activeNav"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 border border-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              {socialItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full bg-white/5 border border-white/10 transition-all duration-300 ${item.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <item.icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.div
                className="bg-black/50 p-3 rounded-full border border-white/10 cursor-pointer"
                onClick={toggleSocials}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronUp 
                  size={20} 
                  className={`transition-transform duration-300 ${
                    showSocials ? "rotate-180" : ""
                  }`} 
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
  <motion.div
    className="bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
  >
    <div className="flex items-center space-x-8">
      {navItems.map((item) => (
        <Link key={item.id} href={item.href}>
          <motion.div
            className={`p-2 rounded-full transition-colors duration-300 ${
              activeNav === item.id 
                ? "bg-green-500/20 text-green-500" 
                : "text-gray-300 hover:text-white"
            }`}
            onClick={() => setActiveNav(item.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <item.icon size={20} />
          </motion.div>
        </Link>
      ))}
    </div>
  </motion.div>
</div>

      {/* Mobile Social Options */}
      <AnimatePresence>
        {showSocials && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 md:hidden"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <div className="flex flex-col items-end space-y-3">
              {socialItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 group"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.span
                    className="bg-black/80 backdrop-blur-md text-white px-3 py-2 rounded-full text-sm border border-white/10"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {item.text}
                  </motion.span>
                  <motion.div
                    className="bg-black/80 backdrop-blur-md p-3 rounded-full border border-white/10 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <item.icon size={20} />
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;