import { useGLTF } from "@react-three/drei";
import React from "react";

const Model: React.FC<{ path: string; scale?: number[] }> = ({
  path,
  scale,
}) => {
  const { scene } = useGLTF(path);
  scene.traverse((object) => {
    object.castShadow = true;
  });
  return <primitive object={scene} scale={scale} />;
};

export default Model;
