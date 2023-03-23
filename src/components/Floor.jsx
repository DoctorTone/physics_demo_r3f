import React from "react"

const Floor = props => {
    return (
        <group>
            <mesh>
            <boxGeometry args={[10, 1, 10]} />
            <meshStandardMaterial color="grey" />
            </mesh>
        </group>
    )
}

export default Floor;