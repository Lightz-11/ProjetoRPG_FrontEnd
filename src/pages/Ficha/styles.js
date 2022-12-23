import { styled } from "../../stitches.config";

export const Container = styled("div", {
  width: "100%",
  height: "100vh",
  background: "rgb(20,20,20)",
  display: 'flex',
  flexDirection: 'column'
});

export const Body = styled("div", {
  overflowY: "auto",
  marginTop: '7.3rem',
  width: '100%',
  padding: "3rem 2rem 7rem 2rem",

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
