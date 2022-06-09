/* eslint-disable */
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";


const fullConfig = resolveConfig(tailwindConfig);

/* grab the current breakpoint of the screen  */
const getCurrentBreakpoint = () => {
  let currentBreakpoint;
  const breakpointsArray = Object.entries(fullConfig.theme.screens);

  breakpointsArray.sort((a, b) => {
    const valA = [a[1].split("px")][0][0];
    const valB = [b[1].split("px")][0][0];
    const valAInt = parseInt(valA, 10);
    const valBInt = parseInt(valB, 10);
    if (valAInt > valBInt) {
      return 1;
    }
    if (valAInt < valBInt) {
      return -1;
    }
    return 0;
  });

  for (let i = 0; i < breakpointsArray.length; i++) {
    const breakpointValue = parseInt([breakpointsArray[i][1].split("px")], 10);

    if (window.innerWidth >= breakpointValue) {
      currentBreakpoint = breakpointsArray[i];
    } else {
      if (!currentBreakpoint) {
        [currentBreakpoint] = breakpointsArray;
      }
      break;
    }
  }
  return {
    key: currentBreakpoint[0],
    valueString: currentBreakpoint[1],
    value: parseInt([currentBreakpoint[1].split("px")], 10),
  };
};

export {
    getCurrentBreakpoint,
}