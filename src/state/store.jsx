import {create} from "zustand";

const useStore = create((set) => ({
    numBalls: 0,
balls: [],
throwBall: () => {
    set(state => ([...state.balls, {name: `ball${numBalls}`}]));
    set(state => {numBalls: state.numBalls + 1});
}
}));

export default useStore;