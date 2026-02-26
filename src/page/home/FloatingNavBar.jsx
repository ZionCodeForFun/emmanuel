import React from "react";
import { Home, Github, FileText, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import "../../styles/FloatingNavbar.css";
import { FaFacebookF } from "react-icons/fa";

export function FloatingNavbar({ isDarkMode, toggleTheme }) {
  const navItems = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ZionCodeForFun",
      external: true,
    },
    {
      icon: FileText,
      label: "Resume",
      href: "resume.pdf",
    },
    {
      icon: FaFacebookF,
      label: "Facebook",
      href: "https://facebook.com/zionemmanuel11",
      external: true,
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="floating-nav"
    >
      <div className="floating-nav-container">
        <div className="nav-items">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="nav-link"
              aria-label={item.label}
            >
              <item.icon className="nav-icon" />
              <motion.div className="nav-hover-bg" initial={false} />
            </motion.a>
          ))}

          <motion.a
            href="https://x.com/emmyzion_"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="nav-link"
            aria-label="Twitter/X"
          >
            <svg className="nav-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <motion.div className="nav-hover-bg" initial={false} />
          </motion.a>

          <div className="nav-divider" />

          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.95 }}
            className="nav-link"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="nav-icon" />
            ) : (
              <Moon className="nav-icon" />
            )}
            <motion.div className="nav-hover-bg" initial={false} />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
