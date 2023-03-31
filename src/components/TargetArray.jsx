import React, { useState, useEffect } from "react";
import Target from "./Target.jsx";
import { RigidBody } from "@react-three/rapier";
import { SCENE } from "../config/Config.js";
import useStore from "../state/store.jsx";

const TargetArray = () => {
  const removeCover = useStore((state) => state.removeCover);
  const setTargetsHit = useStore((state) => state.setTargetsHit);
  const targetsHit = useStore((state) => state.targetsHit);

  const targets = [0, 1, 2];

  const targetHit = (event) => {
    const name = event.target.rigidBodyObject.name;
    setTargetsHit(name);
  };

  useEffect(() => {
    if (Object.values(targetsHit).every((hit) => hit === true)) {
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
          onCollisionEnter={targetHit}>
          <Target name={`target${target}`} />
        </RigidBody>
      ))}
    </>
  );
};

export default TargetArray;
