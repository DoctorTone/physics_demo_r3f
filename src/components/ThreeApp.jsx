import { OrbitControls } from "@react-three/drei";
import { SCENE } from "../config/Config.js";

const ThreeApp = () => {

  return (
    <>
      <ambientLight intensity={SCENE.ambientIntensity} />
      <pointLight position={SCENE.lightPosition} />
      <OrbitControls />
    </>
  );
};

export default ThreeApp;
