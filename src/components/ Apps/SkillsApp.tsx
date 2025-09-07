'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiThreedotjs } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact />, level: 90 },
  { name: 'Next.js', icon: <SiNextdotjs />, level: 85 },
  { name: 'Node.js', icon: <FaNodeJs />, level: 80 },
  { name: 'Python', icon: <FaPython />, level: 75 },
  { name: 'Three.js', icon: <SiThreedotjs />, level: 70 },
];

export default function SkillsApp() {
  return (
    <div className="skills-app">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-details">
              <div className="skill-name">{skill.name}</div>
              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 1 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}