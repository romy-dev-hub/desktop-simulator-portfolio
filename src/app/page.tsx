'use client';

import { useState } from 'react';
import Desktop from '@/components/Desktop/Desktop';
import WindowManager from '@/components/Window/WindowManager';
import Taskbar from '@/components/Desktop/Taskbar';
import { WindowContext } from '@/hooks/useWindowManager';

export default function HomePage() {
  const [windows, setWindows] = useState<Array<{ id: string; appId: string; title: string; component: React.ReactNode }>>([]);
  const [focusedWindow, setFocusedWindow] = useState<string | null>(null);

  const openWindow = (appId: string, title: string, component: React.ReactNode) => {
    const id = `${appId}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    setWindows(prev => [...prev, { id, appId, title, component }]);
    setFocusedWindow(id);
  };

  const closeWindow = (id: string) => {
    setWindows(prev => prev.filter(window => window.id !== id));
    if (focusedWindow === id) {
      setFocusedWindow(windows.length > 1 ? windows[windows.length - 2].id : null);
    }
  };

  const focusWindow = (id: string) => {
    setFocusedWindow(id);
  };

  return (
    <WindowContext.Provider value={{ windows, openWindow, closeWindow, focusWindow, focusedWindow }}>
      <div className="desktop-container">
        <Desktop />
        <WindowManager />
        <Taskbar />
      </div>
    </WindowContext.Provider>
  );
}