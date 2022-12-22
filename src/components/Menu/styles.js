import { Link } from "react-router-dom";
import { styled } from "../../stitches.config";

export const Container = styled("div", {
    position: 'absolute',
    height: "100%",
    zIndex: 20,
    transition: "ease 0.5s",
    textAlign: "center",
    overflow: "hidden",
});

export const Header = styled("div", {

    width: '15rem',
    height: '7.2rem',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center',
    borderBottom: '2px solid white',

    button: {
        color: "white",
        background: 'none',
        border: "none",
        width: '3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '.7rem'
    }
});

export const Body = styled("div", {

    height: "100%",
    overflowY: "auto",
    background: 'rgb(15,15,15)',
    width: '0px',
    transition: '.5s',

    ul: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: "column",
        marginLeft: '-.5rem'
    },

    "button:hover": {
        opacity: "0.4",
        transition: '.3s'
    },

    "a:hover": {
        opacity: "0.4",
        transition: '.3s'
    },

    variants: {
        active: {
            true: {
                width: "15rem",
            },
        },
    },

});

export const Button = styled('button', {
    background: "none",
    color: "white",
    border: "none",

    display: "flex",
    alignItems: "flex-end",
    color: 'Crimson',
    justifyContent: "center",
    fontSize: "2.5rem",
    gap: "1rem",
    fontFamily: 'Neko One',

    transition: '.3s'

});

export const Line1 = styled('div', {
    width: '3rem',
    height: '3px',
    background: 'white',
    transition: '.3s',

    variants: {
        active: {
            true: {
                transform: 'rotate(45deg) translate(8px, 8px)'
            }
        }
    }
})

export const Line2 = styled('div', {
    width: '3rem',
    height: '3px',
    background: 'white',
    transition: '.3s',

    variants: {
        active: {
            true: {
                opacity: 0
            }
        }
    }
})

export const Line3 = styled('div', {
    width: '3rem',
    height: '3px',
    background: 'white',
    transition: '.3s',

    variants: {
        active: {
            true: {
                transform: 'rotate(-45deg) translate(5px, -7px)'
            }
        }
    }
})

export const ButtonLink = styled(Link, {
    background: "none",
    color: "white",
    border: "none",
    textDecoration: 'none',
    alignItems: 'center',

    transition: '.3s',

    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "2.5rem",
    gap: "1rem",
    fontFamily: 'Neko One',

    variants: {
        color: {
            purple: {
                color: 'Purple',
                paddingLeft: '.5rem'
            },
            yellow: {
                color: 'Yellow'
            }
        }
    }
});

export const Li = styled('li', {

    margin: "5rem 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
})