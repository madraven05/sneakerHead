import {
  ComponentType,
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Group, Mesh, MeshStandardMaterial } from "three";
import { CanvasContext } from "../3DCanvasProvider";
import { ThreeEvent } from "@react-three/fiber";
import { animated, to, useSpring } from "@react-spring/three";

export interface SneakerHOCProps {}

export type MeshGroupRef = {
  rotateGroup: (profile: [x: number, y: number, z: number]) => void;
};
export type ViewProfile = "front" | "back" | "left" | "right" | null;

/**
 * HOC created for sneaker customisation.
 * Can hover for mesh name and change view profiles
 */
const withSneaker3Dcustomization = <P extends object>(
  SneakerComponent: ComponentType<P>
) => {
  const HOC = forwardRef<MeshGroupRef, P & SneakerHOCProps>(
    ({ ...props }, ref) => {
       /* All the hooks */
      const groupRef = useRef<Group>(null);
      const canvasContext = useContext(CanvasContext);
      const { setHoveredMeshName, setHoveredMeshColor, setHoveredMeshString } =
        canvasContext!;
      const [isUpdateState, setIsUpdateState] = useState(true);
      const [viewProfile, setViewProfile] = useState<[number, number, number]>([0,0,0]);

      /* Functions and functional hooks */

      // animate rotation
      const rotationSpring = useSpring({
        rotation: viewProfile,
        config: {
          tension: 170,
          friction: 26,
        }, 
      })

      
      useImperativeHandle(ref, () => ({
        rotateGroup: (profile: [x: number, y: number, z:number]) => {
          if (groupRef.current) {
            setViewProfile(profile);
          }
        },
      }));

      const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
        if (e.object instanceof Mesh && e.buttons === 0 && isUpdateState) {
          const material = (e.object as Mesh).material as MeshStandardMaterial;
          setHoveredMeshName(e.object.name);
          setHoveredMeshString(e.object.material.name);
          setHoveredMeshColor("#" + material.color.getHexString());
        }
      };

      return (
        <animated.group
          ref={groupRef}
          onPointerOver={handlePointerOver}
          onClick={() => setIsUpdateState(!isUpdateState)}
          rotation={to([rotationSpring.rotation], ([x,y,z]) => [x,y,z] as [number, number, number]) as any}
        >
          <SneakerComponent {...(props as P)} />
        </animated.group>
      );
    }
  );
  return HOC;
};

export default withSneaker3Dcustomization;
