import { globalCss } from "@stitches/react";

export const GlobalStyles = globalCss({
  ":root": {
    fontSize: "62.5%",

    "@media (max-width:1200px)": {
      fontSize: "56.25%"
    },

    "@media(max-width:1080px)": {
      fontSize: "50%"
    },

    "@media(max-width: 900px)": {
      fontSize: "43.75%"
    },

    "@media(max-width: 790px)": {
      fontSize: "38.5%"
    }
  },

  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontSize: "1.6rem"
  },

  body: {
    width: "100vw",
    minHeight: "100vh",
    fontFamily: "Arial, Helvetica, sans-serif",
    backgroundColor: "#020821"
  },

  button: {
    cursor: "pointer"
  }
});
