'use client';

import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import { inSphere } from 'maath/random';

import { Group } from 'three';

const Stars = (props: JSX.IntrinsicElements['group']) => {
  const ref = useRef<Group>(null);
  const [sphere] = useState(() =>
    inSphere(new Float32Array(5000), { radius: 1.2 })
  );
  

  useFrame((_, delta) => {
    if (ref.current) {
      if (ref.current.position.z > 1.0) {
        ref.current.position.z = -0.4;
      }
      ref.current.position.z += delta / 3;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.004}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default function Background() {
  return (
    <div className="w-full h-auto absolute inset-0 blur-[0.5px] z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
