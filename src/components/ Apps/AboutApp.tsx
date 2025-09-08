'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function AboutApp() {
  return (
    <div className="about-app">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="about-content"
      >
        <div className="about-profile">
          <div className="profile-image-container">
            <Image
              src="/images/profile.jpg" // Update this path to your actual photo
              alt="Romy"
              width={150}
              height={150}
              className="profile-image"
            />
          </div>
          
          <div className="profile-info">
            <h2>Romy</h2>
            <p className="profile-tagline">Full Stack Developer</p>
            
            <div className="profile-links">
              <a 
                href="https://github.com/romy-dev-hub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="profile-link"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a 
                href="https://xiao-ro-portfolio.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="profile-link"
              >
                <FaExternalLinkAlt />
                <span>Portfolio</span>
              </a>
            </div>
          </div>
        </div>

        <div className="about-bio">
          <h3>About Me</h3>
          <p>
            I'm a passionate full stack developer who loves creating innovative web solutions. 
            With expertise in modern technologies like React, Next.js, and cloud platforms, 
            I enjoy turning complex ideas into user-friendly applications.
          </p>
          <p>
            My approach combines clean code, thoughtful design, and attention to detail 
            to build experiences that are both functional and enjoyable to use.
          </p>
          <p>
            When I'm not coding, you might find me exploring new technologies, 
            contributing to open source projects, or sharing knowledge with the developer community.
            Or making a game :) !
          </p>
        </div>
      </motion.div>
    </div>
  );
}