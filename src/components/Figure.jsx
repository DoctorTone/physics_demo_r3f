import React from "react";
import { useFBX } from "@react-three/drei";

const Figure = (props) => {
  const figure = useFBX("/src/assets/Sitting Laughing.fbx");

  return <primitive {...props} object={figure} />;
};

export default Figure;
