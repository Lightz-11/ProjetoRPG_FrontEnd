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

export const BodyContainer = styled("div", {
  padding: "1rem",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gridColumnGap: "3rem",
  gridRowGap: "2rem",

  "@lg4": {
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  '@lg3': {
    gridTemplateColumns: "1fr 1fr",
  },
  '@md2': {
    gridTemplateColumns: '1fr'
  },

  variants: {
    nulo: {
      true: {
        padding: 0
      }
    }
  }

});

export const Footer = styled('div', {

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  padding: '2rem',
  color: 'white'

})

export const Row = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  gap: '5rem',

  '@md5': {
    gap: '3rem'
  }
})

export const Column = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '1rem',

  span: {
    fontWeight: 100,
    letterSpacing: '.1rem',
    fontFamily: 'Special Elite',
    fontSize: '2rem'
  },

  select: {
    width: '15rem',
    padding: '.5rem',
    background: 'none',
    color: 'white',
    fontWeight: 100,
    textTransform: 'capitalize'
  },

  '@md5': {
    select: {
      width: '12rem'
    }
  }

})

export const Option = styled('option', {
  color: 'white',
  background: 'rgb(20,20,20)',
  textTransform: 'capitalize'
})

export const Button = styled('button', {
  width: '10rem',
  padding: '.2rem 0',
  background: 'none',
  color: 'Purple',
  fontSize: '2.2rem',
  border: '2px solid purple',
  fontFamily: 'Crimson Text',

  '&:hover': {
    background: '#80008050',
  }
})