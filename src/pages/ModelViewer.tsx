import { Suspense, useState } from 'react';
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
  const [useGoldenMaterial, setUseGoldenMaterial] = useState(false);

  const toggleMaterial = () => {
    setUseGoldenMaterial(!useGoldenMaterial);
  }

  return (
    <div>
      <Canvas style={{ height: '95vh' }}>
        {/* <Environment preset="sunset" background={false} /> */}
        <ambientLight /> 
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, -10, -10]} />
        {/* <ambientLight intensity={20} /> 
        {/* <directionalLight position={[0, 10, 5]} intensity={20} castShadow />  */}
        {/* <pointLight position={[10, 20, 10]} intensity={8} /> */}
        {/* <pointLight position={[-10, -10,-10]} intensity={8}/>  */}
        <OrbitControls />
        <Model scale={0.03} useGoldenMaterial={useGoldenMaterial}/>
      </Canvas>
      <button onClick={handleDownload}>Download</button>
      <button onClick={toggleMaterial}>Toggle Golden Material</button>
    </div>
  );
}
