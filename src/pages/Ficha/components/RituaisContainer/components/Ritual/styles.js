import { styled, keyframes } from '../../../../../../stitches.config';

export const Container = styled('div', {

  fontFamily: 'El Messiri',
  position: 'relative',

  hr: {
    color: '#ffffff90'
  },

  variants: {

    elemento: {
      Conhecimento: {
        border: '2px solid Gold'
      },
      Morte: {
        border: '2px solid #424242ff',
      },
      Medo: {
        border: '2px solid white'
      },
      Sangue: {
        border: '2px solid Red'
      },
      Energia: {
        border: '2px solid Purple'
      }
    }

  }

})

export const Header = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem 2rem',
  gap: '2rem',

  h1: {
    fontSize: '2.5rem',
    textTransform: 'capitalize'
  },

  variants: {

    elemento: {
      Conhecimento: {
        color: 'Gold'
      },
      Morte: {
        color: '#424242ff',
      },
      Medo: {
        color: 'white'
      },
      Sangue: {
        color: 'Red'
      },
      Energia: {
        color: 'Purple'
      }
    }

  }

})

export const Body = styled('div', {

  width: '100%',
  display: 'flex',
  padding: '2rem',
  alignItems: 'flex-start',
  gap: '2rem',
  position: 'relative',

  img: {
    width: '200px',
    border: '2px solid white',
    borderRadius: '30px'
  },

  '@md': {
    flexDirection: 'column'
  },

})

export const Botoes = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  marginBottom: '3rem',
  paddingLeft: '22rem',

  button: {
    width: '20rem',
    padding: '.5rem',
    fontFamily: 'El Messiri',
    fontSize: '2.2rem',
    background: 'none',
    border: '2px solid #ffffff90',
    color: 'white',
    transition: 'background .3s'
  },

  'button:hover': {
    background: '#ffffff20'
  },

  '@lg3': {
    button: {
      width: '15rem'
    }
  },

  '@lg2': {
    button: {
      width: '13rem'
    }
  },

  '@md': {
    padding: '0rem 2rem'
  },

  '@sm2': {
    flexDirection: 'column',
    gap: '2rem',

    button: {
      width: '80%'
    }
  }

})

export const Img = styled('div', {

  "@md": {

    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  }

})

export const Main = styled('div', {

  width: 'calc(100% - 200px)',
  padding: '.5rem 1rem',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '3rem',
  alignContent: 'center',

  '@md': {
    width: '100%',
    gap: '3rem'
  },

  '@md2': {
    gridTemplateColumns: '1fr 1fr',
  },

  '@sm2': {
    gridTemplateColumns: '1fr'
  }

})

export const Card = styled('div', {

  border: '2px solid white',
  height: '8rem',
  minWidth: '5rem',
  color: '#ffffff',
  borderRadius: '5px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',

  h2: {
    padding: '.5rem 0rem 0rem 1rem',
    fontSize: '1.8rem'
  },

  hr: {
    marginBottom: '.7rem'
  }

})

export const Span = styled('span', {
  padding: '1rem 2rem',
  fontSize: '1.8rem',
  textTransform: 'capitalize'
})

export const Footer = styled('div', {

  width: '100%',
  display: 'grid',
  gridTemplateColumns: '0.45fr 0.55fr',
  padding: '2rem',
  paddingTop: '0rem',
  gap: '4rem',

  '@lg2': {
    gridTemplateColumns: '1fr',
    gap: '2rem'
  }

})

export const Desc = styled('span', {

  border: '2px solid white',
  minHeight: '15rem',
  fontSize: '1.8rem',
  overflowY: 'auto',
  padding: '1rem 2rem',
  width: '100%',
  color: '#ffffff'

})

export const Buttons = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem'

})