/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 scene.gltf -t -o NikeTC7900.tsx 
*/

import * as THREE from "three";
import React, {
  useContext,
  useState,
} from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { CanvasContext } from "../3DCanvasProvider";
import {
  ThreeEvent,
} from "@react-three/fiber";
import { SneakerColorStates } from "../ShoeState";
import withSneaker3Dcustomization from "../hocs/SneakerComponent";

type GLTFResult = GLTF & {
  nodes: {
    Circle001: THREE.Mesh;
    insida_sock: THREE.Mesh;
    snöre: THREE.Mesh;
    snöre_baksida: THREE.Mesh;
    snöre_framsida: THREE.Mesh;
    snörning_framsida007: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube002_1: THREE.Mesh;
    Cube002_2: THREE.Mesh;
    Cube002_3: THREE.Mesh;
    Cube002_4: THREE.Mesh;
    Cube002_5: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube003_1: THREE.Mesh;
    Cube003_2: THREE.Mesh;
    sula_insida: THREE.Mesh;
  };
  materials: {
    metall_svart: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    material_grund: THREE.MeshStandardMaterial;
    nike_logga: THREE.MeshStandardMaterial;
    baksida_logga: THREE.MeshStandardMaterial;
    framsida: THREE.MeshStandardMaterial;
    överdel: THREE.MeshStandardMaterial;
    framsida_övre: THREE.MeshStandardMaterial;
    sko_sula_underdel: THREE.MeshStandardMaterial;
    sko_sula_sida: THREE.MeshStandardMaterial;
    sko_sula_framifrån: THREE.MeshStandardMaterial;
    sula_insida: THREE.MeshStandardMaterial;
  };
  // animations: GLTFAction[]
};

export type MeshGroupRef = {
  rotateGroup: (x: number, y: number, z: number) => void;
};

interface SneakerNodeProps {
  sneakerColorState: SneakerColorStates;
}

const NikeTC7900: React.FC<SneakerNodeProps> = ({ sneakerColorState }) => {
  const { nodes, materials } = useGLTF(
    "/nike-tc-7900/scene.gltf"
  ) as GLTFResult;

  const canvasContext = useContext(CanvasContext);
  const { setHoveredMeshName, setHoveredMeshColor, setHoveredMeshString } =
    canvasContext!;
  const [isUpdateState, setIsUpdateState] = useState(true);

  const PointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    if (e.object instanceof THREE.Mesh && e.buttons === 0 && isUpdateState) {
      const material = (e.object as THREE.Mesh)
        .material as THREE.MeshStandardMaterial;
      setHoveredMeshName(e.object.name);
      setHoveredMeshString(e.object.material.name);
      setHoveredMeshColor("#" + material.color.getHexString());
    }
  };

  const fixStates = (e: ThreeEvent<MouseEvent>) => {
    setIsUpdateState(!isUpdateState);
  };

  return (
    <group
      dispose={null}
      onPointerOver={PointerOver}
      onClick={fixStates}
    >
      <mesh
        name="Lace Pin"
        geometry={nodes.Circle001.geometry}
        material={materials.metall_svart}
        position={[0.067, 0.044, -0.048]}
        rotation={[0.134, 0.005, 2.218]}
        scale={-0.01}
      />
      <mesh
        name="Inside Sock"
        material-color={sneakerColorState.insida_sock}
        geometry={nodes.insida_sock.geometry}
        material={materials["Material.006"]}
        scale={[0.11, 0.108, 0.108]}
      />
      <mesh
        name="Laces"
        material-color={sneakerColorState.snöre}
        geometry={nodes.snöre.geometry}
        material={materials["Material.004"]}
      />
      <mesh
        name="Nike Back Tag"
        material-color={sneakerColorState.snöre_baksida}
        geometry={nodes.snöre_baksida.geometry}
        material={materials["Material.001"]}
        scale={0.108}
      />
      <mesh
        name="Nike Lace Tag"
        material-color={sneakerColorState.snöre_framsida}
        geometry={nodes.snöre_framsida.geometry}
        material={materials.Material}
        scale={0.108}
      />
      <mesh
        name="Laces cover"
        geometry={nodes.snörning_framsida007.geometry}
        material={materials["Material.003"]}
        position={[0.017, 0.116, -0.112]}
        rotation={[0.045, -0.145, 0.007]}
        scale={[0.108, 0.108, 0.103]}
      />
      <group scale={0.108}>
        <mesh
          name="Body"
          material-color={sneakerColorState.material_grund}
          geometry={nodes.Cube002.geometry}
          material={materials.material_grund}
        />
        <mesh
          name="Nike Logo"
          material-color={sneakerColorState.nike_logga}
          geometry={nodes.Cube002_1.geometry}
          material={materials.nike_logga}
        />
        <mesh
          name="Nike Backside Logo"
          material-color={sneakerColorState.baksida_logga}
          geometry={nodes.Cube002_2.geometry}
          material={materials.baksida_logga}
        />
        <mesh
          name="Nike Frontside"
          material-color={sneakerColorState.framsida}
          geometry={nodes.Cube002_3.geometry}
          material={materials.framsida}
        />
        <mesh
          name="Laces Cap"
          material-color={sneakerColorState.överdel}
          geometry={nodes.Cube002_4.geometry}
          material={materials.överdel}
        />
        <mesh
          name="Frontside sole"
          material-color={sneakerColorState.framsida_övre}
          geometry={nodes.Cube002_5.geometry}
          material={materials.framsida_övre}
        />
      </group>
      <group scale={0.108}>
        <mesh
          name="Under sole"
          material-color={sneakerColorState.sko_sula_underdel}
          geometry={nodes.Cube003.geometry}
          material={materials.sko_sula_underdel}
        />
        <mesh
          name="Side sole"
          material-color={sneakerColorState.sko_sula_sida}
          geometry={nodes.Cube003_1.geometry}
          material={materials.sko_sula_sida}
        />
        <mesh
          name="Front sole"
          material-color={sneakerColorState.front_sole}
          geometry={nodes.Cube003_2.geometry}
          material={materials.sko_sula_framifrån}
        />
      </group>
      <mesh
        name="Sole inside"
        material-color={sneakerColorState.sula_insida}
        geometry={nodes.sula_insida.geometry}
        material={materials.sula_insida}
        scale={[0.11, 0.108, 0.108]}
      />
    </group>
  );
};

useGLTF.preload("/scene.gltf");
export default withSneaker3Dcustomization(NikeTC7900);
