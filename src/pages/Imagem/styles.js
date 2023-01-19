import { styled } from '../../stitches.config';
import FundoImagem from '../../assets/img/FundoImagem.jpg'

export const Container = styled('div', {

  width: '100vw',
  overflow: 'hidden',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

})

export const FundoImg = styled('img', {

  width: '1920px',
  position: 'absolute',
  zIndex: -1,
  height: '1080px'

})

export const AllImg = styled('div', {

  width: 1920,
  height: 1080,
  display: 'flex',

  '@font-face': {
    src: "url('../../assets/fonts/MagicBrush.ttf') format('truetype')",
  },

  '@font-face': {
    src: "url('../../assets/fonts/GrapeNuts.ttf') format('truetype')",
  },

  '@font-face': {
    src: "url('../../assets/fonts/adrip1.ttf') format('truetype')",
  },

})

export const Header = styled('div', {

  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'left',

})

export const Column = styled('div', {

  padding: '7rem 5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
  flexDirection: 'column',

  h1: {

    color: 'white',
    fontFamily: 'Magic Brush',
    fontWeight: 100,
    fontSize: '10rem',
    whiteSpace: 'nowrap'

  },

  h2: {

    color: 'white',
    fontFamily: 'Grape Nuts',
    fontWeight: 100,
    fontSize: '8rem',
    marginBottom: '5rem'

  },

})

export const FundoNexDiv = styled('div', {

  marginTop: '10rem',
  position: 'relative',



})

export const Texto = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 20,
  gap: 5,

  h1: {
    color: 'Black',
    fontWeight: 100,
    fontSize: '10rem',
    fontFamily: 'Magic Brush'
  },

  h2: {
    color: 'Black',
    position: 'relative',
    top: 15,
    fontSize: '12rem',
    fontWeight: 100,
    fontFamily: 'a dripping marker'
  },

  variants: {
    length: {
      true: {
        left: 75
      },
      false: {
        left: 90
      }
    }
  }

})

export const PortraitImg = styled('img', {

  position: 'relative',
  right: '20rem',
  top: -20,
  opacity: 0.7,
  filter: 'saturate(150%)'

})