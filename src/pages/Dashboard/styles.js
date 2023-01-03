import { styled } from "../../stitches.config";
import BackgroundImage from "../../assets/img/Home-Background50.jpg";

export const Container = styled("div", {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
});

export const Body = styled('div', {
    marginTop: '7.3rem',
    padding: '3rem',
    overflowY: 'auto',

    '@md5': {
        paddingBottom: '10rem'
    }
})

export const SessaoContainer = styled("div", {
    width: "100%",
    minWidth: "5rem",
    height: "max-content",
    border: "2px solid #ffffff90",
    padding: "2rem",
    borderRadius: "2rem",
    marginBottom: "5rem",

    h1: {
        color: "White",
        textAlign: "center",
        fontSize: "3.5rem",
        letterSpacing: '.1rem',
        fontWeight: 100,
        fontFamily: 'Special Elite',
    },

    hr: {
        margin: "2rem -2rem",
        borderColor: "#ffffff65",
    },
});

export const Sessoes = styled("div", {
    minWidth: "5rem",
    display: "grid",
    gridTemplateColumns: "49% 49%",
    gridColumnGap: "3rem",
    gridRowGap: "3rem",
    justifyContent: "center",

    "@lg2": {
        gridTemplateColumns: "100%",
    },
});

export const Fichas = styled("div", {
    minWidth: "5rem",
    display: "grid",
    gridTemplateColumns: "49% 49%",
    gridColumnGap: "3rem",
    gridRowGap: "3rem",
    justifyContent: "center",

    "@lg2": {
        gridTemplateColumns: "100%",
    },
});

export const FichaContainer = styled("div", {
    width: "100%",
    minWidth: "5rem",
    height: "max-content",
    border: "2px solid #ffffff90",
    padding: "2rem",
    borderRadius: "2rem",

    h1: {
        color: "White",
        textAlign: "center",
        fontSize: "3.5rem",
        letterSpacing: '.1rem',
        fontWeight: 100,
        fontFamily: 'Special Elite',
    },

    hr: {
        margin: "2rem -2rem",
        borderColor: "#ffffff65",
    },
});
