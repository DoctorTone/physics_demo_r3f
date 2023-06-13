import { useEffect, Suspense } from "react";
import { Sky } from "@react-three/drei";
import { SCENE } from "../config/Config.js";
import { Physics, RigidBody } from "@react-three/rapier";
import Floor from "./Floor.jsx";
import TargetArray from "./TargetArray.jsx";
import Pool from "./Pool.jsx";
import BallManager from "../state/BallManager.jsx";
import { useThree } from "@react-three/fiber";
import useStore from "../state/store.jsx";
import Figure from "./Figure.jsx";
import { Loading } from "./Loading.jsx";

const ThreeApp = ({ thrown }) => {
  const { raycaster } = useThree();
  const throwIt = useStore((state) => state.throwIt);
  const setThrowIt = useStore((state) => state.setThrowIt);
  const throwBall = useStore((state) => state.throwBall);

  useEffect(() => {
    if (throwIt) {
      throwBall(raycaster.ray.direction, raycaster.ray.origin);
      setThrowIt(false);
    }
  }, [throwIt]);

  return (
    <>
      <Suspense fallback={<Loading />}>
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
        <Pool position={SCENE.poolPosition} />
        <Figure scale={SCENE.FIGURE_SCALE} position={SCENE.figurePosition} />
      </Suspense>
    </>
  );
};

export default ThreeApp;
