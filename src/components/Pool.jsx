/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Pool = (props) => {
  const { nodes, materials } = useGLTF("src/assets/pool.glb");
  return (
    <group {...props} dispose={null} scale={1.1}>
      <group>
        <mesh position={[-0.5, 3, 0]}>
          <cylinderGeometry args={[2.25, 2.25, 1]} />
          <meshStandardMaterial color="brown" />
        </mesh>
      </group>
      <group position={[-0.43, 0.81, 2.51]} scale={0.42}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials["Material.011"]}
        />
      </group>
      <group position={[-0.43, 1.6, 0]} rotation={[0, -0.38, 0]} scale={0.39}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        position={[-0.43, 2.39, 0]}
        rotation={[-Math.PI, 0.08, -Math.PI]}
        scale={0.39}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_2.geometry}
          material={materials["Material.011"]}
        />
      </group>
      <group position={[-0.43, 3.2, 2.51]} scale={0.42}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_2.geometry}
          material={materials["Material.011"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={materials["Material.006"]}
        position={[3.59, 0.32, -0.47]}
        rotation={[0, 0, -0.25]}
        scale={0.31}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere001.geometry}
        material={materials["Material.007"]}
        position={[-4.61, 0.39, -0.47]}
        rotation={[0, 0, -0.25]}
        scale={0.23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere002.geometry}
        material={materials["Material.007"]}
        position={[-4.73, 0.39, -0.05]}
        rotation={[0, 0, -0.25]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere003.geometry}
        material={materials["Material.007"]}
        position={[-2.93, 0.18, 4.99]}
        rotation={[0, 0, 3.13]}
        scale={0.92}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere004.geometry}
        material={materials["Material.007"]}
        position={[-3.22, 0.6, -5.03]}
        scale={0.66}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere005.geometry}
        material={materials["Material.007"]}
        position={[3.79, 0.25, 0.01]}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere006.geometry}
        material={materials["Material.007"]}
        position={[-6.2, 0.39, -4.41]}
        rotation={[0, 0, -0.25]}
        scale={0.23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere007.geometry}
        material={materials["Material.007"]}
        position={[-6.32, 0.39, -3.99]}
        rotation={[0, 0, -0.25]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere008.geometry}
        material={materials["Material.007"]}
        position={[-7.38, 0.39, 3.47]}
        rotation={[0, 0, -0.25]}
        scale={0.36}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere009.geometry}
        material={materials["Material.006"]}
        position={[1.93, 0.32, 6.38]}
        rotation={[0, 0, -0.25]}
        scale={0.31}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere010.geometry}
        material={materials["Material.006"]}
        position={[2.13, 0.25, 6.86]}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere011.geometry}
        material={materials["Material.006"]}
        position={[1.43, 0.39, 6.94]}
        rotation={[0, 0, -0.25]}
        scale={0.23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere012.geometry}
        material={materials["Material.007"]}
        position={[1.31, 0.39, 7.36]}
        rotation={[0, 0, -0.25]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere013.geometry}
        material={materials["Material.007"]}
        position={[4.59, 0.39, 4.38]}
        rotation={[0, 0, -0.25]}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere014.geometry}
        material={materials["Material.007"]}
        position={[5.04, 0.38, -2.7]}
        rotation={[0, 0, 3.13]}
        scale={0.28}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere015.geometry}
        material={materials["Material.007"]}
        position={[-3.99, 0.39, -4.94]}
        rotation={[0, 0, -0.25]}
        scale={0.23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere016.geometry}
        material={materials["Material.007"]}
        position={[-1.92, 0.25, 6.01]}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere017.geometry}
        material={materials["Material.006"]}
        position={[-2.62, 0.39, 6.08]}
        rotation={[0, 0, -0.25]}
        scale={0.23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere018.geometry}
        material={materials["Material.007"]}
        position={[-2.74, 0.39, 6.51]}
        rotation={[0, 0, -0.25]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials["Material.005"]}
        position={[-0.48, 0.17, 0.28]}
        scale={[-8.02, 0.16, -8.02]}
      />
    </group>
  );
};

useGLTF.preload("src/assets/pool.glb");

export default Pool;
