import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useEffect } from "react";
import { Court } from "./court";
import {
  AccumulativeShadows,
  Html,
  OrbitControls,
  RandomizedLight,
} from "@react-three/drei";
import HeroScene from "../scenes/HeroScene";


const Hero: React.FC = () => {

  return (
    <section className="h-screen w-full bg-white/5">
      <Canvas
        shadows
        camera={{
          position: [0, 0.1, 3], // Camera inside the room
          fov: 75, // Adjust the field of view (FOV) as needed
          near: 0.1,
          far: 1000,
        }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[-2, 5, -3]} intensity={1.3} />
        {/* <Court scale={0.3} /> */}
        <HeroScene/>

        {/* <OrbitControls /> */}
      </Canvas>
    </section>
  );
};

export default Hero;
