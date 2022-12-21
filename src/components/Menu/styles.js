import { Link } from "react-router-dom";
import { styled } from "../../stitches.config";

export const Container = styled("div", {
    width: "auto",
    right: 0,
    height: "7rem",
    top: 0,
    position: 'fixed',
    transition: "ease 0.5s",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: '2rem',

    ul: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export const Button = styled('button', {
    background: "none",
    color: "white",
    border: "none",

    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "2rem",
    gap: "1rem",
    fontFamily: 'Neko One',

    variants: {
        color: {
            crimson: {
                color: 'Crimson'
            },
            purple: {
                color: 'Purple'
            },
            yellow: {
                color: 'Yellow'
            }
        }
    }
});

export const ButtonLink = styled(Link, {
    background: "none",
    color: "white",
    border: "none",
    textDecoration: 'none',
    alignItems: 'center',

    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "2rem",
    gap: "1rem",
    fontFamily: 'Neko One',

    variants: {
        color: {
            crimson: {
                color: 'Crimson'
            },
            purple: {
                color: 'Purple'
            },
            yellow: {
                color: 'Yellow'
            }
        }
    }
});

export const Li = styled('li', {

    margin: "0rem 3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

})