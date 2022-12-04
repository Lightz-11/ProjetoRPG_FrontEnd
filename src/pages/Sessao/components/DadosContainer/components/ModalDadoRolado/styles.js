import { styled } from '../../../../../../stitches.config';

export const Container = styled('div', {

  minWidth: '30rem',
  borderRadius: '1.2rem',
  backgroundColor: 'rgb(27,27,27)',
  boxShadow: 'rgba(255, 255, 255, 0.45) 0rem 0.5rem 1.5rem',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',

})

export const Header = styled('div', {

  width: '100%',
  height: '5rem',
  borderRadius: '12px 12px 0px 0px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'rgb(20,20,20)',
  padding: '0 2rem',

  h1: {
    color: 'purple',
    fontSize: '2.2rem',
    textAlign: 'left'
  },

})

export const CloseButton = styled('button', {

  fontSize: '2rem',
  border: 'none',
  background: 'none',
  color: 'white',
  fontWeight: 100,
  top: '5%',

})

export const Main = styled('div', {

  display: 'flex',
  justifyContent: 'left',
  alignItems: 'baseline',
  paddingLeft: '2rem',
  color: 'white',
  marginRight: '2rem',
  paddingTop: '2rem',

  h1: {
    fontSize: '2.5rem',
    marginRight: '1rem',
    textTransform: 'capitalize'
  },

  span: {
    fontSize: '2.5rem',
    wordBreak: 'break-all'
  },

  variants: {
    isDano: {
      true: {
        h1: { color: 'Crimson' }
      },
      false: {
        h1: { color: 'purple' }
      }
    }
  }

})

export const Footer = styled('div', {

  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  textAlign: 'left',
  paddingLeft: '2rem',
  paddingBottom: '1rem',
  paddingTop: '2rem',
  color: '#e7e7e7b9',
  gap: '.5rem'

})