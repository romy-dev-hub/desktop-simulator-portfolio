'use client';

import { useWindowManager } from '@/hooks/useWindowManager';
import Window from './Window';

export default function WindowManager() {
  const { windows } = useWindowManager();

  return (
    <>
      {windows.map(window => (
        <Window
          key={window.id}
          id={window.id}
          title={window.title}
          initialWidth={window.width}
          initialHeight={window.height}
        >
          {window.component}
        </Window>
      ))}
    </>
  );
}