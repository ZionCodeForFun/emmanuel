import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import "../../styles/footer.css";
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          
       
          <div className="footer-socials">
            <motion.a
              href="https://github.com/ZionCodeForFun"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="footer-icon"
              aria-label="GitHub"
            >
              <Github />
            </motion.a>

            <motion.a
              href="https://x.com/emmyzion_"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="footer-icon"
              aria-label="Twitter/X"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </motion.a>
          </div>

          <div className="footer-copy">
            <span>© 2026 Ameh Emmanuel. Built with React</span>
         
          </div>

        
          <div className="footer-extra">
            All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}