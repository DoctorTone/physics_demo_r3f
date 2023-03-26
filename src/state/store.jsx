import {create} from "zustand";

const useStore = create((set) => ({
    numBalls: 0,
balls: [],
throwBall: () => {
    // DEBUG
    console.log("Thrown ball");
    set(state => ({balls: [...state.balls, {key: `ball${state.numBalls}`}]}));
    set(state => ({numBalls: state.numBalls + 1}));
}
}));

export default useStore;