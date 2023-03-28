import React from "react";
import { SCENE } from "../config/Config.js";

const Floor = (props) => {
  return (
    <group>
      <mesh>
        <boxGeometry
          args={[SCENE.FLOOR_WIDTH, SCENE.FLOOR_HEIGHT, SCENE.FLOOR_DEPTH]}
        />
        <meshStandardMaterial color="grey" />
      </mesh>
    </group>
  );
};

export default Floor;
