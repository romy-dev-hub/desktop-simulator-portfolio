'use client';

import { motion } from 'framer-motion';

export default function AboutApp() {
  return (
    <div className="about-app">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2>About Me</h2>
        <p>
          Welcome to my portfolio! I am a passionate developer with experience in modern web technologies.
        </p>
        <p>
          I love creating interactive and user-friendly applications.
        </p>
      </motion.div>
    </div>
  );
}