import { styled } from '../../../../stitches.config';

export const Container = styled("div", {
  border: "2px solid #ffffff75",
  marginBottom: "2rem",
  borderRadius: "0.5rem",
  width: "100%",
  paddingBottom: '3rem',
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
      filter: "brightness(2)",
    },
  },
});

export const BodyContainer = styled("div", {

  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '3rem',
  gap: '2rem 4rem',
  overflow: 'hidden',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',

  '@lg4': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },

  '@lg3': {
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
  },

  '@sm': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },

  '@md2': {
    gridTemplateColumns: '1fr 1fr',
  },


});

export const Footer = styled('div', {
  width: '100%',
  marginTop: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 3rem',
  gap: '3rem',
  flexWrap: 'wrap'

})

export const Button = styled('button', {

  width: '14rem',
  textAlign: 'center',
  padding: '.5rem',
  fontSize: '1.8rem',
  background: 'none',
  whiteSpace: 'nowrap',

  variants: {
    color: {
      nt: {
        color: '#cccccc',
        border: '1px solid #cccccc'
      },
      t: {
        color: '#0095ff',
        border: '1px solid #0095ff'
      },
      v: {
        color: '#0800ff',
        border: '1px solid #0800ff'
      },
      e: {
        color: '#7700ff',
        border: '1px solid #7700ff'
      }
    }

  }

})