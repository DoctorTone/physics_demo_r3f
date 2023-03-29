import React, { useRef, useEffect } from "react";
import { Sphere } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import useStore from "../state/store.jsx";

const PhysicsBall = ({ position }) => {
  const currentForce = useStore((state) => state.currentForce);
  const sphereRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (sphereRef.current) {
        sphereRef.current.applyImpulse(currentForce, true);
      }
    }, 100);
  }, []);

  return (
    <RigidBody
      ref={sphereRef}
      colliders="ball"
      restitution={1.5}
      position={position}>
      <Sphere material-color="hotpink" />
    </RigidBody>
  );
};

export default PhysicsBall;
