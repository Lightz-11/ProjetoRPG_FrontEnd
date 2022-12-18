import { styled, keyframes } from '../../../../../../stitches.config';

export const Container = styled('div', {
  border: '2px solid crimson',
})

export const Header = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.5rem 1rem',

  h1: {
    color: 'crimson',
    fontSize: '3rem',
    wordBreak: 'break-word',
    textTransform: 'capitalize',
    fontFamily: 'Permanent Marker',
    fontWeight: 100,
    letterSpacing: '.2rem'
  }

})

export const Main = styled('div', {

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  justifyContent: 'center',
  padding: '1rem 0'

})

export const MainTop = styled('div', {

  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',

  span: {
    color: 'white',
    width: '46.5%',
    textAlign: 'center',
    padding: '0.2rem .5rem 0rem .5rem',
    border: '1px solid #ffffff90',
    fontFamily: 'El Messiri'
  }

})

export const MainBottom = styled('div', {

  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.5rem'

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
  fontFamily: 'El Messiri',
  padding: '.5rem 1rem',

})

export const ButtonIcon = styled('button', {

  border: '2px solid transparent',
  background: 'none',
  transition: '.3s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '.5rem',

  variants: {
    color: {
      green: {
        padding: '.2rem',
        '&:hover': {
          border: '2px solid #42bb4d',
        },
      },
      aqua: {
        padding: '.2rem .4rem',
        '&:hover': {
          border: '2px solid aqua',
          padding: '.2rem .4rem'
        },
      }
    }
  },

  defaultVariants: {
    color: 'green'
  }

})

export const Infos = styled('div', {

  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',

  span: {
    marginLeft: '1.5rem',
    fontSize: '2.3rem',
    color: 'White',
    textTransform: 'capitalize',
    fontFamily: 'Markazi Text'
  },
})

export const DivInfos = styled('div', {

  width: '95%',
  border: '2px solid #ffffff90',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'left'

})

export const Icon = styled('div', {
  display: 'flex',
  width: '4.5rem',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '.5rem',
  borderRight: '2px solid #ffffff90'
})

export const Dados = styled('div', {
  display: 'flex',
  padding: '0 1rem',
  gap: '1rem',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Button = styled('button', {
  width: '100%',
  height: '3rem',
  background: 'none',
  padding: '0 1rem',
  whiteSpace: 'nowrap',
  fontSize: '1.6rem',
  fontFamily: 'Special Elite',

  strong: {
    fontFamily: 'Cinzel Decorative',
    position: 'relative',
    bottom: '.1rem',
    fontSize: '1.8rem',
  },

  variants: {
    color: {
      purple: {
        color: 'purple',
        border: '2px solid #800080',

        '&:hover': {
          background: '#80008050',
        }
      },
      crimson: {
        color: 'crimson',
        border: '2px solid crimson',

        '&:hover': {
          background: '#dc143c50',
        }
      },
      red: {
        color: '#ff0033',
        border: '2px solid #ff0033',

        '&:hover': {
          background: '#ff003350',
        }
      }
    }
  }
})

export const Danos = styled('div', {

  width: '100%',
  gap: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

})

export const ContainerDadoRolado = styled('div', {
  paddingTop: '1rem',
  width: '90%'
})


export const ParteImg = styled('div', {
  height: '30rem',
  overflowY: 'auto',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',

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

const scaleUp = keyframes({
  '0%': {
    scale: '20%',
    opacity: 0
  },
  '100%': {
    scale: '100%',
    opacity: 1
  },
});

export const ImgModal = styled('img', {

  animation: `${scaleUp} 300ms`,
  maxWidth: '100%'

})
