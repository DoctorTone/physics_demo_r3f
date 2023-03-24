import { useRef } from "react";
import { OrbitControls, Sphere, Box } from "@react-three/drei";
import { SCENE } from "../config/Config.js";
import { Physics, RigidBody } from "@react-three/rapier";
import Floor from "./Floor.jsx";
import Target from "./Target.jsx";
import Pool from "./Pool.jsx";

const ThreeApp = () => {
  const sphereRef = useRef();

  const throwSphere = (event) => {
    sphereRef.current.applyImpulse({ x: 0, y: 20, z: -100 });
  };

  return (
    <>
      <Physics>
        <ambientLight intensity={SCENE.ambientIntensity} />
        <pointLight position={SCENE.lightPosition} />
        <RigidBody
          ref={sphereRef}
          colliders="ball"
          restitution={1.5}
          position={[0, 1, 11]}>
          <Sphere onClick={throwSphere} material-color="hotpink" />
        </RigidBody>
        <RigidBody type="fixed" position={[3, 2, 0]}>
          <Target />
        </RigidBody>
        {/* <RigidBody type="fixed">
          <Floor />
        </RigidBody> */}
      </Physics>
      <OrbitControls />
      <Pool position={[-5, 0, 0]} />
    </>
  );
};

export default ThreeApp;
