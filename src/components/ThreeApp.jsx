import { OrbitControls, Sphere } from "@react-three/drei";
import { SCENE } from "../config/Config.js";
import Floor from "./Floor.jsx";

const ThreeApp = () => {

  return (
    <>
      <ambientLight intensity={SCENE.ambientIntensity} />
      <pointLight position={SCENE.lightPosition} />
      <Floor />
      <Sphere position-y={5} material-color="hotpink"/>
      <OrbitControls />
    </>
  );
};

export default ThreeApp;
