import {
  CollisionEnterHandler,
  Physics,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";
import React, { useEffect, useRef, useState } from "react";
import withRollingAnimation from "../components/hocs/withRollingAnimation";
import Basketball from "../components/Basketball";
import { NikeBox } from "../components/NikeBox";
import { CozyRoom } from "../components/CozyRoom";
import { Html } from "@react-three/drei";
import GlowingText from "../components/GlowingText";
import { Group } from "three";
import { NikeAirJordan } from "../components/shoes/NikeAirJordan";
import { NikeAirJordanBWHT } from "../components/shoes/NikeAirJordanBWHT";
import { NikeCharge } from "../components/shoes/NikeCharge";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

const HeroScene = () => {
  const RollingBasketball = withRollingAnimation(Basketball);
  const [showHeading, setShowHeading] = useState(false);
  const [openBox, setOpenBox] = useState(false);

  const { scene, camera } = useThree();

  const ref = useRef<RapierRigidBody>(null);

  const shoeBoxesRef = useRef<Group>(null);
  const airJordanRef = useRef<Group>(null);
  const airJordanHTRef = useRef<Group>(null);
  const nikeHawaiiRef = useRef<Group>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.applyImpulse({ x: 0.001, y: 0, z: 0 }, true);
      ref.current.addTorque({ x: 0, y: 0, z: -0.001 }, true);
    }
  }, []);

  const handleCollisionEnter: CollisionEnterHandler = ({
    manifold,
    target,
    other,
  }) => {
    if (other.rigidBodyObject) {
      const bodyName = other.rigidBodyObject.name;
      if (bodyName === "rolling-object") {
        // setOpenBox(true);
        setTimeout(() => {
          setOpenBox(true);
        }, 500);
        // setShowHeading(true);
      }
    }
  };

  useEffect(() => {
    if (openBox) {
      setTimeout(() => {
        setShowHeading(true);
      }, 3000);
    }
  }, [openBox]);

  const handleViewSneakers = () => {
    scene.remove(shoeBoxesRef.current!);

    const cameraTimeline = gsap.timeline({
      repeat: 0,
      ease: "power2.In",
    });

    cameraTimeline.to(camera.position, {
      x: 0.4,
      z: -2.6,
      duration: 1,
    });

    cameraTimeline.to(
      camera.rotation,
      {
        y: Math.PI,
        duration: 2,
      },
      "-=1"
    );
  };

  return (
    <>
      <Physics>
        {/* Basketball */}
        <group position={[-4, -0.005, 1.2]}>
          <RigidBody
            name="rolling-object"
            ref={ref}
            colliders="ball"
            mass={2}
            restitution={0.7}
            friction={0.5}
          >
            <Basketball castShadow scale={0.1} />
          </RigidBody>
        </group>

        {/* Shoeboxes */}
        <group ref={shoeBoxesRef}>
          <group>
            <RigidBody onCollisionEnter={handleCollisionEnter} restitution={0}>
              <NikeBox
                shoeRef={airJordanRef}
                triggerAnimation={openBox}
                name="shoebox"
                scale={1.1}
                position={[0, 0.2, 1]}
              />
            </RigidBody>
            <group
              ref={airJordanRef}
              scale={0.05}
              rotation={[0, Math.PI / 2, 0]}
              position={[0, -0.9, 1]}
              visible={false}
            >
              <NikeAirJordan />
            </group>
          </group>

          <group>
            <RigidBody restitution={0}>
              <NikeBox
                shoeRef={airJordanHTRef}
                triggerAnimation={openBox}
                name="shoebox"
                scale={1.1}
                position={[0.7, 0.2, 1]}
              />
            </RigidBody>
            <group
              ref={airJordanHTRef}
              rotation={[0, Math.PI / 2, 0]}
              scale={0.05}
              position={[0.7, -0.9, 1]}
              visible={false}
            >
              <NikeAirJordanBWHT />
            </group>
          </group>

          <group>
            <RigidBody restitution={0}>
              <NikeBox
                shoeRef={nikeHawaiiRef}
                triggerAnimation={openBox}
                name="shoebox"
                scale={1.1}
                position={[1.6, 0.2, 1]}
              />
            </RigidBody>
            <group
              ref={nikeHawaiiRef}
              rotation={[0, 0, 0]}
              scale={0.05}
              position={[1.4, -0.9, 1]}
              visible={false}
            >
              <NikeCharge />
            </group>
          </group>
        </group>

        {/* Room */}
        <group rotation={[0, -Math.PI / 2, 0]} position={[0, -1, 0]}>
          <CozyRoom />
        </group>
      </Physics>

      {/* UI */}
      <Html position={[-3.2, 1.6, -2]}>
        <GlowingText triggerAnimation={showHeading}>SNEAKERHEAD</GlowingText>
        <div
          className={`flex flex-col gap-2 font-sans font-thin text-sm transition duration-1000 delay-1000 ease-in-out ${
            showHeading ? `opacity-100` : `opacity-0`
          }`}
        >
          <p>
            Your go to sneaker store is here! Check out our collection and
            customize your sneakers to match your groove!
          </p>
          <button
            onClick={handleViewSneakers}
            className="p-2 border-2 border-white/50"
          >
            View Sneakers
          </button>
        </div>
      </Html>

      {/* Products UI */}
      <Html position={[5, 2.2, 5]}>
        <p className="flex flex-col p-5 h-52 justify-center items-center bg-white/5" style={{width: "90vh"}}>
          This is where the sneakers will be shown!
        </p>
      </Html>
    </>
  );
};

export default HeroScene;
