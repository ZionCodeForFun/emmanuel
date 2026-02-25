import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useInView } from "../../components/useView";
import "../../styles/projectSection.css";
import ebest from '../../assets/ebest.png'
const projects = [
  {
    title: "E-Best e-commerce web app",
    description:
      "A modern e-commerce platform with real-time inventory management and secure payment integration.",
    tech: ["React", "Supabase", "Vanilla CSS"],
    image:
      ebest,
    liveUrl: "https://ebestgr.com",
    githubUrl: "https://github.com/ZionCodeForFun/E-Best.git",
  },
  {
    title: "Trace Aid Fundraising",
    description:
      "A comprehensive fundraising platform enabling transparent donation tracking and campaign management.",
    tech: ["React", "MySQL", "REST APIs"],
    image:
      "https://my-portfolio-eosin-seven-90.vercel.app/assets/traceaid-jpU_amV9.jpg",
    liveUrl: "https://trace-aid.vercel.app/#",
    githubUrl: "https://github.com/ZionCodeForFun/TraceAid.git",
  },
  {
    title: "Breakfast Ordering App",
    description:
      "An intuitive ordering system for breakfast items with real-time order tracking and payment processing.",
    tech: ["React", "MySQL", "API Integration"],
    image:
      "https://my-portfolio-eosin-seven-90.vercel.app/assets/snapbreakfast-gSAWeYCN.jpg",
    liveUrl: "https://snap-break-fast-webapp.vercel.app/",
    githubUrl: "https://github.com/ZionCodeForFun/Snap-BreakFast-webapp.git",
  },
];

export function ProjectsSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="projects-title">Featured Projects</h2>

          <p className="projects-subtitle">
            Here are some of my recent projects that showcase my skills and
            passion for building amazing web applications.
          </p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="project-card-wrapper"
              >
                <div className="project-card">
                  <div className="project-glow" />

                  <div className="project-inner">
                    <div className="project-image-wrapper">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                      />
                      <div className="image-overlay" />
                    </div>

                    <div className="project-content">
                      <h3 className="project-title">
                        {project.title}
                      </h3>

                      <p className="project-description">
                        {project.description}
                      </p>

                      <div className="project-tech">
                        {project.tech.map((tech) => (
                          <span key={tech} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="project-actions">
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary"
                          >
                            <ExternalLink size={16} />
                            <span>Live Demo</span>
                          </motion.a>
                        )}

                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-secondary"
                          >
                            <Github size={18} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}