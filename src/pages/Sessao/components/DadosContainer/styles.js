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

  '@md5': {
    justifyContent: 'left',
    paddingLeft: '2rem'
  },

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

  display: 'flex',
  flexDirection: 'column'

});

export const Elemento = styled('div', {

  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  input: {
    width: '90%',
    background: 'none',
    border: 'none',
    outline: '2px solid #ffffff90',
    padding: '.5rem',
    color: 'white',
  },

  'input::placeholder': {
    opacity: .5
  },

})

export const Button = styled('button', {
  width: '5%',
  background: 'none',
  border: '2px solid #ffffff90',
  borderLeft: '2px solid transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '.4rem',
  transition: '.2s',

  '&:hover': {
    background: '#ffffff20'
  }
})

export const Body = styled('div', {

  h1: {
    fontSize: '2rem',
    color: 'white',
    textAlign: 'center',
  },

  display: 'flex',
  flexDirection: 'column',

})

export const BodyDados = styled('div', {

  padding: "1rem",
  display: "flex",
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '3rem',

  variants: {
    nulo: {
      true: {
        padding: 0
      }
    }
  }

})