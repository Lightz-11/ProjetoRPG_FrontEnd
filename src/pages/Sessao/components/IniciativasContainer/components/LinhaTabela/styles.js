import { styled } from '../../../../../../stitches.config';

export const Container = styled('tr', {

  width: '100%',

  td: {

    borderBottom: '1px solid #ffffff90',
    paddingBottom: '1rem',

    '&:last-child': {
      display: 'flex',
      gap: '0.5rem'
    },

  },

  input: {
    width: '100%',
    background: 'none',
    padding: '.3rem',
    border: 'none',
    outline: '1px solid #ffffff90',
    color: 'White'
  },

  "input[type=number]::-webkit-inner-spin-button": { 
    "-webkit-appearance": 'none',
  },

  "input[type=number]": { 
   "-moz-appearance": 'textfield',
   "appearance": 'textfield',

  }

})

export const TD1 = styled('td', {
  paddingRight: '0.6rem'
})

export const TD2 = styled('td', {
  paddingRight: '2rem'
})

export const TD3 = styled('td', {
  paddingRight: '3rem',

  '@md2': {
    paddingRight: '1rem'
  },

  input: {
    width: '100%',
  }
})

export const TD4 = styled('td', {
  paddingRight: '4rem',

  input: {
    width: '5rem'
  }

})

export const TD5 = styled('td', {
  paddingRight: '2rem',

  input: {
    width: '7rem'
  }
})

export const TD6 = styled('td', {
  
})