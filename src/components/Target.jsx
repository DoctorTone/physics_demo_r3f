/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import useStore from "../state/store.jsx";
import useSound from "use-sound";

const Target = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("./assets/target.gltf");
  const targetsHit = useStore((state) => state.targetsHit);
  const [beenHit, setBeenHit] = useState(false);
  const [hitSound] = useSound("./audio/success.wav", { volume: 0.5 });

  useEffect(() => {
    if (targetsHit[group.current.name]) {
      setBeenHit(true);
      hitSound();
    }
  }, [targetsHit]);

  return (
    <group ref={group} {...props} dispose={null} name={props.name}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Cylinder015.geometry}>
          {beenHit ? (
            <meshStandardMaterial color="grey" />
          ) : (
            <meshStandardMaterial color="red" />
          )}
        </mesh>
        <mesh
          geometry={nodes.Cylinder015_1.geometry}
          material={materials["White.024"]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("./assets/target.gltf");

export default Target;
