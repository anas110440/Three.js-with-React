import React, { useRef } from 'react';
import { useFBX } from '@react-three/drei';
import * as THREE from 'three';

const MyFBXViewer = ({ path, scale, color }) => {
  const fbxRef = useRef();
  const fbxModel = useFBX(path);

  // Create a custom material
  const customMaterial = new THREE.MeshStandardMaterial({
    color: color, // Specify your desired color
    roughness: 0.5,
    metalness: 0.5,
  });

  // Apply the custom material to all meshes in the FBX model
  fbxModel.traverse((child) => {
    if (child.isMesh) {
      child.material = customMaterial;
    }
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} />

      {/* Using the loaded FBX model with custom material applied */}
      <primitive ref={fbxRef} object={fbxModel} scale={scale} />

      <axesHelper args={[0]} />
    </>
  );
};

export default MyFBXViewer;
