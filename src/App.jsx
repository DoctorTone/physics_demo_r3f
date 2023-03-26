import { Canvas } from "@react-three/fiber";
import ThreeApp from "./components/ThreeApp.jsx";
import { SCENE } from "./config/Config.js";
import useStore from "./state/store.jsx"

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./styles/styles.css";

function App() {
  const throwBall = useStore(state => state.throwBall);
  
  return (
    <Canvas onClick={throwBall}
      className="canvas3D"
      camera={{ position: SCENE.cameraPosition, fov: SCENE.fov }}>
      <ThreeApp />
    </Canvas>
  );
}

export default App;
