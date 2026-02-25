import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import '../../styles/HeroSection.css';

export function HeroSection({ profileImage , onHireClick  }) {
  const [typedText, setTypedText] = useState("");
  const fullText = "I am Ameh Emmanuel";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else clearInterval(typingInterval);
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="hero-section" id="home">
      <motion.div
        className="hero-bg-circle hero-bg-circle-1"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-bg-circle hero-bg-circle-2"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="hero-content">
        <motion.div
          className="hero-profile-container"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className="hero-profile-inner"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="hero-profile-glow" />
            <img
              src={profileImage}
              alt="Ameh Emmanuel"
              className="hero-profile-img"
            />
          </motion.div>
        </motion.div>

        <motion.div className="hero-name-container" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h1 className="hero-name">
            {typedText}
            <span className={`hero-cursor ${showCursor ? 'visible' : ''}`} />
          </h1>
        </motion.div>

        <motion.div className="hero-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }}>
          <p>Frontend Developer</p>
        </motion.div>

        <motion.div className="hero-description" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.3 }}>
          <p>Building modern web applications with React, Supabase, APIs, and MySQL</p>
        </motion.div>

        <motion.div className="hero-cta" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.6 }}>
          <motion.button onClick={onHireClick} className="hero-btn-hire" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
            Hire Me
            <div className="hero-btn-glow" />
          </motion.button>

          <motion.div className="hero-available" whileHover={{ scale: 1.05 }}>
            <motion.div className="hero-available-dot" animate={{ scale: [1,1.2,1], opacity: [1,0.7,1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
            <span>Available</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}