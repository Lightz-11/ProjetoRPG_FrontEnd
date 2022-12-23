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

  "@md": {
    margin: 'auto auto'
  }
});

export const Entrar = styled("button", {

  fontSize: "3.5rem",
  minWidth: '25rem',
  minHeight: '6rem',
  color: "#ffffff",
  border: "none",
  borderRadius: "2rem",
  fontFamily: 'Concert One',
  fontWeight: 100,
  transition: '0.3s',

  backgroundColor: "#78108d",
  '&:hover': {
    backgroundColor: '#620d73'
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
  padding: "1rem 7rem",
  fontFamily: 'Concert One',
  fontWeight: 100,
  transition: '0.3s',
  background: "none",
  fontSize: "2.5rem",

  '&:hover': {
    textDecoration: 'underline'
  }

})
