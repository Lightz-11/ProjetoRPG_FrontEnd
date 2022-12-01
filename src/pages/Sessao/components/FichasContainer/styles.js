import { styled } from '../../../../stitches.config';

export const Container = styled("div", {
  border: "2px solid #ffffff75",
  marginBottom: "2rem",
  borderRadius: "0.5rem",
  width: "100%",
});

export const HeaderContainer = styled("div", {
  padding: "1rem 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",

  h1: {
    textAlign: "center",
    color: "white",
    fontSize: "2rem",
  },

  button: {
    background: "none",
    border: "none",
    color: "Green",
    position: "absolute",
    right: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  svg: {
    transition: "0.3s",
  },

  "button:hover": {
    svg: {
      filter: "brightness(2)",
    },
  },
});

export const BodyContainer = styled("div", {
  padding: "1.5rem",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridColumnGap: "1rem",
  gridRowGap: "2rem",

  variants: {
    quantidade: {
      1: {
        gridTemplateColumns: "1fr",

        "@lg4": {
          gridTemplateColumns: "1fr 1fr",
        },

        "@lg2": {
          gridTemplateColumns: "1fr"
        }

      },
      2: {

        gridTemplateColumns: "1fr 1fr",

        "@lg4": {
          gridTemplateColumns: "1fr 1fr",
        },

        "@lg2": {
          gridTemplateColumns: "1fr"
        }

      }
    }
  },

  "@lg4": {
    gridTemplateColumns: "1fr 1fr",
  },

  "@lg2": {
    gridTemplateColumns: "1fr"
  }
});