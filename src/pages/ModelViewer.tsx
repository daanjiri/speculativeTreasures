import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Stage } from '@react-three/drei';

import Model from './Model';

export default function ModeViewer() {
  return (
    <Canvas style={{ height: '98vh' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[-10, -10, -10]} />
      <OrbitControls />
      <Model scale={0.03} />
    </Canvas>
  );
}
