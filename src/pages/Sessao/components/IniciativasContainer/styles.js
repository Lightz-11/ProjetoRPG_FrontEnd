import { styled } from '../../../../stitches.config';

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

export const BodyContainer = styled("div", {
  padding: "1rem",
});

export const Table = styled('table', {
  width: '100%',
  borderSpacing: '0 1rem',
  color: 'white',

  th: {
    borderBottom: '1px solid white',
    textAlign: 'left',
    paddingBottom: '2rem',
    fontWeight: '700'
  }
})

export const TH1 = styled('th', {
  paddingRight: '0.5rem'
})

export const TH2 = styled('th', {
  paddingRight: '1rem'
})

export const TH3 = styled('th', {
  paddingRight: '17rem'
})

export const TH4 = styled('th', {
  paddingRight: '0rem'
})

export const TH5 = styled('th', {
  paddingRight: '4rem'
})

export const TH6 = styled('th', {
})

export const Footer = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10rem',
  margin: '0.5rem 0',

})

export const Button = styled('button', {

  background: 'none',
  padding: '0.5rem 1rem',
  fontSize: '1.9rem',
  transition: '0.3s',

  '&:hover': {
    border: '1px solid #ffffff',
    opacity: '0.5'
  },

  variants: {
    color: {
      aqua: {
        color: '#03d9ffff',
        border: '1px solid #03d9ffff',
      },
      yellow: {
        color: 'Yellow',
        border: '1px solid Yellow',
      }
    }
  },

  defaultVariants: {
    color: 'aqua'
  }

})