import { styled } from '../../../../../../stitches.config';

export const Container = styled('div', {

  width: '65rem',
  borderRadius: '1.2rem',
  backgroundColor: 'rgb(27,27,27)',
  boxShadow: 'rgba(255, 255, 255, 0.45) 0rem 0.5rem 1.5rem',
  padding: '3.5rem 2.5rem',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Arvo',

  '@sm': {
    width: '100vw',
    minHeight: '100vh',

    hr: {
      margin: '0 -2.5rem 1rem -2.5rem'
    }
  },

  h1: {
    display: 'inline-block',
    marginBottom: '3.5rem',
    fontSize: '3rem',
    color: '#a151b4',
  },
  hr: {
    marginBottom: '1rem'
  },

})

export const Footer = styled('div', {
  top: '0rem',
  marginTop: '1rem',
  marginBottom: '-2rem',
  position: 'relative',
  alignItems: 'stretch',
  justifyContent: 'center',

  '@sm': {
    width: '100%',
  }
})

export const MiniFooter = styled('div', {
  display: 'flex',
  flexDirection: 'row',

  '@sm': {
    marginLeft: '-1rem'
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
  fontFamily: 'Crimson Text',
  cursor: 'pointer',

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

export const ButtonDelete = styled('button', {
  width: '19rem',
  background: 'none',
  border: '2px solid',
  borderColor: 'Crimson',
  color: 'white',
  borderRadius: '8px',
  fontSize: '1.8rem',
  fontFamily: 'El Messiri',
  cursor: 'pointer',
  transition: 'color ease 0.3s',
  marginTop: '7px',
  paddingRight: '.2rem',
  paddingTop: '.2rem',

  '@sm': {
    width: '20rem'
  },

  '.icon': {
    position: 'relative',
    top: '2px'
  },

  '&:hover': {
    color: 'Crimson',
  },

})