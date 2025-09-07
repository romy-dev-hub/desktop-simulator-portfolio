'use client';

import { useWindowManager } from '@/hooks/useWindowManager';

export default function Taskbar() {
  const { windows, focusWindow, focusedWindow } = useWindowManager();

  return (
    <div className="taskbar">
      {windows.map(window => (
        <button
          key={window.id}
          className={`taskbar-app ${focusedWindow === window.id ? 'active' : ''}`}
          onClick={() => focusWindow(window.id)}
        >
          {window.title}
        </button>
      ))}
    </div>
  );
}