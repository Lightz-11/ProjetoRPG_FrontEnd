import { styled } from "../../stitches.config";

export const Container = styled("div", {
  width: "100%",
  height: "100vh",
  background: "rgb(20,20,20)",
  display: 'flex',
  flexDirection: 'column'
});

export const Header = styled("div", {
  height: "auto",
  background: "rgb(15,15,15)",
  padding: "1.5rem 0",
  borderBottom: '2px solid white',

  h1: {
    color: 'Purple',
    textAlign: 'center',
    fontFamily: 'Fredoka One',
    letterSpacing: '.2rem',
    fontSize: '3.3rem',
    textShadow: "4px 3px 2px black",
  },
});

export const Body = styled("div", {
  overflowY: "auto",
  width: '100%',
  padding: "2rem 2rem 0rem 2rem",

  hr: {
    borderColor: "#ffffff75",
  },

});

export const DoubleParteContainer = styled("div", {
  display: "grid",
  paddingRight: '2rem',
  gridColumnGap: "2rem",
  gridTemplateColumns: '50% 50%',
  width: '100%',

  "@lg3": {
    paddingRight: '0rem',
    gridTemplateColumns: '100%',
  },
});
