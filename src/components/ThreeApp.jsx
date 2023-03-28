import { useRef, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import { SCENE } from "../config/Config.js";
import { Physics, RigidBody } from "@react-three/rapier";
import Floor from "./Floor.jsx";
import Target from "./Target.jsx";
import Pool from "./Pool.jsx";
import BallManager from "../state/BallManager.jsx";
import { useFrame, useThree } from "@react-three/fiber";

const ThreeApp = ({ throwBall }) => {
  const { raycaster, events } = useThree();

  console.log("Events = ", events);

  useEffect(() => {
    if (throwBall) {
      console.log("Throw ball");
    }
  }, [throwBall]);

  return (
    <>
      <Physics>
        <ambientLight intensity={SCENE.ambientIntensity} />
        <pointLight position={SCENE.lightPosition} />
        <BallManager />
        <RigidBody type="fixed" position={SCENE.targetPosition}>
          <Target />
        </RigidBody>
        <RigidBody type="fixed">
          <Floor />
        </RigidBody>
      </Physics>
      <OrbitControls />
      <Pool position={SCENE.poolPosition} />
    </>
  );
};

export default ThreeApp;
