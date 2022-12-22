import { styled, keyframes } from '../../../../stitches.config';
import { Link } from 'react-router-dom';

export const Container = styled("div", {
  border: "2px solid #ffffff75",
  marginBottom: "2rem",
  borderRadius: "0.5rem",
  width: "100%",
});

export const Header = styled("div", {
  padding: "1rem 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",

  h1: {
    textAlign: "center",
    color: "white",
    fontSize: "2rem",
    fontFamily: 'Special Elite',
    letterSpacing: '.1rem',
    paddingTop: '.3rem'
  },

  button: {
    background: "none",
    border: "none",
    color: "Green",
    position: "absolute",
    right: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  svg: {
    transition: "0.3s",
  },

  "button:hover": {
    svg: {
      filter: "brightness(2)",
    },
  },
});

export const Body = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'

})

export const TopBody = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: '2rem',

  '@md5': {
    flexDirection: 'column-reverse',
    paddingTop: '3rem',
    gap: '3rem'
  }

})

export const Buttons = styled('div', {

  display: 'flex',
  width: '60%',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid #ffffff90',
  flexDirection: 'column',
  padding: '2rem 0',
  gap: '2rem',

  hr: {
    width: '100%'
  },

  h1: {
    fontSize: '2rem',
    color: 'white',
    margin: '-1rem',
    marginTop: '-.5rem',
    fontFamily: 'Special Elite',
    letterSpacing: '.1rem',
  },

  '@md5': {
    width: '90%'
  }

})

export const AreaPortrait = styled('div', {

  width: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

})

export const Portrait = styled(Link, {

  border: '2px solid white',
  marginLeft: '6rem',
  borderRadius: '20rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '220px',
  height: '220px',
  zIndex: 1,

  '@md2': {
    width: '150px',
    height: '150px'
  },

  '@md5': {
    width: '200px',
    height: '200px',
    marginLeft: '3rem'
  }

})

export const Img = styled('img', {

  objectFit: 'contain',
  zIndex: 0,
  cursor: 'pointer',
  borderRadius: '72rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '220px',
  height: '217px',
  transition: 'filter 1s',

  '@md2': {
    width: '150px',
    height: '147px'
  },

  '@md5': {
    width: '200px',
    height: '197px',
  },

  variants: {
    active: {
      true: {
        filter: 'brightness(0)',
      }
    }
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

export const ImgZoom = styled('img', {

  animation: `${scaleUp} 300ms`,
  objectFit: 'contain',
  border: '3px solid white',
  borderRadius: '72rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
  transition: '1s',

  variants: {
    active: {
      true: {
        filter: 'brightness(0)',
      }
    }
  }

})

export const BottomBody = styled('div', {

  display: 'flex',
  width: '100%',
  padding: '0rem 3rem',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  paddingBottom: '2rem',
  gap: '0rem',

  h1: {
    color: 'White',
    fontFamily: 'Special Elite',
    letterSpacing: '.2rem',
    fontWeight: 700,
    fontSize: '2rem',
    marginTop: '2rem',
    marginBottom: '.5rem',
    marginRight: '1rem'
  },

  h2: {
    color: 'White',
    fontWeight: 700,
    fontSize: '2rem',
    marginTop: '2rem',
    marginRight: '1rem',
    marginBottom: '1rem'
  }

})

export const Button = styled('button', {

  width: '90%',
  padding: '.5rem',
  background: 'none',
  transition: '.3s',
  border: '1px solid transparent',
  fontSize: '1.8rem',
  borderRadius: '7px',
  fontWeight: 700,

  '&:hover': {
    color: 'white'
  },

  variants: {

    active: {
      combatetrue: {
        border: '1px solid #ffff00',
        color: '#ffff00',
        background: '#ffff0050'
      },
      insanotrue: {
        border: '1px solid #00f2ff',
        color: 'aqua',
        background: '#00f2ff50'
      },
      inconscientetrue: {
        border: '1px solid #ff0000',
        color: '#ff0000',
        background: '#ff000050'
      },
      massivotrue: {
        border: '1px solid #ff5858',
        color: '#ff5858',
        background: '#ff585850'
      }
    },

    color: {
      aqua: {
        border: '1px solid #00f2ff',
        color: 'aqua',

        '&:hover': {
          background: '#00f2ff50'
        }
      },
      yellow: {
        border: '1px solid #ffff00',
        color: '#ffff00',

        '&:hover': {
          background: '#ffff0050'
        }
      },
      red: {
        border: '1px solid #ff5858',
        color: '#ff5858',

        '&:hover': {
          background: '#ff585850'
        }
      },
      red2: {
        border: '1px solid #ff0000',
        color: '#ff0000',

        '&:hover': {
          background: '#ff000050'
        }
      }
    }
  }

})

export const ContainerDeferes = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '1rem',
  gap: '2rem',
  flexWrap: 'wrap'
})

export const Deferes = styled('h3', {
  width: 'max-content',
  border: '1px solid white',
  padding: '1rem',
  textTransform: 'capitalize',
  fontSize: '1.6rem',
  color: 'White'
})
