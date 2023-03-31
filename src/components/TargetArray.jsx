import React, { useState, useEffect } from "react";
import Target from "./Target.jsx";
import { RigidBody } from "@react-three/rapier";
import { SCENE } from "../config/Config.js";
import useStore from "../state/store.jsx";

const TargetArray = () => {
  const [targetsHit, setTargetsHit] = useState({
    target0: "No",
    target1: "No",
    target2: "No",
  });
  const removeCover = useStore((state) => state.removeCover);

  const targets = [0, 1, 2];

  const targetHit = (event) => {
    const name = event.target.rigidBodyObject.name;
    console.log("Name = ", name);
    setTargetsHit((targetsHit) => ({ ...targetsHit, [name]: "Yes" }));
  };

  useEffect(() => {
    console.log("Targets = ", targetsHit);
    if (Object.values(targetsHit).every((hit) => hit === "Yes")) {
      removeCover();
    }
  }, [targetsHit]);

  return (
    <>
      {targets.map((target) => (
        <RigidBody
          key={target}
          name={`target${target}`}
          type="fixed"
          position={SCENE.targetPosition[target]}
          onCollisionEnter={targetHit}
        >
          <Target />
        </RigidBody>
      ))}
    </>
  );
};

export default TargetArray;
