import React from "react";
import useStore from "../state/store.jsx";

const BallManager = props => {
    const balls = useStore(state => state.balls);

    return (
        <>
            {balls.map(ball => <PhysicsBall />)}
        </>
    )
};

export default BallManager;