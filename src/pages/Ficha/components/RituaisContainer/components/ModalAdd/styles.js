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
    marginBottom: '2rem',
    fontSize: '3rem',
    color: '#a151b4',
  },

})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Arvo'
})

export const Hr = styled('hr', {

  '@sm': {
    margin: '1rem -2.5rem 0 -2.5rem'
  }

})

export const HrFooter = styled('hr', {

  borderColor: 'transparent',

  '@sm': {
    borderColor: 'white',
    margin: '0 -2.5rem'
  }

})

export const Main = styled('div', {

  '@sm': {

    overflowY: 'auto',
    padding: '0 2rem 4rem 1rem',

  },


  hr: {
    marginTop: '1rem',
  },

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
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'

})

export const Footer = styled('div', {
  marginTop: '3rem',

  '@sm': {
    marginTop: '1rem',
    marginBottom: '-2.5rem'
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