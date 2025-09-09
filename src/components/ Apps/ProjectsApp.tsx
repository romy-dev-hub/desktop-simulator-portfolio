'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaGamepad, FaDatabase, FaBlog, FaUsers, FaCalculator, FaArrowRight } from 'react-icons/fa';

export default function ProjectsApp() {
  const projects = [
    {
      id: 1,
      title: "NexBlog",
      description: "A modern blog platform built with Next.js featuring responsive design, markdown support, and user authentication.",
      technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Three.js"],
      githubUrl: "https://github.com/romy-dev-hub/nexblog",
      demoUrl: "https://nexblog-demo.vercel.app",
      icon: <FaBlog size={24} />,
      status: "In Progress"
    },
    {
      id: 2,
      title: "Community Website",
      description: "A community engagement platform with user profiles, forums, and real-time chat functionality.",
      technologies: ["React", "Node.js", "Next.js", "Framer Motion"],
      githubUrl: "https://github.com/romy-dev-hub/community-prototype-",
      demoUrl: "https://community-prototype.vercel.app/",
      icon: <FaUsers size={24} />,
      status: "Completed"
    },
    {
      id: 3,
      title: "2048 Game",
      description: "A C application of the popular 2048 puzzle game with responsive design and score tracking.",
      technologies: ["C", "SDL2"],
      githubUrl: "https://github.com/romy-dev-hub/2048-",
      demoUrl: null,
      icon: <FaGamepad size={24} />,
      status: "Completed"
    },
    {
      id: 4,
      title: "Java-Oracle Database",
      description: "A desktop application for managing inventory with Java frontend and Oracle database backend.",
      technologies: ["Java", "Oracle DB", "JDBC", "Swing", "SQL"],
      githubUrl: "https://github.com/romy-dev-hub/lib-project-",
      demoUrl: null,
      icon: <FaDatabase size={24} />,
      status: "Completed"
    },
    {
      id: 5,
      title: "Programming Calculator",
      description: "An app programming calculator with support for various numeral systems and bitwise operations.",
      technologies: ["Assembly", "DosBox", "TASM"],
      githubUrl: "https://github.com/romy-dev-hub/assembly-calculator-",
      demoUrl: null,
      icon: <FaCalculator size={24} />,
      status: "Completed"
    },
    {
      id: 6,
      title: "Personal Portfolio",
      description: "A personal portfolio website showcasing my projects and skills.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Three.js"],
      githubUrl: "https://github.com/romy-dev-hub/xiao-ro-portfolio",
      demoUrl: "https://xiao-ro-portfolio.vercel.app/",
      icon: <FaExternalLinkAlt size={24} />,
      status: "Completed"
    }
  ];

  return (
    <div className="projects-app">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="projects-header">
          <h2>My Projects</h2>
          <p>A collection of my recent work and top personal projects</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <div className="project-title-section">
                  <h3>{project.title}</h3>
                  <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub />
                  <span>Code</span>
                </a>
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
         {/* GitHub CTA Section */}
        <motion.div 
          className="github-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="cta-content">
            <h3>Want to see more projects?</h3>
            <p>Check out my GitHub profile for more of my work and contributions</p>
            <a 
              href="https://github.com/romy-dev-hub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-button"
            >
              <FaGithub />
              <span>View My GitHub</span>
              <FaArrowRight />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}