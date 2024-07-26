import { ComponentType, forwardRef, useImperativeHandle, useRef } from "react";
import { MeshGroupRef } from "../shoes/NikeTC7900";
import { Group } from "three";

export interface SneakerHOCProps {

}

const withSneaker3Dcustomization = <P extends object>(SneakerComponent: ComponentType<P>) => {
  const HOC = forwardRef<MeshGroupRef, P & SneakerHOCProps>(({...props}, ref) => {
    const groupRef = useRef<Group>(null);
    
    useImperativeHandle(ref, () => ({
          rotateGroup: (x: number, y: number, z: number) => {
            if (groupRef.current) {
              groupRef.current.rotation.set(x, y, z);
            }
          },
        }));
    
    return (
        <group ref={groupRef} >
            <SneakerComponent {...(props as P)}/>
        </group>
    )
  })
  return HOC;
};

export default withSneaker3Dcustomization;
