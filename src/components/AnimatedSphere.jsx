
import { Float, MeshDistortMaterial } from '@react-three/drei';

export default function AnimatedSphere() {
  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
      <mesh scale={2.4}>
        <sphereGeometry args={[1, 100, 200]} />
        <MeshDistortMaterial
          color="#4338ca"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
        />
      </mesh>
    </Float>
  );
}
