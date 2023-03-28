import React, { useRef, useEffect } from "react";
import { Sphere } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import useStore from "../state/store.jsx";

const PhysicsBall = (props) => {
  const currentForce = useStore((state) => state.currentForce);
  const sphereRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (sphereRef.current) {
        console.log("Use force on ball");
        sphereRef.current.applyImpulse(currentForce, true);
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
