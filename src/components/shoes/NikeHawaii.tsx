/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 scene.gltf -t -o NikeHawaii.tsx 
Author: ryanbair (https://sketchfab.com/ryanbair)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/nike-dunk-hawaii-6k-triangles-5a631f5439764fa18cf465f4cf19338f
Title: Nike Dunk Hawaii - 6k triangles
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
  }
  materials: {
    tex_u1_v1: THREE.MeshBasicMaterial
  }
  animations: GLTFAction[]
}

export function NikeHawaii(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/nike-hawaii/scene.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.tex_u1_v1} rotation={[-Math.PI / 2, 0, 0]} scale={0.017} />
    </group>
  )
}

useGLTF.preload('/nike-hawaii/scene.gltf')
