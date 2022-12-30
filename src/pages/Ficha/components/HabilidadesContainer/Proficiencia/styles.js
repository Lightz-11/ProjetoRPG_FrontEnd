import { styled } from '../../../../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  border: '1px solid white',
  borderRadius: '7px',
  padding: '.5rem 1rem',
  justifyContent: 'space-between',

  h1: {
    fontSize: '2.2rem',
    fontFamily: 'El Messiri',
    color: 'white',
  },

})

export const Buttons = styled('div', {

  display: 'flex',
  gap: '1rem'

})

export const Button = styled('button', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: 'none',
  border: '2px solid transparent',
  borderRadius: '5px',
  padding: '.2rem',
  transition: '.3s',

  '&:hover': {
    border: '2px solid red'
  }


})