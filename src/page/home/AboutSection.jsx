import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../../components/useView";
import "../../styles/aboutSection.css";

export function AboutSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} id="about" className="about-section">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="about-title">About Me</h2>

          <div className="about-grid">
            <motion.div
              initial={{ opacity: 1, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="about-image-wrapper"
            >
              <div className="about-image-bg" />
                 <div className="about-image-container">
                <img
                  src="https://scontent.fiba2-1.fna.fbcdn.net/v/t39.30808-6/490139846_122224209404228455_1023156835476457937_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=105&ccb=1-7&_nc_sid=3da8dc&_nc_ohc=cdtbw-ZUQ_oQ7kNvwGfke1L&_nc_oc=Adk-6JjTdzfj8IUQu2tbZwcj_3x2GO8Zh-4Zvck-GahwPuq7AqdVwBcy6_mGZEj4Hl4&_nc_zt=23&_nc_ht=scontent.fiba2-1.fna&_nc_gid=QP9uoV2JRIk9hH2KcRYwhA&oh=00_Afv6UZTIkv3VojB5qo-GCjXnL715sjdeWugRtT-eOoJdMQ&oe=69A4DEF3"
                  alt="Frontend Development"
                  className="about-image"
                />
                </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="about-text"
            >
              <div className="about-text-box">
                <p>
                  I'm a passionate{" "}
                  <span className="highlight">Frontend Developer</span>{" "}
                  specializing in creating beautiful, performant, and
                  user-friendly web applications.
                </p>

                <p>
                  With expertise in <span className="highlight">React</span>, I
                  build interactive and responsive web applications. I also work
                  with <span className="highlight">Supabase</span> and{" "}
                  <span className="highlight">MySQL</span> to integrate data and
                  manage backend functionality efficiently.
                </p>

                <p>
                  I thrive on turning complex problems into elegant frontend
                  solutions, and I'm always eager to learn new tools and take on
                  exciting projects.
                </p>

                <div className="about-stats">
                  <div className="stat">
                    <div className="stat-number">9+</div>
                    <div className="stat-label">Projects</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">2+</div>
                    <div className="stat-label">Years Exp</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Satisfaction</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
