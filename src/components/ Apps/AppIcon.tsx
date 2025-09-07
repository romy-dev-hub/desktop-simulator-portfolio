'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface AppIconProps {
  icon: string; // This will now be the path to the icon
  name: string;
  onClick: () => void;
}

export default function AppIcon({ icon, name, onClick }: AppIconProps) {
  return (
    <motion.div
      className="app-icon"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon">
        <Image 
          src={icon} 
          alt={name}
          width={40}
          height={40}
          className="app-icon-image"
        />
      </div>
      <span className="name">{name}</span>
    </motion.div>
  );
}