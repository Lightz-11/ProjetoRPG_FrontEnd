import { styled } from '../../../../../../stitches.config';

export const Container = styled('div', {

  border: '2px solid #ffffff90',
  borderRadius: '7px',


})

export const Header = styled('div', {

  padding: '.7rem 1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  h1: {

    fontSize: '1.8rem',
    color: 'white',
    textTransform: 'capitalize'

  }

})

export const Select = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '1rem',
  padding: '.5rem 1rem'

})

export const BodyContainerPrincipal = styled('div', {

  display: 'grid',
  padding: '1rem',
  gap: '1rem',
  alignContent: 'center',
  justifyItems: 'center',
  gridTemplateColumns: '1fr 1fr'

})

export const BodyContainerOutros = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  padding: '1rem',
  flexDirection: 'column',

  h2: {
    color: 'white',
    marginBottom: '-1rem',
    marginTop: '1rem'
  },

  h3: {
    color: 'white',
    fontSize: '2rem',
    marginBottom: '-1.5rem',
    marginTop: '.5rem'
  }

})

export const Card = styled('div', {

  width: '100%',
  minWidth: '15rem',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  border: '1px solid white',
  padding: '.5rem',
  gap: '.5rem',
  flexDirection: 'column',

  '@md5': {
    minWidth: '10rem'
  },

  label: {
    color: '#ffffff90'
  },

  span: {
    color: 'white',
    fontWeight: 700,
    paddingLeft: '1rem',
    textTransform: 'capitalize'
  }

})

export const Button = styled('button', {

  background: 'none',
  padding: '.3rem .5rem',
  fontSize: '1.6rem',
  border: '2px solid transparent',
  borderRadius: '5px',
  transition: '.3s',
  color: 'white',

  '&:hover': {
    border: '2px solid purple'
  },

  variants: {
    active: {
      true: {
        border: '2px solid purple',
        cursor: 'default'
      }
    }
  }

})

export const TextArea = styled('textarea', {

  width: '100%',
  border: '2px solid white',
  background: 'none',
  minHeight: '7rem',
  padding: '.5rem 1rem',
  color: 'white',
  resize: 'vertical',
  fontFamily: 'El Messiri'

})