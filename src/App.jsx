import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import ThreeApp from "./components/ThreeApp.jsx";
import { SCENE } from "./config/Config.js";
import useStore from "./state/store.jsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./styles/styles.css";

function App() {
  const raycaster = new THREE.Raycaster();
  const mouseCoords = new THREE.Vector2();

  const throwBall = useStore((state) => state.throwBall);

  const setDirection = (event) => {
    mouseCoords.set(
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1
    );

    // DEBUG
    console.log("Coords = ", mouseCoords);
    throwBall(mouseCoords);
  };

  return (
    <Canvas
      onPointerDown={setDirection}
      className="canvas3D"
      camera={{ position: SCENE.cameraPosition, fov: SCENE.fov }}>
      <ThreeApp />
    </Canvas>
  );
}

export default App;
