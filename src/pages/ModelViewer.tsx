import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Stage } from '@react-three/drei';

import Model from './Model';

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/poporo1.glb';
  link.download = 'poporo1.glb';
  link.click();
};

export default function ModeViewer() {
  return (
    <div>
      <Canvas style={{ height: '95vh' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, -10, -10]} />
        <OrbitControls />
        <Model scale={0.03} />
      </Canvas>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
}
