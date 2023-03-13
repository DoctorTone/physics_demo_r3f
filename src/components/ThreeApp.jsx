import { OrbitControls, Sphere } from "@react-three/drei";
import { SCENE } from "../config/Config.js";

const ThreeApp = () => {

  return (
    <>
      <ambientLight intensity={SCENE.ambientIntensity} />
      <pointLight position={SCENE.lightPosition} />
      <Sphere />
      <OrbitControls />
    </>
  );
};

export default ThreeApp;
