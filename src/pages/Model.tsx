import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { MeshBasicMaterial, MeshStandardMaterial } from 'three';

export default function Model({ useGoldenMaterial, ...props }: any) {
  const group = useRef();
  const { scene } = useGLTF('/poporo.glb') as any;
  useEffect(() => {
    scene.traverse((child: any) => {
      if (child.isMesh) {
        // This replaces the material with a basic material, removing the texture
        child.material = new MeshStandardMaterial({
          color: useGoldenMaterial ? '#FFD700' : 'gray', // Golden or gray
          roughness: useGoldenMaterial ? 0.4: 0.5,
          metalness: useGoldenMaterial ? 1 : 0.1,
        });
      }
    });
  }, [scene, useGoldenMaterial]);
  return <primitive object={scene} ref={group} {...props} />;
}

useGLTF.preload('/poporo.glb');
