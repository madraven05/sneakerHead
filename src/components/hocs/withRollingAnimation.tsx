import { animated } from "@react-spring/three";
import { GroupProps } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { Physics, RapierRigidBody, RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export interface withRollingAnimationProps extends GroupProps {}

const withRollingAnimation = <P extends object>(
  Model: React.ComponentType<P>
) => {
  return ({ ...props }: P & withRollingAnimationProps) => {
    const ref = useRef<RapierRigidBody>(null);

    useEffect(() => {
      if (ref.current) {
        ref.current.applyImpulse({ x: 0.001, y: 0, z: 0 }, true);
        ref.current.addTorque({ x: 0, y: 0, z: -0.001 }, true);
      }
    }, []);

    return (
      <RigidBody name="rolling-object" ref={ref} colliders="ball" mass={2} restitution={0.7} friction={0.5}>
        <Model {...(props as P)} />
      </RigidBody>
    );
  };
};

export default withRollingAnimation;
