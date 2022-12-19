import { styled } from '../../../../../../../stitches.config';

export const Container = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  marginBottom: '1.5rem'
})

export const Botoes = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '.5rem 2rem',
  fontFamily: 'Special Elite',

  span: {
    color: 'white',
    fontSize: '1.8rem',
    marginBottom: '-.5rem',
    fontWeight: 100
  },

  button: {
    padding: '.9rem .8rem',
    fontFamily: 'Special Elite',
    margin: '0rem .5rem',
    height: '3.5rem',
    background: 'none',
    display: 'flex',
    justifyContent: 'center',
    gap: '.5rem',
    transition: '.3s',
    color: 'White',
    border: '1px solid transparent',
    fontSize: '1.8rem',
    borderRadius: '7px',
    fontWeight: 100,
  },

  'button:hover': {
    border: '1px solid white'
  },

  '@md2': {
    padding: '0rem',
    button: {
      margin: '0rem .2rem',
    }
  }
})

export const Esquerda = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    marginLeft: '-.4rem'
  }
})

export const Direita = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    marginRight: '-.4rem'
  }
})


export const BarrinhaDiv = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ProgressBar = styled('div', {

  width: '95%',
  height: '2rem',
  borderRadius: '10px',
  backgroundColor: '#ffffff14',
  display: 'flex',

})

export const Progress = styled('div', {

  height: '2rem',
  borderRadius: '10px',
  display: 'flex',
  transition: '0.3s',
  backgroundColor: '#00c164',


})