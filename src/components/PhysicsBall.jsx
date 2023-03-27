import React, { useRef, useEffect } from "react";
import { Sphere } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const PhysicsBall = (props) => {
  const sphereRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (sphereRef.current) {
        console.log("Use force on ball");
        sphereRef.current.applyImpulse({ x: 0, y: 20, z: -100 }, true);
      }
    }, 100);
  }, []);

  return (
    <RigidBody
      ref={sphereRef}
      colliders="ball"
      restitution={1.5}
      position={[0, 1, 15]}>
      <Sphere material-color="hotpink" />
    </RigidBody>
  );
};

export default PhysicsBall;
