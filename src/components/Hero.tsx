import { Canvas } from "@react-three/fiber";
import React, { ReactNode, Suspense, useEffect, useState } from "react";

interface HeroProps {
  text: ReactNode;
  model: ReactNode;
  tailwindBg?: string,
}

const Hero: React.FC<HeroProps> = ({ text, model, tailwindBg = "bg-gray-500" }) => {
  const [textLoaded, setTextLoaded] = useState(false);

  useEffect(() => {
    setTextLoaded(true);
  });

  return (
    <div
      className={`space-y-4 ${
        textLoaded ? "translate-x-0" : "-translate-x-44"
      } transition duration-1000 ease-in-out mt-8 p-14 rounded-lg ${tailwindBg} grid grid-cols-2 items-center`}
    >
      <div
        className={`${
          textLoaded ? "opacity-100" : "opacity-0"
        } transition ease-in-out duration-1000`}
      >
        {text}
      </div>
      <div className="col-span-1" style={{ height: "60vh" }}>
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
          <Suspense fallback={null}>{model}</Suspense>
          {/* <OrbitControls /> */}
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;
