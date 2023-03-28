import { create } from "zustand";

const FORCE_SCALE_X = 70;
const FORCE_SCALE_Y = 50;

const useStore = create((set) => ({
  numBalls: 0,
  currentForce: {
    x: 0,
    y: 0,
    z: -100,
  },
  balls: [],
  throwBall: (force) => {
    set({
      currentForce: {
        x: force.x * FORCE_SCALE_X,
        y: force.y * FORCE_SCALE_Y,
        z: -100,
      },
    });
    set((state) => ({
      balls: [...state.balls, { key: `ball${state.numBalls}` }],
    }));
    set((state) => ({ numBalls: state.numBalls + 1 }));
  },
}));

export default useStore;
