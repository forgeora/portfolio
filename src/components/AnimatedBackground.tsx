'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingParticles() {
  const meshRef = useRef<THREE.Group>(null);

  const positions = useMemo(() => {
    const pos: [number, number, number][] = [];
    for (let i = 0; i < 100; i++) {
      pos.push([
        (Math.random() - 0.5) * 80,
        (Math.random()- 0.5) * 60,
        (Math.random() - 0.5) * 60,
      ]);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.05 + Math.random() * 0.1, 8, 8]} />
          <meshStandardMaterial
            color={`hsl(${200 + Math.random() * 60}, 70%, 60%)`}
            emissive={`hsl(${200 + Math.random() * 60}, 70%, 30%)`}
            emissiveIntensity={0.1 + Math.random() * 0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-1">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <FloatingParticles />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
