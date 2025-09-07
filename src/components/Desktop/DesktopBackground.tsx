'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { useEffect, useState } from 'react';
import * as THREE from 'three';

function FloatingIcons() {
  const icons = ['💻', '🚀', '⭐', '🎨', '🔮', '🌌'];
  
  return (
    <>
      {icons.map((icon, i) => (
        <Float key={i} speed={1.5 + Math.random() * 2} rotationIntensity={1} floatIntensity={2}>
          <mesh position={[Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 5 - 2.5]}>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshBasicMaterial color={i % 2 === 0 ? '#6e45e2' : '#88d3ce'} />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function AnimatedParticles() {
  const [positions] = useState(() => 
    Array.from({ length: 100 }, () => [
      Math.random() * 20 - 10,
      Math.random() * 20 - 10,
      Math.random() * 20 - 10,
    ])
  );

  const particlesRef = React.useRef<THREE.Points>(null);

  React.useEffect(() => {
    if (particlesRef.current) {
      const geometry = particlesRef.current.geometry;
      const positionAttribute = new THREE.Float32BufferAttribute(positions.flat(), 3);
      geometry.setAttribute('position', positionAttribute);
    }
  }, [positions]);

  return (
    <points ref={particlesRef}>
      <bufferGeometry />
      <pointsMaterial size={0.05} color="#88d3ce" sizeAttenuation />
    </points>
  );
}

export default function DesktopBackground() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) setGreeting('Good Morning!');
    else if (hours < 18) setGreeting('Good Afternoon!');
    else setGreeting('Good Evening!');
  }, []);

  return (
    <div className="desktop-background">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <color attach="background" args={['#0a0a1a']} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} />
        <AnimatedParticles />
        <FloatingIcons />
        <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} />
      </Canvas>
      <div className="greeting-overlay">
        <h1>{greeting}</h1>
        <p>Welcome to my interactive portfolio</p>
      </div>
    </div>
  );
}