import { styled } from '../../../../stitches.config';

export const Container = styled("div", {
  border: "2px solid #ffffff75",
  marginBottom: "2rem",
  borderRadius: "0.5rem",
  width: "100%",
});

export const HeaderContainer = styled("div", {
  minHeight: '43px',
  padding: '0rem 1rem',
  position: 'relative',
  display: "flex",
  justifyContent: "center",

  gap: '1rem',
  alignItems: "center",
  position: "relative",
  flexWrap: 'wrap',

  '@md2': {
    flexDirection: 'column',
    paddingTop: '1rem',

    button: {
      top: '6rem'
    },
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

export const Button = styled('button', {

  background: 'none',
  border: '2px solid transparent',
  padding: '.7rem 1rem .4rem 1rem',
  fontWeight: 700,
  textAlign: "center",
  color: "white",
  fontSize: "2rem",
  fontFamily: 'Special Elite',
  letterSpacing: '.1rem',
  transition: '.3s',

  '&:hover': {
    border: '2px solid white'
  },

  variants: {
    active: {
      true: {
        border: '2px solid purple',

        '&:hover': {
          border: '2px solid purple'
        }
      },
    }
  }

})

export const BodyContainer = styled("div", {

  display: 'flex',
  alignItems: 'left',
  height: 'calc(100% - 43px)',
  maxHeight: '21.4rem',
  overflowY: 'auto',
  flexDirection: 'column',
  padding: '3rem',
  gap: '3rem',

  '@md2': {
    height: 'calc(100% - 145px)'
  }

});