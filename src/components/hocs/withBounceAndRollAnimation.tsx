import { easings, to, useChain, useSpring, useSpringRef } from "@react-spring/three";
import { animated } from "@react-spring/three";
import { GroupProps } from "@react-three/fiber";
import { useRef } from "react";
import { CubicBezier, Group } from "three";

export interface withBounceAndRollAnimationProps extends GroupProps {
  bounceFromPos?: [x: number, y: number, z: number];
  bounceHeight?: number;
  bounceDuration?: number;
  rotationSpeed?: number;
  rollDistance?: number;
  rollDuration?: number;
}

const withBounceAnimation = <P extends object>(
  Model: React.ComponentType<P>
) => {
  return ({
    bounceFromPos = [0, 0.4, 0],
    bounceHeight = 0.2,
    bounceDuration = 1000,
    ...props
  }: P & withBounceAndRollAnimationProps) => {
    const ref = useRef<Group>(null);

    const bounceSpring = useSpring({
      from: { position: bounceFromPos },
      to: { position: [bounceFromPos[0], bounceHeight, bounceFromPos[2]] },
      config: { tension: 200, friction: 5, easing:easings.easeInOutBack },
    });

    return (
      <animated.group
        position={bounceSpring.position}
        ref={ref}
      >
        <Model {...(props as P)} />
      </animated.group>
    );
  };
};

export default withBounceAnimation;
