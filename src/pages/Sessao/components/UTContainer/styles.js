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
    fontFamily: 'Special Elite',
    letterSpacing: '.1rem',
    paddingTop: '.3rem'
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
      filter: "brightness(1.5)",
    },
  },
});

export const BodyContainer = styled("div", {

  maxHeight: '38.5rem',
  overflowY: 'auto',
  padding: "2rem",
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '2rem',

  '@lg4': {
    gridTemplateColumns: '1fr',
  },

  '@lg3': {
    gridTemplateColumns: '1fr 1fr',
  },

  '@md': {
    gridTemplateColumns: '1fr',
  },

  variants: {
    quantidade: {
      1: {
        gridTemplateColumns: '1fr',
      }
    }
  }

});