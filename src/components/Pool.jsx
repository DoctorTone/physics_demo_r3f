import React from "react";

const Pool = (props) => {
  return (
    <group {...props}>
      <mesh>
        <cylinderGeometry args={[5, 5, 2]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </group>
  );
};

export default Pool;
