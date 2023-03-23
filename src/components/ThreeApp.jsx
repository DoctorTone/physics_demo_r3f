import { OrbitControls, Sphere } from "@react-three/drei";
import { SCENE } from "../config/Config.js";
import {Physics, RigidBody} from "@react-three/rapier";
import Floor from "./Floor.jsx";

const ThreeApp = () => {

  return (
    <>
    <Physics>
      <ambientLight intensity={SCENE.ambientIntensity} />
      <pointLight position={SCENE.lightPosition} />
      <RigidBody>
      <Sphere position-y={5} material-color="hotpink"/>
      </RigidBody>
      <RigidBody type="fixed">
      <Floor />
      </RigidBody>
      <OrbitControls />
      </Physics>
    </>
  );
};

export default ThreeApp;
