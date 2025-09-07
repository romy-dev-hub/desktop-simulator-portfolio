'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project 1',
    description: 'A modern web application with React and Node.js',
  },
  {
    title: 'Project 2',
    description: 'Mobile app built with React Native',
  },
  {
    title: 'Project 3',
    description: 'Desktop application using Electron',
  },
];

export default function ProjectsApp() {
  return (
    <div className="projects-app">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}