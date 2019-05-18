import breakpoints from "./breakpoints";
import colors from "./colors";

export default {
  borderRadius: 16,
  breakpoints,
  color: {
    primary: colors.green,
    dark: colors.dark_gray,
    light: colors.white,
    surface: colors.white,
    error: colors.red,
    shadow: colors.black,
    border: colors.light_gray,
    text: colors.slate,
    placeholder: colors.off_white,
    ...colors
  },
  easing: {
    standard: "cubic-bezier(0.4, 0.0, 0.2, 1)",
    decelerate: "cubic-bezier(0.0, 0.0, 0.2, 1)",
    accelerate: "cubic-bezier(0.4, 0.0, 1, 1)"
  },
  fontFamily: "Roboto",
  springs: {
    default: {
      friction: 8,
      tension: 40
    },
    drawer: {
      friction: 8,
      tension: 40
    },
    tabs: {
      friction: 4,
      tension: 10
    },
    snackbar: {
      fritction: 4,
      tension: 10
    }
  },
  z: {
    sidenav: -1,
    header: 3,
    drawer: 5,
    modal: 6
  }
};
