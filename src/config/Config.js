const SCENE = {
  lightPosition: [10, 10, 10],
  ambientIntensity: 0.5,
  cameraPosition: [0, 15, 50],
  poolPosition: [-7, 1, 8],
  sunPosition: [-1, 0.15, 0],
  fov: 45,
  FLOOR_WIDTH: 85,
  FLOOR_HEIGHT: 1,
  FLOOR_DEPTH: 80,
  targetPosition: [
    [0, 7, 7],
    [4, 7, 7],
    [8, 7, 7],
  ],
  FIGURE_SCALE: 4,
  figurePosition: [-7.25, 4.75, 7.25],
  animationDelay: 500,
};

const getDeviceStatus = () => {
  // See if mobile
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (error) {
    // Must be desktop
    return false;
  }
};

export { SCENE, getDeviceStatus };
