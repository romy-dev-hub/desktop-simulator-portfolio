'use client';

import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJava, 
  FaGitAlt, 
  FaBootstrap,
  FaUnity,
  FaGithub,
  FaLinux,
  FaCode
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiC,
  SiLua,
  SiAssemblyscript,
  SiThreedotjs,
  SiOracle,
  SiPopos,
  SiBun,
  SiExpress,
  SiCanva
} from 'react-icons/si';
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandFramerMotion } from "react-icons/tb";
import { BsFiletypeSql } from "react-icons/bs";
import { IoLogoVercel } from "react-icons/io5";

export default function SkillsApp() {
  // Skill categories based on your GitHub profile
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: <SiJavascript />, level: 85 },
        { name: "TypeScript", icon: <SiTypescript />, level: 82 },
        { name: "Python", icon: <FaPython />, level: 65 },
        { name: "Java", icon: <FaJava />, level: 75 },
        { name: "C", icon: <SiC />, level: 65},
        { name: "Lua", icon: <SiLua />, level: 72},
        { name: "Assembly", icon: <SiAssemblyscript />, level: 50}
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: <IoLogoHtml5 />, level: 90 },
        { name: "CSS3", icon: <IoLogoCss3 />, level: 90 },
        { name: "Bootstrap", icon: <FaBootstrap />, level: 85 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 80 },
        { name: "React", icon: <FaReact />, level: 90 },
        { name: "Framer Motion", icon: <TbBrandFramerMotion />, level: 71 },
        { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
        { name: "Three.js", icon: <SiThreedotjs />, level: 60 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 70 },
        { name: "REST APIs", icon: <FaNodeJs />, level: 0 },
        { name: "Bun", icon: <SiBun />, level: 60 },
        { name: "Express.js", icon: <SiExpress />, level: 0 },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, level: 10 },
        { name: "SQL", icon: <BsFiletypeSql />, level: 70 },
        { name: "Oracle", icon: <SiOracle />, level: 60 },
      ]
    },
    {
      title: "Game Development",
      skills: [
        { name: "Unity", icon: <FaUnity />, level: 0 },
        { name: "LÖVE", icon: <FaCode />, level: 74 },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: 85 },
        { name: "GitHub", icon: <FaGithub />, level: 70 },
        { name: "Vercel", icon: <IoLogoVercel />, level: 67 },
        { name: "Canva", icon: <SiCanva />, level: 92 },
      ]
    },
    {
      title: "Operating Systems",
      skills: [
        { name: "Linux", icon: <FaLinux />, level: 87 },
        { name: "Pop!_OS", icon: <SiPopos />, level: 80 },
      ]
    }
  ];

  return (
    <div className="skills-app">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="skills-header">
          <h2>Technical Skills</h2>
          <p>My expertise and proficiency across various technologies</p>
        </div>

        <div className="skills-categories">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                  >
                    <div className="skill-header">
                      <div className="skill-icon">
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: categoryIndex * 0.1 + index * 0.05 + 0.2, duration: 1 }}
                      />
                    </div>
                    <div className="skill-percentage">{skill.level}%</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}