"use-client";
import {
  Atom,
  ChevronUp,
  FolderKanban,
  Github,
  Linkedin,
  Mail,
  User,
} from "lucide-react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import useUIStore from "@/store/useStore";
import Link from "next/link";

const Navigation = () => {
  const { showSocials, setShowSocials, activeNav, setActiveNav } = useUIStore();

  // Navigation items data
  const navItems = [
    { id: "about", title: "About", icon: User, href: "/" },
    { id: "projects", title: "Pojects", icon: FolderKanban, href: "/projects" },
    { id: "skills", title: "Research", icon: Atom, href: "/research" },
  ];

  // Social items data
  const socialItems = [
    { id: "github", icon: Github, text: "See Code", delay: 0.1 },
    { id: "mail", icon: Mail, text: "Email Me", delay: 0.2 },
    { id: "linkedin", icon: Linkedin, text: "Lets Network", delay: 0.3 },
  ];

  // Toggle social buttons visibility
  const toggleSocials = () => setShowSocials(!showSocials);

  return (
    <>
      {/* Bottom Navigation bar */}
      <motion.div
        className="fixed lg:relative bottom-[4%] left-1/2 -translate-x-1/2 w-[50%] lg:w-[25%] lg:mt-10 bg-black lg:bg-black/30 px-4 py-4 lg:py-3 rounded-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex justify-between lg:justify-around items-center">
          {navItems.map((item) => (
            <Link key={item.id} href={item.href}>
              <motion.div
                // className={`rounded-full p-2 cursor-pointer ${
                // //   activeNav === item.id ? item.color : ""
                // }`}
                onClick={() => setActiveNav(item.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <p
                  className={`hidden lg:block ${
                    activeNav == item.id ? "text-green-700" : ""
                  }`}
                >
                  {item.title}
                </p>
                <item.icon
                  className="lg:hidden"
                  color={activeNav === item.id ? "green" : "white"}
                />
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Social Options */}
      {activeNav !== "about" ? (
        ""
      ) : (
        <div className="fixed bottom-[4%] right-[7%]">
          <div className="flex flex-col gap-3">
            <AnimatePresence>
              {showSocials &&
                socialItems.map((item) => (
                  <motion.div
                    key={item.id}
                    className="flex items-center justify-end"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: item.delay }}
                  >
                    <motion.div
                      className="bg-black p-2 rounded-full mr-1"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "auto", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ delay: item.delay + 0.1 }}
                    >
                      <p className="truncate whitespace-nowrap">{item.text}</p>
                    </motion.div>
                    <div className="bg-black p-4 rounded-full">
                      <item.icon />
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>

            {/* Chevron button */}
            <div className="flex justify-end">
              <motion.div
                className="bg-black p-4 rounded-full cursor-pointer"
                onClick={toggleSocials}
                onMouseEnter={() => setShowSocials(true)} // Set to true when hovering
                onMouseLeave={() => setShowSocials(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ rotate: showSocials ? 180 : 0, y: [0, -2, 0] }}
                transition={{
                  y: {
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 1,
                    ease: "easeInOut",
                  },
                }}
              >
                <ChevronUp />
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
