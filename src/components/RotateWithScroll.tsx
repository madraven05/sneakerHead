import { useScroll, animated, useSpring, to, easings } from "@react-spring/three";
import React, { ReactNode } from "react";

interface RotateWithScrollProps {
  children?: ReactNode;
  isEnter?: boolean
}

const RotateWithScroll: React.FC<RotateWithScrollProps> = ({ children=null, isEnter=true }) => {
  const { scrollYProgress } = useScroll();

  const scrollSpring = useSpring({
    rotation: scrollYProgress.to([0, 1], [0, -3*Math.PI]),
    position: !isEnter ? scrollYProgress.to([0,1], [-2,0]) : scrollYProgress.to([0,1], [0,2]),
    config: {
      tension: 170,
      friction: 25,
      easing: easings.easeInBack
    },
    
  });

  return (
    <animated.group
      rotation-y={scrollSpring.rotation}
      position-x={scrollSpring.position}
    >
      {children}
    </animated.group>
  );
};

export default RotateWithScroll;
