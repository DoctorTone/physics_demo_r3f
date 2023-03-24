import React from "react"

const Floor = props => {
    return (
        <group>
            <mesh>
            <boxGeometry args={[10, 1, 30]} />
            <meshStandardMaterial color="grey" />
            </mesh>
        </group>
    )
}

export default Floor;