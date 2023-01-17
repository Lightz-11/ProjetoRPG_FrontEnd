import { styled } from "../../../../../stitches.config"

export const Container = styled('div', {

  borderRadius: '1.2rem',
  width: '65rem',
  backgroundColor: 'rgb(27,27,27)',
  boxShadow: 'rgba(255, 255, 255, 0.45) 0rem 0.5rem 1.5rem',
  padding: '3.5rem 2.5rem',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',

  '@sm': {
    width: '50rem'
  },

  '@sm2': {
    width: '38rem'
  },

  '@md5': {
    width: '30rem'
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
  marginBottom: '1rem',
  fontFamily: 'Arvo'
})

export const Main = styled('div', {
  display: 'flex',
  marginTop: '2rem',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  gridTemplateColumns: '1fr 1fr 1fr',
  columnGap: '5rem',

  '@sm': {
    gap: '2rem'
  }
})

export const Button = styled('button', {
  padding: '.5rem 2rem',
  fontSize: '2.2rem',
  background: 'none',
  fontFamily: 'Crimson Text',

  variants: {
    color: {
      crimson: {
        color: 'crimson',
        border: '2px solid crimson',

        '&:hover': {
          background: '#dc143c50',
        }
      },
      blue: {
        color: '#0032ba',
        border: '2px solid #0032ba',

        '&:hover': {
          background: '#0032ba50',
        }
      },
      green: {
        color: '#007d3e',
        border: '2px solid #007d3e',

        '&:hover': {
          background: '#007d3e50',
        }
      }
    }
  }
})