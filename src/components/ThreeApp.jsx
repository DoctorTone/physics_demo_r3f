import { useRef, useEffect } from "react";
import { OrbitControls, Sky, Stage } from "@react-three/drei";
import { SCENE } from "../config/Config.js";
import { Physics, RigidBody } from "@react-three/rapier";
import Floor from "./Floor.jsx";
import TargetArray from "./TargetArray.jsx";
import Pool from "./Pool.jsx";
import BallManager from "../state/BallManager.jsx";
import { useFrame, useThree } from "@react-three/fiber";
import useStore from "../state/store.jsx";
import Figure from "./Figure.jsx";

const ThreeApp = ({ thrown }) => {
  const { raycaster } = useThree();
  const throwBall = useStore((state) => state.throwBall);

  useEffect(() => {
    if (thrown) {
      throwBall(raycaster.ray.direction, raycaster.ray.origin);
    }
  }, [thrown]);

  return (
    <>
      <Sky sunPosition={SCENE.sunPosition} />
      <Physics>
        <ambientLight intensity={SCENE.ambientIntensity} />
        <pointLight position={SCENE.lightPosition} />
        <BallManager />
        <TargetArray />
        <RigidBody type="fixed">
          <Floor />
        </RigidBody>
      </Physics>
      <OrbitControls />
      <Pool position={SCENE.poolPosition} />
      <Figure scale={SCENE.FIGURE_SCALE} position={SCENE.figurePosition} />
    </>
  );
};

export default ThreeApp;
