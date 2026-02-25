import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaDatabase, FaPaintBrush } from 'react-icons/fa';
import { SiJavascript, SiSupabase, SiPostman } from 'react-icons/si';
import { RiTeamFill } from 'react-icons/ri';
import { MdOutlineLightbulb, MdAccessTime, MdMessage } from 'react-icons/md';
import { TbPuzzle } from 'react-icons/tb';
import '../../styles/SkillsMarquee.css'
const technicalSkills = [
  { name: 'React', icon: <FaReact /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'Supabase', icon: <SiSupabase /> },
  { name: 'MySQL', icon: <FaDatabase /> },
  { name: 'APIs', icon: <SiPostman /> },
  { name: 'Design', icon: <FaPaintBrush /> },
];

const softSkills = [
  { name: 'Problem Solving', icon: <TbPuzzle /> },
  { name: 'Communication', icon: <MdMessage /> },
  { name: 'Teamwork', icon: <RiTeamFill /> },
  { name: 'Creativity', icon: <MdOutlineLightbulb /> },
  { name: 'Time Management', icon: <MdAccessTime /> },
];

export function SkillsMarquee() {
  return (
    <section className="skills-marquee">
      <div className="skills-container">
        <div className="marquee marquee-left">
          {[...technicalSkills, ...technicalSkills, ...technicalSkills].map(
            (skill, index) => (
              <motion.div
                key={`tech-${index}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="skill-card tech-card"
              >
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            )
          )}
        </div>

        <div className="marquee marquee-right">
          {[...softSkills, ...softSkills, ...softSkills].map(
            (skill, index) => (
              <motion.div
                key={`soft-${index}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="skill-card soft-card"
              >
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}