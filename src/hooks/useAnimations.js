const scaleAnimation = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
  },
  transition: {
    duration: 0.5,
  },
};

const fadeAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    duration: 0.3,
  },
};

const fromTop = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  transition: {
    duration: 0.5,
  },
};
const fromBottom = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  transition: {
    duration: 0.5,
  },
};

const fromLeft = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  transition: {
    duration: 0.5,
  },
};
const fromRight = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  transition: {
    duration: 0.5,
  },
};

export {
  scaleAnimation,
  fadeAnimation,
  fromTop,
  fromBottom,
  fromLeft,
  fromRight,
};
