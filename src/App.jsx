import React from "react";
import { Canvas } from "@react-three/fiber";
import ThreeApp from "./components/ThreeApp.jsx";
import { SCENE } from "./config/Config.js";
import TextInfo from "./UI/TextInfo.jsx";
import TextTitle from "./UI/TextTitle.jsx";
import { getCameraPosition } from "./config/Config.js";
import useSound from "use-sound";
import useStore from "./state/store.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";

function App() {
  const [throwSound] = useSound("./audio/pop.wav", { volume: 0.5 });
  const setThrowIt = useStore((state) => state.setThrowIt);

  const throwBall = (event) => {
    setThrowIt(true);
    throwSound();
  };

  const onMenu = (event) => {
    event.preventDefault();
  };

  const camPosition = getCameraPosition(window.innerWidth);

  return (
    <>
      <Canvas
        onPointerDown={throwBall}
        onContextMenu={onMenu}
        className="canvas3D"
        camera={{ position: camPosition, fov: SCENE.fov }}>
        <ThreeApp />
      </Canvas>
      <TextInfo />
      <TextTitle />
    </>
  );
}

export default App;
