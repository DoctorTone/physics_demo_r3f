import React from "react";
import Target from "./Target.jsx";
import { RigidBody } from "@react-three/rapier";
import { SCENE } from "../config/Config.js";

const TargetArray = props => {
const targets = [0, 1, 2];

const hitTarget = (event) => {
    console.log("Hit target", event);
}
    return (
        <>
        {targets.map(target => (
            <RigidBody
                key={target}
                name={`target${target}`}
                type="fixed"
                position={SCENE.targetPosition[target]}
                onCollisionEnter={hitTarget}>
                <Target />
            </RigidBody>
        ))}
        </>
    )
}

export default TargetArray;