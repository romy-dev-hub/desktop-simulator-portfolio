'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import { useEffect, useState } from 'react';

function StarBackground() {
  const [isMobile, setIsMobile] = useState(false);

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
    <>
      <Stars 
        radius={isMobile ? 50 : 100} 
        depth={isMobile ? 30 : 50} 
        count={isMobile ? 2000 : 5000} 
        factor={isMobile ? 2 : 4} 
        saturation={0}
        fade 
        speed={1}
      />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
    </>
  );
}

export default function DesktopBackground() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) setGreeting('Greetings and Good Morning!');
    else if (hours < 18) setGreeting('Greetings and Good Afternoon!');
    else setGreeting('Greetings and Good Evening!');
  }, []);

  return (
    <div className="desktop-background">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <color attach="background" args={['#0a0a1a']} />
        <StarBackground />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
      <div className="greeting-overlay">
        <h1>{greeting}</h1>
        <h2>Welcome to my interactive portfolio</h2>
      </div>
    </div>
  );
}