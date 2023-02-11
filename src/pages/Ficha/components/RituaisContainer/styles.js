import { styled, keyframes } from '../../../../stitches.config';

export const Container = styled("div", {
  border: "2px solid #ffffff75",
  marginBottom: "2rem",
  borderRadius: "0.5rem",
  width: "100%",
});

export const HeaderContainer = styled("div", {
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

const Abrir = keyframes({
  '0%': {
    height: 0,
  },
  '100%': {
    height: '652px'
  },
});

const Fechar = keyframes({
  '0%': {
    height: '652px'
  },
  '100%': {
    height: 0,
  },
});

const Abrir2 = keyframes({
  '0%': {
    height: 0,
  },
  '100%': {
    height: '822px'
  },
});

const Fechar2 = keyframes({
  '0%': {
    height: '822px'
  },
  '100%': {
    height: 0,
  },
});

const Abrir3 = keyframes({
  '0%': {
    height: 0,
  },
  '100%': {
    height: '1033px'
  },
});

const Fechar3 = keyframes({
  '0%': {
    height: '1033px'
  },
  '100%': {
    height: 0,
  },
});

const Abrir4 = keyframes({
  '0%': {
    height: 0,
  },
  '100%': {
    height: '1143px'
  },
});

const Fechar4 = keyframes({
  '0%': {
    height: '1143px'
  },
  '100%': {
    height: 0,
  },
});

export const BodyContainer = styled("div", {

  display: 'grid',
  gridTemplateColumns: '1fr',
  padding: '0rem 2rem',
  gap: '2rem',
  overflow: 'hidden',

  variants: {
    nulo: {
      true: {
        animation: `${Abrir} 1s`,

        '@lg2': {
          animation: `${Abrir2} 1s`,
        },

      },
      false: {
        animation: `${Fechar} 1s`,
        animationFillMode: 'forwards',

        '@lg2': {
          animation: `${Fechar2} 1s`,
          animationFillMode: 'forwards',
        },

      }
    }
  }

});

export const Select = styled('div', {

  padding: '1rem 2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
  flexWrap: 'wrap',
  gap: '2rem',

  variants: {
    nulo: {
      true: {
        padding: 0
      }
    }
  }

})

export const Button = styled('button', {

  fontSize: '1.8rem',
  textTransform: 'capitalize',
  padding: '.7rem 1.5rem',
  background: 'none',
  borderRadius: '5px',

  variants: {

    elemento: {
      Conhecimento: {
        color: 'Gold',
        border: '1px solid Gold',

        '&:hover': {
          background: '#ffbb004b'
        },

      },
      Morte: {
        color: '#424242ff',
        border: '1px solid #424242ff',

        '&:hover': {
          background: '#00000040'
        }

      },
      Medo: {
        color: 'white',
        border: '1px solid white',

        '&:hover': {
          background: '#ffffff40'
        }

      },
      Sangue: {
        color: 'Red',
        border: '1px solid Red',

        '&:hover': {
          background: '#ff000046'
        }

      },
      Energia: {
        color: 'Purple',
        border: '1px solid Purple',

        '&:hover': {
          background: '#67009e62'
        }

      }
    },

    active: {
      Conhecimento: {

        background: '#ffbb004b'

      },
      Morte: {

        background: '#00000040',

      },
      Medo: {

        background: '#ffffff40'


      },
      Sangue: {

        background: '#ff000046'


      },
      Energia: {

        background: '#67009e62'

      }
    }

  }


})