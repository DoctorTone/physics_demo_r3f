import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { SCENE } from "../config/Config.js";
import { Physics, RigidBody } from "@react-three/rapier";
import Floor from "./Floor.jsx";
import Target from "./Target.jsx";
import Pool from "./Pool.jsx";
import BallManager from "../state/BallManager.jsx";

const ThreeApp = () => {

  return (
    <>
      <Physics>
        <ambientLight intensity={SCENE.ambientIntensity} />
        <pointLight position={SCENE.lightPosition} />
        <BallManager />
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
