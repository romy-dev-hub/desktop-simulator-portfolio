'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { FaTimes, FaWindowMinimize, FaWindowMaximize } from 'react-icons/fa';
import { useWindowManager } from '@/hooks/useWindowManager';

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  initialWidth?: number;
  initialHeight?: number;
}

export default function Window({ id, title, children, initialWidth = 600, initialHeight = 400 }: WindowProps) {
  const { closeWindow, focusWindow, focusedWindow } = useWindowManager();
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({ x: 100 + Math.random() * 200, y: 100 + Math.random() * 200 });
  const [size, setSize] = useState({ width: initialWidth, height: initialHeight });
  const windowRef = useRef<HTMLDivElement>(null);
  const isFocused = focusedWindow === id;

  const handleDrag = (e: MouseEvent, info: { offset: { x: number; y: number } }) => {
    setPosition({ x: position.x + info.offset.x, y: position.y + info.offset.y });
  };

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={windowRef}
        className={`window ${isFocused ? 'focused' : ''}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          x: isMaximized ? 0 : position.x,
          y: isMaximized ? 0 : position.y,
          width: isMaximized ? '100vw' : size.width,
          height: isMaximized ? 'calc(100vh - 40px)' : size.height
        }}
        exit={{ opacity: 0, scale: 0.8 }}
        drag={!isMaximized}
        onDrag={handleDrag}
        dragMomentum={false}
        onMouseDown={() => focusWindow(id)}
        style={{
          zIndex: isFocused ? 100 : 10,
        }}
      >
        <div className="window-header" onDoubleClick={toggleMaximize}>
          <div className="window-title">{title}</div>
          <div className="window-controls">
            <button className="window-control" onClick={() => {}}>
              <FaWindowMinimize size={10} />
            </button>
            <button className="window-control" onClick={toggleMaximize}>
              <FaWindowMaximize size={10} />
            </button>
            <button className="window-control close" onClick={() => closeWindow(id)}>
              <FaTimes size={12} />
            </button>
          </div>
        </div>
        <div className="window-content">{children}</div>
      </motion.div>
    </AnimatePresence>
  );
}