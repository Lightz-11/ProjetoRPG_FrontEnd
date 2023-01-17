import { styled } from "../../../../../../stitches.config"

export const Container = styled('div', {

  width: '65rem',
  borderRadius: '1.2rem',
  backgroundColor: 'rgb(27,27,27)',
  boxShadow: 'rgba(255, 255, 255, 0.45) 0rem 0.5rem 1.5rem',
  padding: '3.5rem 2.5rem',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',

  '@sm': {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden'
  },

  h1: {
    display: 'inline-block',
    marginBottom: '3rem',
    fontSize: '3rem',
    color: '#a151b4',
  },

})

export const Hr = styled('hr', {

  '@sm': {

    margin: '0 -2.5rem .2rem -2.5rem'

  },
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Arvo'
})

export const Main = styled('div', {
  '@sm': {
    padding: '0rem 2rem 3rem 1rem',
    overflow: 'hidden auto'
  }
})

export const Main1 = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: '3rem',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: '3rem'

})

export const Main2 = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: '3rem',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: '3rem'

})

export const Main3 = styled('div', {

  display: 'flex',
  width: '100%',

})

export const Footer = styled('div', {
  top: '2rem',
  position: 'relative',
  alignItems: 'stretch',
  justifyContent: 'center',

  '@sm': {
    top: '20px'
  }
})

export const Button = styled('button', {
  width: '15rem',
  height: '4.5rem',
  margin: '1rem',
  border: 'none',
  color: 'white',
  borderRadius: '8px',
  fontSize: '2.2rem',
  letterSpacing: '.1rem',
  cursor: 'pointer',
  fontFamily: 'Crismon Text',

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