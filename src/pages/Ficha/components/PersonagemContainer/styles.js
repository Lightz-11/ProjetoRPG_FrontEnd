import { styled } from '../../../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  border: "2px solid #ffffff75",
  marginBottom: "2rem",
  borderRadius: "0.5rem",

})

export const Header = styled('div', {

  width: '100%',
  height: '43px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  h1: {
    textAlign: "center",
    color: "white",
    fontSize: "2rem",
    fontFamily: 'Special Elite',
    letterSpacing: '.1rem',
    paddingTop: '.3rem'
  },

})

export const Select = styled('div', {

  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  flexWrap: 'wrap'

})

export const Main = styled('div', {

  display: 'flex',
  alignItems: 'left',
  flexDirection: 'column',
  padding: '2rem',
  minHeight: '563px',

  span: {
    marginBottom: '-3.5rem',
    fontSize: '2.3rem',
    color: 'white',
    fontFamily: 'El Messiri'
  },

  textarea: {
    marginBottom: '3rem'
  },

  variants: {
    nulo: {
      true: {
        padding: 0
      }
    }
  }

})

export const Button = styled('button', {

  fontSize: '1.8rem',
  background: 'none',
  border: '2px solid transparent',
  color: 'white',
  padding: '.7rem 1rem .4rem 1rem',
  letterSpacing: '1px',
  fontFamily: 'Special Elite',
  fontWeight: 700,
  borderRadius: '7px',
  transition: '.3s',

  '&:hover': {
    border: '2px solid white'
  },

  variants: {

    active: {
      true: {
        border: '2px solid purple',
        cursor: 'default',

        '&:hover': {
          border: '2px solid purple'
        },
      }
    }

  }

})