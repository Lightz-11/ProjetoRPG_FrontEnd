import { styled } from "../../../../../stitches.config"

export const Container = styled('div', {

  width: '65rem',
  height: '89rem',
  borderRadius: '1.2rem',
  backgroundColor: 'rgb(27,27,27)',
  boxShadow: 'rgba(255, 255, 255, 0.45) 0rem 0.5rem 1.5rem',
  padding: '3.5rem 2.5rem',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',

  '@sm': {
    width: '45rem',
    height: '115rem'
  },

  h1: {
    display: 'inline-block',
    marginBottom: '2rem',
    fontSize: '3rem',
    color: '#a151b4',
  },

})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1rem',
  fontFamily: 'Arvo'
})

export const Main = styled('div', {

  display: 'grid',
  paddingTop: '2rem',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '1rem 2rem',

  '@sm': {
    gridTemplateColumns: '1fr 1fr',
  }

})

export const Footer = styled('div', {
  top: '2rem',
  position: 'relative',
  alignItems: 'stretch',
  justifyContent: 'center',
})

export const Button = styled('button', {
  width: '15rem',
  height: '4.5rem',
  margin: '1rem',
  border: 'none',
  color: 'white',
  borderRadius: '8px',
  fontSize: '2.2rem',
  fontFamily: 'Crimson Text',
  letterSpacing: '.1rem',
  cursor: 'pointer',

  '@sm': {
    width: '12rem',
    height: '3.5rem',
    fontSize: '2rem',
  },

  variants: {
    color: {
      red: {
        backgroundColor: '#d41717ff',

        '&:hover': {
          backgroundColor: '#ac1414ff',
        },
      },
      purple: {
        backgroundColor: '#4f1db4',

        '&:hover': {
          backgroundColor: '#3f178f',
        },
      }
    }
  },

  defaultVariants: {
    color: 'red'
  }
})