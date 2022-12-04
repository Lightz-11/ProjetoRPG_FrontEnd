import { styled } from "../../../../../../stitches.config"

export const Container = styled('div', {

  width: '65rem',
  height: '20rem',
  borderRadius: '1.2rem',
  backgroundColor: 'rgb(27,27,27)',
  boxShadow: 'rgba(255, 255, 255, 0.45) 0rem 0.5rem 1.5rem',
  padding: '3.5rem 2.5rem',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',

  '@sm': {
    width: '45rem'
  },

  h1: {
    display: 'inline-block',
    marginBottom: '2rem',
    fontSize: '3rem',
    color: '#a151b4',
  },

  hr: {
    marginBottom: '1rem'
  },

})

export const CloseButton = styled('button', {

  fontSize: '2.6rem',
  border: 'none',
  background: 'none',
  color: 'white',
  fontWeight: 100,

})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  marginBottom: '1rem'
})

export const Main = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '1.6rem',
  gap: '10rem',
})

export const Button = styled('button', {
  width: '20rem',
  padding: '1rem',
  fontSize: '2rem',
  background: 'none',

  variants: {
    color: {
      crimson: {
        color: 'crimson',
        border: '2px solid crimson',

        '&:hover': {
          background: '#dc143c50',
        }
      },
      purple: {
        color: 'Purple',
        border: '2px solid purple',

        '&:hover': {
          background: '#80008050',
        }
      }
    }
  }
})