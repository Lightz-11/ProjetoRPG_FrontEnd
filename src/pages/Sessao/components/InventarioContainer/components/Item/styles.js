import { styled, keyframes } from '../../../../../../stitches.config';

export const Container = styled('div', {
  border: '2px solid purple',
  display: 'flex',
  flexDirection: 'column'
})

export const Header = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '0.5rem 1rem',

  div: {
    width: '34px',
  },

  h1: {
    color: 'purple',
    fontSize: '3rem',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontFamily: 'Permanent Marker',
    fontWeight: 100,
    letterSpacing: '.1rem'
  }

})

export const Main = styled('div', {

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  flex: '1',
  padding: '1rem 0'

})

export const MainTop = styled('div', {

  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',

  '@sm5': {
    gap: '1.5rem',
  },

  span: {
    color: 'white',
    width: '45%',
    textAlign: 'center',
    padding: '.2rem 0.5rem 0rem 0.5rem',
    border: '1px solid #ffffff90',
    fontFamily: 'El Messiri'
  }

})

export const MainBottom = styled('div', {

  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  gap: '1rem'

})

export const Span = styled('span', {

  height: '10rem',
  wordBreak: 'break-word',
  overflowY: 'auto',
  width: '95%',
  background: 'none',
  border: 'none',
  outline: '1px solid #ffffff90',
  color: 'white',
  fontFamily: 'arial',
  padding: '0.5rem 1rem',
  fontFamily: 'El Messiri'

})

export const ButtonIcon = styled('button', {

  border: '2px solid transparent',
  background: 'none',
  transition: '.3s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '.5rem',
  padding: '.2rem',
  position: 'relative',
  margin: '0',

  variants: {
    color: {
      green: {
        '&:hover': {
          border: '2px solid #42bb4d',
        },
      },
      aqua: {
        '&:hover': {
          border: '2px solid aqua',
        },
      }
    }
  },

  defaultVariants: {
    color: 'green'
  }

})

export const ParteImg = styled('div', {
  overflowY: 'auto',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  flex: 1,

  img: {
    objectFit: 'contain'
  }
})

export const ParteImgModal = styled('div', {
  height: '95vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',

  img: {
    objectFit: 'contain'
  }
})

const scaleUpImgModal = keyframes({
  '0%': {
    width: '20%',
    opacity: 0
  },

  '100%': {
    width: '100%',
    opacity: 1
  },
});

export const ImgModal = styled('img', {

  animation: `${scaleUpImgModal} 300ms`,
  width: '100%'

})
