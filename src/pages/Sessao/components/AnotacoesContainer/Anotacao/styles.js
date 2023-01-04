import { styled } from '../../../../../stitches.config';

export const Container = styled('div', {

  display: 'flex',
  flexDirection: 'column',
  marginTop: '1rem',
  alignItems: 'center',
  marginBottom: '1rem',

  div: {
    display: 'flex',
    flexDirection: 'row',
    width: '98%',
    padding: '0 .5rem',
    gap: '.8rem',
    marginBottom: '1rem'
  },

  input: {

    background: 'none',
    color: 'white',
    width: '97%',
    border: 'none',
    outline: '2px solid #ffffff90',
    borderRadius: '5px',
    padding: '.5rem'

  },

  textarea: {

    width: '98%',
    background: 'none',
    resize: 'vertical',
    minHeight: '25rem',
    border: 'none',
    borderRadius: '5px',
    outline: '2px solid #ffffff90',
    padding: '.5rem',
    color: 'white',
    fontFamily: 'arial'

  }

})