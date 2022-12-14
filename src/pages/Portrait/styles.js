import { styled } from '../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  height: '100vh',
  background: 'transparent',
  overflowY: 'hidden',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '3rem'

})

export const Main = styled('main', {
  position: 'relative',

  h1: {
    fontSize: '15rem',
    fontFamily: 'Special Elite',
    color: '#da3141',
    fontWeight: 100,
    rotate: '-10deg',
    textShadow: '0 0 20px',
    zIndex: 3
  },

  h2: {
    fontSize: '15rem',
    fontFamily: 'Special Elite',
    fontWeight: 100,
    color: '#5e97e5',
    rotate: '-10deg',
    textShadow: '0 0 20px',
    zIndex: 3
  },

  h3: {
    fontSize: '14rem',
    fontFamily: 'Special Elite',
    position: 'absolute',
    fontWeight: 100,
    bottom: '8rem',
    left: '11rem',
    color: '#fff000',
    rotate: '-5deg',
    textShadow: '0 0 20px',
    zIndex: 3
  },

  h4: {
    fontSize: '18rem',
    fontFamily: 'IM Fell English SC',
    color: '#ffffff',
    fontWeight: 100,
    rotate: '-10deg',
    position: 'relative',
    right: '4rem',
    lineHeight: '17rem',
    textTransform: 'capitalize',
    textShadow: '#60eeff 0 0 20px',
    zIndex: 3
  },

})

export const Status = styled('div', {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  left: '90%',
  top: '50%',
  transform: 'translateY(-50%)'
})

export const PortraitImg = styled('img', {

  position: 'absolute',
  width: '750px',
  borderRadius: '700px',
  top: '-3rem',
  left: '50%',
  transform: 'translateX(-50%)',
  transition: '1s',

  variants: {
    inconsciente: {
      true: {
        filter: 'brightness(0)'
      }
    }
  }

})

export const Dado = styled('div', {
  position: 'absolute',
  left: '80rem',
  bottom: '-18rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'ease 2s',

  svg: {
    filter: 'drop-shadow(aqua 0 0 10px)'
  },

  span: {
    color: '#ffffff',
    textShadow: '#ff0000 0 0 15px',
    fontFamily: 'Special Elite',
    fontWeight: 700,
    fontSize: '10rem',
    top: '5rem',
    position: 'absolute',
    zIndex: 3
  },

  variants: {
    active: {
      true: {
        bottom: '10rem',
      }
    }
  }
})