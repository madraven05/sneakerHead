import React from "react";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight
          position={[15, 12, 5]}
          angle={0.15}
          penumbra={1}
          castShadow
        />
      <directionalLight position={[14, 4, 10]} intensity={1} castShadow/>
    </>
  );
};

export default Lights;
