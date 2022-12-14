import { styled } from '../../../../../../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end'
})

export const Body = styled('div', {
  display: 'flex',

})


export const ButtonEdit = styled('button', {

  border: '2px solid transparent',
  background: 'none',
  transition: '.3s',
  padding: '.2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '.5rem',
  marginBottom: '.2rem',


  '&:hover': {
    border: '2px solid #42bb4d',
  },

})

export const Button = styled('button', {

  h1: {
    fontSize: '2rem',
    marginTop: '.5rem',
    color: 'white',
    fontWeight: 100,
    textTransform: 'capitalize',
    fontFamily: 'Rye'
  },

  background: 'none',
  padding: '.8rem 1rem 0.5rem 1rem',
  border: '2px solid transparent',
  borderRadius: '1rem',
  transition: '.3s',

  variants: {
    isDano: {
      true: {
        color: 'crimson',

        h1: {
          textShadow: '2px 2px 2px crimson'
        },

        '&:hover': {
          border: '2px solid crimson',
        },
      },
      false: {
        color: 'Purple',

        h1: {
          textShadow: '2px 2px 1px #854cff'
        },

        '&:hover': {
          border: '2px solid Purple',
        },
      }
    }
  }

})
