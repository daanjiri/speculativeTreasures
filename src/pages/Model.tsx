import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props: any) {
  const group = useRef();
  const { scene } = useGLTF('/poporo1.glb') as any;
  return <primitive object={scene} {...props} />;
}

useGLTF.preload('/poporo1.glb');
