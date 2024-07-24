import { Fieldset, Legend } from "@headlessui/react";
import { Canvas } from "@react-three/fiber";
import React, { ReactNode, Suspense } from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import Model from "./Model";
import { OrbitControls, Plane } from "@react-three/drei";
import Lights from "./Lights";
import { SneakerBase } from "./SneakerBase";
import { NikeAirJordanBWHT } from "./shoes/NikeAirJordanBWHT";
import { NikeAirJordan } from "./shoes/NikeAirJordan";
import { ShoeBox } from "./ShoeBox";
import { MeshStandardMaterial } from "three";

const Hero: React.FC = ({}) => {
  return (
    <div className="space-y-4 mt-8 p-14 rounded-lg bg-red-300 grid grid-cols-2 items-center">
      <div>
        <h1 className="text-6xl col-span-2">Hey, there sneakerhead!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ad,
          aliquid magni rerum assumenda quos dolorem eligendi alias, porro
          quidem unde exercitationem cupiditate molestiae provident, beatae
          temporibus quod qui? Consequuntur?
        </p>
      </div>
      <div className="col-span-1 ease-in" style={{height: "60vh"}}>
        <Canvas
          shadows
          camera={{ position: [0, 0, 5], fov: 10, far: 25, near: 1 }}
        >
          <>
            <ambientLight intensity={0.41} />
            <spotLight
              intensity={100}
              position={[3, 3, 3]}
              angle={0.35}
              distance={20}
              penumbra={0.1}
              // shadow={}
              castShadow
            />
          </>
          <Suspense fallback={null}>
            <ShoeBox
              castShadow
              scale={2}
              position={[0, -0.24, 0]}
              rotation={[0.1, 2, -0.1]}
            />
            {/* <Plane receiveShadow rotation={[0, 0, 0]} position={[0, -0.3, 0]} /> */}
          </Suspense>
          {/* <OrbitControls /> */}
        </Canvas>
      </div>
    </div>
    
  );
};

export default Hero;
