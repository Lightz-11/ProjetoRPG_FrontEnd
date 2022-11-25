import { styled } from "../../stitches.config";
import BackgroundImage from "../../assets/img/Home-Background50.jpg";

export const Container = styled("div", {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${BackgroundImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  padding: '3rem',
  display: 'flex',
  flexDirection: 'column',
  overflowX: 'hidden'
});

export const SessaoContainer = styled ('div', {
  width: '100%',
  minWidth: '5rem',
  height: 'max-content',
  border: '2px solid #ffffff90',
  padding: '2rem',
  borderRadius: '2rem',
  marginBottom: '5rem',

  h1: {
    color: 'White',
    textAlign: 'center',
    fontSize: '2.5rem'
  },

  hr: {
    margin: '2rem -2rem',
    borderColor: '#ffffff65'
  },
})

export const Sessoes = styled ('div', {
  minWidth: '5rem',
  display: 'grid',
  gridTemplateColumns: '49% 49%',
  gridColumnGap: '3rem',
  gridRowGap: '3rem',
  justifyContent: 'center',

  '@lg2': {
    gridTemplateColumns: '100%',
  }
})

export const FichaContainer = styled ('div', {
  width: '100%',
  minWidth: '5rem',
  height: 'max-content',
  border: '2px solid #ffffff90',
  padding: '2rem',
  borderRadius: '2rem',

  h1: {
    color: 'White',
    textAlign: 'center',
    fontSize: '2.5rem'
  },

  hr: {
    margin: '2rem -2rem',
    borderColor: '#ffffff65'
  }
})

