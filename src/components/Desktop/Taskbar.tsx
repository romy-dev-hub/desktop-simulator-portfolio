'use client';

import { useWindowManager } from '@/hooks/useWindowManager';
import { useState, useEffect } from 'react';

export default function Taskbar() {
  const { windows, focusWindow, focusedWindow, closeWindow } = useWindowManager();
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <div className="taskbar">
      {windows.map(window => (
        <button
          key={window.id}
          className={`taskbar-app ${focusedWindow === window.id ? 'active' : ''}`}
          onClick={() => focusWindow(window.id)}
        >
          {window.title}
          {isMobile && (
            <span 
              className="taskbar-close"
              onClick={(e) => {
                e.stopPropagation();
                closeWindow(window.id);
              }}
              style={{ marginLeft: '8px', cursor: 'pointer' }}
            >
              ×
            </span>
          )}
        </button>
      ))}
    </div>
  );
}