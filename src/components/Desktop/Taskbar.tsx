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

  // Group windows by appId to avoid duplicates in taskbar
  const uniqueAppWindows = windows.reduce((acc, window) => {
    if (!acc.find(w => w.appId === window.appId)) {
      acc.push(window);
    }
    return acc;
  }, [] as typeof windows);

  return (
    <div className="taskbar">
      {uniqueAppWindows.map(window => (
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
                // Close all windows of this app type
                windows.filter(w => w.appId === window.appId).forEach(w => closeWindow(w.id));
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