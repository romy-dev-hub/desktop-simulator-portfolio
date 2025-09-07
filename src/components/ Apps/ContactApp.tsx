'use client';

import { motion } from 'framer-motion';
import { FaPaperPlane, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function ContactApp() {
  return (
    <div className="contact-app">
      <motion.div 
        className="contact-form"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2>Get in Touch</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={4}></textarea>
          </div>
          <button type="submit" className="submit-btn">
            <FaPaperPlane /> Send Message
          </button>
        </form>
      </motion.div>
      
      <motion.div 
        className="social-links"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3>Or find me on</h3>
        <div className="social-icons">
          <a href="#" className="social-link">
            <FaLinkedin />
          </a>
          <a href="#" className="social-link">
            <FaGithub />
          </a>
          <a href="#" className="social-link">
            <FaTwitter />
          </a>
        </div>
      </motion.div>
    </div>
  );
}