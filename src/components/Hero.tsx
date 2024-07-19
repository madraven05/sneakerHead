import { Fieldset, Legend } from "@headlessui/react";
import { Canvas } from "@react-three/fiber";
import React, { ReactNode, Suspense } from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import Model from "./Model";
import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights";

const Hero: React.FC = ({}) => {
  return (
    <div className="space-y-4 mt-8">
      <h1 className="text-6xl font-bold">Hey, there sneakerhead!</h1>
      <Canvas shadows camera={{ position: [4, 4, 2], fov: 20 }}>
        <Lights />
        <Suspense fallback={null}>
          <Model path="nike-air-jordan/scene.gltf" scale={[5, 5, 5]} />
        </Suspense>
        <OrbitControls />
      </Canvas>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ad,
        aliquid magni rerum assumenda quos dolorem eligendi alias, porro quidem
        unde exercitationem cupiditate molestiae provident, beatae temporibus
        quod qui? Consequuntur?
      </p>
    </div>
  );
};

export default Hero;
