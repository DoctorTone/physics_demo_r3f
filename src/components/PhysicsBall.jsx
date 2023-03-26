import React, {useRef, useEffect} from "react";
import {Sphere} from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const PhysicsBall = props => {

    const sphereRef = useRef();

    useEffect(() => {
        sphereRef.current.applyImpulse({ x: 0, y: 20, z: -100 });
    }, [])

    return (
    <RigidBody
          colliders="ball"
          restitution={1.5}
          position={[0, 1, 11]}>
          <Sphere ref={sphereRef} material-color="hotpink" />
        </RigidBody>
    )
}

export default PhysicsBall;