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

});

export const TopBody = styled('div', {

  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '1rem',
  gap: '2rem',

})

export const BottomBody = styled('div', {

  display: 'flex',
  flexDirection: 'column',
  marginTop: '1rem',
  alignItems: 'center',
  marginBottom: '1rem',

  div: {
    display: 'flex',
    flexDirection: 'row',
    width: '98%',
    padding: '0 .5rem',
    gap: '.8rem',
    marginBottom: '1rem'
  },

  input: {

    background: 'none',
    color: 'white',
    width: '97%',
    border: 'none',
    outline: '2px solid #ffffff90',
    borderRadius: '5px',
    padding: '.5rem'

  },

  textarea: {

    width: '98%',
    background: 'none',
    resize: 'vertical',
    maxHeight: '25rem',
    minHeight: '3.5rem',
    borderRadius: '5px',
    border: '2px solid #ffffff90',
    padding: '.5rem',
    color: 'white',
    fontFamily: 'arial'

  }

})

export const Button = styled('button', {

  border: '1px solid white',
  padding: '.5rem 1rem',
  background: 'none',
  color: '#88edffe7',
  transition: '0.3s',
  wordBreak: 'break-word',
  borderRadius: '5px',

  '&:hover': {
    border: '1px solid #03d9ffff'
  },

  variants: {
    active: {
      true: {
        border: '1px solid #03d9ffff'
      }
    }
  }

})