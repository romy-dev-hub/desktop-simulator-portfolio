'use client';

import { motion } from 'framer-motion';

interface AppIconProps {
  icon: React.ReactNode;
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
      <div className="icon">{icon}</div>
      <span className="name">{name}</span>
    </motion.div>
  );
}