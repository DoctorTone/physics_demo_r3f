import React, { useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import ThreeApp from "./components/ThreeApp.jsx";
import { SCENE } from "./config/Config.js";
import TextInfo from "./UI/TextInfo.jsx";
import TextTitle from "./UI/TextTitle.jsx";
import { getCameraPosition } from "./config/Config.js";

import "./styles/styles.css";

function App() {
  const [throwIt, setThrow] = useState(false);
  const [throwSound] = useState(() => new Audio("./audio/pop.wav"));

  const throwBall = () => {
    setThrow(true);
    throwSound.play();
  };

  const releaseBall = () => {
    setThrow(false);
  };

  const camPosition = getCameraPosition(window.innerWidth);
  // DEBUG
  console.log(`Width = ${window.innerWidth} Pos = ${camPosition}`);

  return (
    <>
      <Canvas
        onPointerDown={throwBall}
        onPointerUp={releaseBall}
        className="canvas3D"
        camera={{ position: camPosition, fov: SCENE.fov }}>
        <ThreeApp thrown={throwIt} />
      </Canvas>
      <TextInfo />
      <TextTitle />
    </>
  );
}

export default App;
