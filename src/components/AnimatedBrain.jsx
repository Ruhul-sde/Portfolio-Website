
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function BrainParticles() {
  const ref = useRef();
  const [sphere] = useMemo(() => {
    const sphere = new Float32Array(2000 * 3);
    const connections = new Float32Array(1000 * 6);
    
    // Create brain-like structure with interconnected nodes
    for (let i = 0; i < 2000; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 2 + Math.random() * 3;
      
      sphere[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      sphere[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      sphere[i * 3 + 2] = radius * Math.cos(phi);
    }
    
    return [sphere, connections];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
      
      // Pulsing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      ref.current.scale.setScalar(scale);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#6366f1"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function NeuralConnections() {
  const ref = useRef();
  
  const connections = useMemo(() => {
    const lines = [];
    const positions = [];
    
    for (let i = 0; i < 150; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8
      );
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8
      );
      
      positions.push(start.x, start.y, start.z);
      positions.push(end.x, end.y, end.z);
    }
    
    return new Float32Array(positions);
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
      ref.current.material.opacity = 0.1 + Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  return (
    <lineSegments ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={connections.length / 3}
          array={connections}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="#8b5cf6"
        transparent
        opacity={0.15}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

export default function AnimatedBrain() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950/30 to-purple-950/30" />
      
      {/* Animated mesh background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 animate-pulse" 
             style={{ 
               backgroundImage: `radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
               animation: 'float 6s ease-in-out infinite'
             }} />
      </div>
      
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        className="absolute inset-0"
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#6366f1" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />
        
        <BrainParticles />
        <NeuralConnections />
        
        {/* Additional atmospheric elements */}
        <mesh position={[0, 0, -5]} scale={[20, 20, 1]}>
          <planeGeometry />
          <meshBasicMaterial
            color="#1e1b4b"
            transparent
            opacity={0.1}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </Canvas>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-indigo-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}
