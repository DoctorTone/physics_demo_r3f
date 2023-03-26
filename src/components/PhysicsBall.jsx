import React, {useRef, useEffect} from "react";
import {Sphere} from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const PhysicsBall = props => {

    const sphereRef = useRef();

    useEffect(() => {
        if (sphereRef.current) {
            console.log("Use force on ball");
            sphereRef.current.applyImpulse({ x: 0, y: 100, z: -100 });
        }
    }, [])

    return (
    <RigidBody ref={sphereRef}
          colliders="ball"
          restitution={1.5}
          position={[0, 6, 11]}>
          <Sphere material-color="hotpink" />
        </RigidBody>
    )
}

export default PhysicsBall;