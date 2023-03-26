import React from "react";
import PhysicsBall from "../components/PhysicsBall.jsx";
import useStore from "../state/store.jsx";

const BallManager = props => {
    const balls = useStore(state => state.balls);
    const numBalls = useStore(state => state.numBalls);
    // DEBUG
    console.log("Num Balls = ", numBalls);
    console.log("Balls = ", balls);

    return (
        <>
            {balls.map(props => <PhysicsBall {...props} />)}
        </>
    )
};

export default BallManager;