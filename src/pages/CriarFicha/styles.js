import { styled } from '../../stitches.config';

export const Container = styled("div", {
  width: "100%",
  height: "100vh",
  background: "rgb(27,27,27)",
  display: 'flex',
  flexDirection: 'column',

});

export const Body = styled("div", {

  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateAreas:
    `'principal atributos'
  'footer footer'`,
  gridTemplateRows: 'auto auto',
  width: '100%',
  padding: "2rem",
  overflowY: 'auto',
  gap: '3rem',
  marginTop: '7.3rem',

  '@md3': {
    gridTemplateColumns: '1fr',
    gridTemplateAreas:
      `'principal'
  'atributos'
  'footer'`,
    gridTemplateRows: 'auto auto auto',
  },

  '@md2': {
    paddingBottom: '10rem',
  },

});

export const Principal = styled('div', {
  height: "90rem",
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'top',
  flexDirection: 'column',
  border: '2px solid #ffffff90',
  padding: '3rem',
  gridArea: 'principal',

  h1: {
    color: 'white',
    fontSize: '3rem',
    fontFamily: 'Special Elite',
    letterSpacing: '.2rem'
  },

})

export const Atributos = styled('div', {
  height: '90rem',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'top',
  flexDirection: 'column',
  border: '2px solid #ffffff90',
  padding: '3rem',
  gridArea: 'atributos',

  h1: {
    color: 'white',
    fontSize: '3rem',
    fontFamily: 'Special Elite',
    letterSpacing: '.2rem'
  },

})

export const Span = styled('span', {
  width: '95%',
  color: '#ff000090',
  fontSize: '1.7rem',
  letterSpacing: '.1rem',
  marginTop: '.5rem',
  textAlign: 'left',
  fontFamily: 'emoji'
})

export const Footer = styled('div', {
  width: '100%',
  gridArea: 'footer',
  button: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #7538ef',
    padding: '1rem',
    color: 'white',
    borderRadius: '8px',
    fontSize: '2.5rem',
    cursor: 'pointer',
    transition: '0.2s',
    backgroundColor: '#4f1db4',
    fontFamily: 'Crimson Text',

    '&:hover': {
      backgroundColor: '#3f178f',
    },
  }
})