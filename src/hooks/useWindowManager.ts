'use client';

import { createContext, useContext, ReactNode } from 'react';

interface Window {
  id: string;
  title: string;
  component: ReactNode;
}

interface WindowContextType {
  windows: Window[];
  openWindow: (id: string, title: string, component: ReactNode) => void;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  focusedWindow: string | null;
}

export const WindowContext = createContext<WindowContextType | undefined>(undefined);

export function useWindowManager() {
  const context = useContext(WindowContext);
  if (context === undefined) {
    throw new Error('useWindowManager must be used within a WindowProvider');
  }
  return context;
}