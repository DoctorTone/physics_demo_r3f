import { create } from "zustand";

const FORCE_SCALE_X = 110;
const FORCE_SCALE_Y = 70;

const useStore = create((set) => ({
  numBalls: 0,
  currentForce: {
    x: 0,
    y: 0,
    z: -100,
  },
  balls: [],
  throwBall: (force, position) => {
    set({
      currentForce: {
        x: force.x * FORCE_SCALE_X,
        y: force.y * FORCE_SCALE_Y,
        z: -100,
      },
    });
    set((state) => ({
      balls: [
        ...state.balls,
        {
          key: `ball${state.numBalls}`,
          position: [position.x, position.y, position.z],
        },
      ],
    }));
    set((state) => ({ numBalls: state.numBalls + 1 }));
  },
  showCover: true,
  removeCover: () => {
    set({ showCover: false });
  },
}));

export default useStore;
