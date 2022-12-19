import { styled, keyframes } from '../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  height: '100vh',
  background: 'transparent',
  overflowY: 'hidden',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '3rem',

})

export const Main = styled('main', {
  position: 'relative',

  h1: {
    fontSize: '15rem',
    fontFamily: 'Special Elite',
    color: '#da3141',
    fontWeight: 100,
    textShadow: '0 0 20px',
    zIndex: 10
  },

  h2: {
    fontSize: '15rem',
    fontFamily: 'Special Elite',
    fontWeight: 100,
    color: '#5e97e5',
    textShadow: '0 0 20px',
    zIndex: 10
  },

  h3: {
    fontSize: '14rem',
    fontFamily: 'Special Elite',
    position: 'absolute',
    fontWeight: 100,
    bottom: '8rem',
    left: '11rem',
    color: '#ffee00ff',
    transform: 'rotate(-7deg)',
    textShadow: '#ffea00 0 0 15px, #ffa600 0 0 20px',
    zIndex: 10
  },

  h4: {
    fontSize: '18rem',
    fontFamily: 'IM Fell English SC',
    color: '#ffffff',
    fontWeight: 100,
    position: 'relative',
    right: '4rem',
    lineHeight: '17rem',
    textTransform: 'capitalize',
    textShadow: '#60eeff 0 0 20px',
    zIndex: 10
  },

})

const opacityUp = keyframes({
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 1
  },
});

const opacityDown = keyframes({
  '0%': {
    opacity: 1
  },
  '100%': {
    opacity: 0
  },
});

export const Municao = styled('div', {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  position: 'absolute',
  top: '8rem',
  left: '58rem',
  transform: 'rotate(-10deg)',
  zIndex: 10,

  img: {
    width: '100px',
    marginRight: '-2rem'
  },

  h5: {
    fontSize: '6rem',
    fontFamily: 'Special Elite',
    fontWeight: 100,
    color: '#00ff7b90',
    textShadow: '0 0 10px',
  },

  variants: {
    active: {
      true: {
        animation: `${opacityUp} .7s`,
      },
      false: {
        animation: `${opacityDown} 1s`,
        opacity: 0
      }
    }
  }
})

const opacityUp1 = keyframes({
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 1
  },
});

const opacityDown1 = keyframes({
  '0%': {
    opacity: 1
  },
  '100%': {
    opacity: 0
  },
});

const opacityUp2 = keyframes({
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 1
  },
});

const opacityDown2 = keyframes({
  '0%': {
    opacity: 1
  },
  '100%': {
    opacity: 0
  },
});

export const Status1 = styled('div', {

  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  left: '90%',
  zIndex: 10,
  top: '53%',
  transform: 'translateY(-50%) rotate(-10deg)',
  opacity: 0,

  variants: {
    combate: {
      true: {
        animation: `${opacityUp1} 1s`,
        animationDelay: '.3s',
        animationFillMode: 'forwards'
      },
      false: {
        animation: `${opacityDown1} .4s`,
      }
    }
  }
})

export const Status2 = styled('div', {

  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  left: '90%',
  top: '50%',
  zIndex: 10,
  transform: 'translateY(-50%) rotate(-10deg)',
  opacity: 0,

  variants: {
    combate: {
      true: {
        animation: `${opacityDown2} .4s`,
      },
      false: {
        animation: `${opacityUp2} 1s`,
        animationDelay: '.3s',
        animationFillMode: 'forwards'
      }
    }
  }
})

export const PortraitImg = styled('img', {

  position: 'absolute',
  width: '750px',
  height: '750px',
  borderRadius: '360px',
  zIndex: 4,
  top: '2rem',
  left: '50%',
  transform: 'translateX(-50%)',
  transition: 'filter 1s',

  variants: {
    inconsciente: {
      true: {
        filter: 'brightness(0)'
      }
    },

    animation: {
      true: {
        animation: `${opacityDown} .2s`,
        opacity: 0
      },
      false: {
        animation: `${opacityUp} .2s`,
        opacity: 1
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