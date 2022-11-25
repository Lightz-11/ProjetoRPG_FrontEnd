import BackgroundImage from "../../assets/img/Home-Background.jpg";
import { styled } from "../../stitches.config";

export const Container = styled("div", {
  width: "100%",
  height: "100vh",
  display: "flex",
  backgroundImage: `url(${BackgroundImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  overflowX: "hidden"
});

export const Main = styled("main", {
  width: "63rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "auto 0",
  h1: {
    fontSize: "18rem",
    fontFamily: "Gagalin, cursive",
    color: "#ffffff59",
    letterSpacing: "1rem",
    textShadow: "1rem 1rem 2rem #edadff8d"
  },

  h2: {
    fontFamily: "Alegreya, serif",
    letterSpacing: "0.5rem",
    marginBottom: "20rem",
    fontSize: "7rem",
    color: "#ffffff"
  },

  "@md": {
    margin: 'auto auto'
  }
});

export const Button = styled("button", {
  fontSize: "3.5rem",
  color: "#ffffff",
  border: "none",
  borderRadius: "2rem",
  padding: "1rem 7rem",
  fontFamily: "League Gothic, sans-serif",
  marginBottom: '3rem',
  marginTop: '-3rem',

  variants: {
    background: {
      default: { background: "none" },
      roxo: { backgroundColor: "#78108d" }
    },
    size: {
      25: { fontSize: "2.5rem" },
      35: { fontSize: "3.5rem" }
    },
    underline: {
      default: {textDecoration: 'underline'},
      false: {}
    }
  },

  defaultVariants: {
    background: "default",
    size: 25,
    underline: 'default'
  }
});
