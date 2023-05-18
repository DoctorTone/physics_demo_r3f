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

const SCREEN_SIZES = {
  SMALL: 576,
  MEDIUM: 768,
  LARGE: 992,
  EXTRA_LARGE: 1200,
  EXTRA_EXTRA_LARGE: 1400,
};

const getCameraPosition = (screenWidth) => {
  let screenSize = SCREEN_SIZES.SMALL;

  if (screenWidth >= SCREEN_SIZES.SMALL && screenWidth < SCREEN_SIZES.MEDIUM) {
    screenSize = SCREEN_SIZES.SMALL;
  }

  if (screenWidth >= SCREEN_SIZES.MEDIUM && screenWidth < SCREEN_SIZES.LARGE) {
    screenSize = SCREEN_SIZES.MEDIUM;
  }

  if (
    screenWidth >= SCREEN_SIZES.LARGE &&
    screenWidth < SCREEN_SIZES.EXTRA_LARGE
  ) {
    screenSize = SCREEN_SIZES.LARGE;
  }

  if (
    screenWidth >= SCREEN_SIZES.EXTRA_LARGE &&
    screenWidth < SCREEN_SIZES.EXTRA_EXTRA_LARGE
  ) {
    screenSize = SCREEN_SIZES.EXTRA_LARGE;
  }

  if (screenWidth >= SCREEN_SIZES.EXTRA_EXTRA_LARGE) {
    screenSize = SCREEN_SIZES.EXTRA_EXTRA_LARGE;
  }

  let camPos;
  switch (screenSize) {
    case SCREEN_SIZES.SMALL:
      camPos = [0, 15, 50];
      break;

    case SCREEN_SIZES.MEDIUM:
      camPos = [0, 15, 40];
      break;

    default:
      camPos = [0, 10, 30];
  }

  return camPos;
};

export { SCENE, getDeviceStatus, getCameraPosition };
