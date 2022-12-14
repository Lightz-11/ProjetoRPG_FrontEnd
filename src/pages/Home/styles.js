import BackgroundImage from "../../assets/img/Home-Background.jpg";
import { styled } from "../../stitches.config";

export const Container = styled("div", {
  width: "100%",
  height: "100vh",
  display: "flex",
  backgroundImage: `url(${BackgroundImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  overflowX: "hidden",
  overflowY: 'auto',
});

export const Main = styled("main", {
  width: "63rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "auto 0",

  h1: {
    fontSize: "18rem",
    fontFamily: 'Gagalin',
    marginLeft: '2rem',
    fontWeight: 100,
    color: "#ffffff59",
    letterSpacing: "1rem",
    textShadow: "1rem 1rem 2rem #edadff8d"
  },

  h2: {
    fontFamily: 'Fredericka the Great',
    fontWeight: 100,
    letterSpacing: "0.5rem",
    marginBottom: "20rem",
    fontSize: "7rem",
    color: "#ffffff"
  },

  '@md5': {
    paddingBottom: '7rem'
  }
});

export const Roxo = styled('div', {
  backgroundColor: "#78108d",
  height: '6rem',
  width: '20rem',
  borderRadius: "3rem",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: '0.3s',

  '&:hover': {
    backgroundColor: '#620d73'
  }
})

export const Entrar = styled("button", {

  height: '6rem',
  width: '20rem',
  borderRadius: "3rem",
  background: 'none',
  border: "none",

  span: {
    fontSize: "3.5rem",
    position: 'relative',
    bottom: '.2rem',
    color: "#ffffff",
    fontFamily: 'Concert One',
    fontWeight: 100,
  }


});

export const Criar = styled('button', {

  fontSize: "3.5rem",
  width: 'fit-content',
  color: "#ffffff",
  border: "none",
  borderRadius: "2rem",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '1rem',
  fontFamily: 'Concert One',
  fontWeight: 100,
  transition: '0.3s',
  background: "none",
  fontSize: "2.5rem",

  '&:hover': {
    textDecoration: 'underline'
  }

})
