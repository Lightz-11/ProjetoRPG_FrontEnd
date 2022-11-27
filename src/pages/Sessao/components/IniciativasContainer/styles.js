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
  paddingRight: '2rem'
})

export const TH2 = styled('th', {
  paddingRight: '3rem'
})

export const TH3 = styled('th', {
  paddingRight: '4rem'
})

export const TH4 = styled('th', {
  paddingRight: '2rem'
})

export const TH5 = styled('th', {
  paddingRight: '4rem'
})

export const TH6 = styled('th', {
})