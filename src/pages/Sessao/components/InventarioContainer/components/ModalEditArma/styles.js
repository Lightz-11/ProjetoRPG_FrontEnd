import { styled } from "../../../../../../stitches.config"

export const Container = styled('div', {

  width: '65rem',
  height: '110rem',
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
    marginTop: '1rem',
  },

})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Arvo'
})

export const Main = styled('div', {
  height: '80rem'
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
  flexDirection: 'column',
  gap: '1rem',
  width: '100%',

})

export const Footer = styled('div', {
  top: '12rem',
  position: 'relative',
  alignItems: 'stretch',
  justifyContent: 'center'
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
  width: '15rem',
  height: '3rem',
  background: 'none',
  border: '2px solid',
  borderColor: 'Crimson',
  color: 'white',
  borderRadius: '8px',
  fontSize: '1.8rem',
  cursor: 'pointer',
  paddingRight: '1px',
  transition: 'color ease 0.3s',
  fontFamily: 'El Messeri',

  '.icon': {
    position: 'relative',
    top: '6.5%'
  },

  '&:hover': {
    color: 'Crimson',
  },

})