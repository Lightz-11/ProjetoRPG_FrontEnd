import { styled } from '../../../../../stitches.config';

export const Container = styled('div', {

  minWidth: '2rem',
  borderRadius: '1.2rem',
  border: '2px solid #ffffff90',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  padding: '1rem 0rem 1rem 3rem',
  gap: '2rem'

})

export const Header = styled('div', {

  width: '25%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '0 2rem',
  gap: '1rem',

  h1: {
    color: '#ffffff90',
    width: 'min-content',
    fontSize: '2.5rem',
    textAlign: 'left',
    fontFamily: 'Arvo'
  },

  img: {
    width: '100px',
    border: '2px solid white',
    borderRadius: '10rem'
  }

})

export const Main = styled('div', {

  width: '75%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column'
})

export const Body = styled('div', {

  display: 'flex',
  overflow: 'hidden',
  justifyContent: 'left',
  alignItems: 'flex-end',
  rowGap: '1rem',
  paddingLeft: '2rem',
  color: 'white',
  marginRight: '2rem',
  paddingTop: '1rem',
  textOverflow: 'ellipsis',

  flexWrap: 'wrap',

  h1: {
    fontSize: '2rem',
    fontWeight: 100,
    marginRight: '1rem',
    width: 'min-content',
    textAlign: 'left',
    textTransform: 'capitalize',
    fontFamily: 'Rye'
  },

  span: {
    fontSize: '2rem',
    fontFamily: 'Special Elite',
    whiteSpace: 'nowrap'
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
  height: 'auto',
  flexDirection: 'column',
  textAlign: 'left',
  paddingLeft: '2rem',
  paddingBottom: '1rem',
  paddingTop: '2rem',
  color: '#e7e7e7b9',
  fontFamily: 'Special Elite',
  gap: '.5rem',

  span: {
    fontSize: '1.8rem'
  }

})