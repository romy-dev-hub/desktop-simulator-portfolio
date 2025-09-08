'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

export default function AboutApp() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const taglineRef = useRef<HTMLDivElement>(null);
  
  const taglines = [
    "Frontend Developer",
    "Games Developer",
    "Future Mern Stack Developer",
    "Future AI Engineer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [taglines.length]);

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
              src="/icons/profile.gif"
              alt="Romy"
              width={150}
              height={150}
              className="profile-image"
            />
          </div>
          
          <div className="profile-info">
            <h2>Xiao Ro</h2>
            
            <div className="tagline-container" ref={taglineRef}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTagline}
                  className="profile-tagline"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  {taglines[currentTagline]}
                </motion.span>
              </AnimatePresence>
            </div>
            
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
            I'm a passionate developer who loves creating innovative web solutions and games. 
            With expertise in frontend technologies and a growing interest in full-stack development,
            I enjoy turning complex ideas into user-friendly applications.
          </p>
          <p>
            My journey is leading me toward mastering the MERN stack and exploring the fascinating 
            world of artificial intelligence. I believe in continuous learning and pushing the 
            boundaries of what's possible with code.
          </p>
          <p>
            When I'm not coding, you might find me exploring new technologies, 
            working on game development projects, or contributing to open source.
          </p>
        </div>
      </motion.div>
    </div>
  );
}