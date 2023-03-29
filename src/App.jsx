import React, { useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import ThreeApp from "./components/ThreeApp.jsx";
import { SCENE } from "./config/Config.js";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./styles/styles.css";

function App() {
  const [throwIt, setThrow] = useState(false);

  const throwBall = () => {
    setThrow(true);
  };

  const releaseBall = () => {
    setThrow(false);
  };

  return (
    <Canvas
      onPointerDown={throwBall}
      onPointerUp={releaseBall}
      className="canvas3D"
      camera={{ position: SCENE.cameraPosition, fov: SCENE.fov }}>
      <ThreeApp thrown={throwIt} />
    </Canvas>
  );
}

export default App;
