import { styled } from '../../../../../../stitches.config';

export const Container = styled('div', {

  border: '2px solid #ffffff90',
  borderRadius: '7px',
  minHeight: '50rem'

})

export const Header = styled('div', {

  padding: '.7rem 1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

  h1: {

    fontSize: '1.8rem',
    color: 'white',
    textTransform: 'capitalize'

  },

  button: {
    position: 'absolute',
    right: 7
  }

})

export const BodyContainerDados = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem 1rem 2rem 1rem',
  flexDirection: 'column',

  h4: {
    color: 'white',
    fontSize: '1.8rem',
    marginTop: '3rem',
    marginBottom: '2rem'
  },

  h5: {
    color: 'white',
    fontSize: '1.8rem',
    marginBottom: '2rem'
  }

})

export const FlexStatus = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '2rem',

  button: {

    background: 'none',
    borderRadius: '5px',
    border: '1px solid #ffffff90',
    color: 'white',
    fontWeight: 700,
    fontFamily: 'El Messiri',
    padding: '.4rem .8rem .2rem .8rem',
    transition: '.2s'

  },

  'button:hover': {
    background: '#ffffff20'
  }

})

export const Status = styled('div', {

  border: '1px solid white',
  color: 'white',
  padding: '.5rem 1rem',
  fontWeight: 700,

  label: {
    textTransform: 'capitalize',
  },

})

export const Pericia = styled('button', {

  background: 'none',
  border: '1px solid white',
  textTransform: 'capitalize',
  color: 'white',
  padding: '.5rem 1rem',
  fontWeight: 700,

  '&:hover': {
    cursor: 'pointer',
  },

  label: {
    textTransform: 'capitalize',
  },

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
    fontSize: '2rem',
    marginBottom: '-1rem',
    marginTop: '1rem'
  },

})

export const BodyContainerStatus = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  padding: '1rem',
  flexDirection: 'column',

  h3: {
    color: 'white',
    fontSize: '2rem',
    marginBottom: '-1.5rem',
    marginTop: '.5rem'
  },

  h4: {
    color: 'white',
    fontSize: '1.8rem',
    marginTop: '.5rem',
    marginBottom: '-1rem'
  }

})

export const Card = styled('div', {

  width: '100%',
  minWidth: '10rem',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  border: '1px solid white',
  padding: '.5rem',
  gap: '.5rem',
  flexDirection: 'column',

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