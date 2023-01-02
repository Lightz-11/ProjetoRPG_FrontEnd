import { styled } from '../../stitches.config';

export const Container = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  button: {

    border: '2px solid transparent',
    background: 'none',
    transition: '.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '.5rem',
    padding: '.2rem',

  },

  variants: {
    position: {
      relative: {
        position: 'relative',
        top: '-9rem',
        right: '2rem'
      }
    }
  }


})

export const Button = styled('button', {

  background: 'none',
  transition: '.3s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '.5rem',
  padding: '.2rem',

  '&:hover': {
    border: '2px solid red',
    padding: '.2rem',
  },

})