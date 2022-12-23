import { Link } from "react-router-dom";
import { styled } from "../../stitches.config";

export const Container = styled("div", {
    position: 'absolute',
    height: "72px",
    width: '100%',
    textAlign: "center",
    overflow: "hidden",

    variants: {
        active: {
            aberto: {
                height: '100%',
                zIndex: 10,
            },
            fechando: {
                height: '100%',
                zIndex: 10,
            },
            fechado: {
                height: '72px',
            }
        }
    }
});

export const Header = styled("div", {

    width: '100%',
    height: '7.2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    background: 'rgb(15,15,15)',
    borderBottom: '2px solid white',

    button: {
        color: "white",
        background: 'none',
        margin: '0 6rem',
        border: "none",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '.7rem',
        transition: '.3s'
    },

    h1: {
        color: 'Purple',
        fontFamily: 'Fredoka One',
        letterSpacing: '.2rem',

        whiteSpace: 'nowrap',
        fontSize: '3.3rem',
        textShadow: "4px 3px 2px black",
    },

    '@md5': {
        button: {
            transform: 'translateX(-2.5rem)',
            margin: '0 2rem 0 7rem'
        },
    }

});

export const Vazio = styled('div', {
    width: '16rem',

    '@md5': {
        width: '12rem'
    }
})

export const Body = styled("div", {

    height: "100%",
    background: 'rgb(15,15,15)',
    width: '0px',
    transition: '.5s',
    overflow: 'hidden',

    ul: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: "column",
        marginLeft: '-1rem',
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
            aberto: {
                width: "15rem",
                transition: '.5s',

                '@md5': {
                    width: '11rem'
                }
            }
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

    transition: '.3s',

    '@md5': {
        fontSize: '1.8rem',
        alignItems: 'center'
    }

});

export const Line1 = styled('div', {
    width: '3rem',
    height: '3px',
    background: 'white',
    transition: '.3s',

    '@md5': {
        width: '2.5rem',
        height: '2px',
    },

    variants: {
        active: {
            aberto: {
                transform: 'rotate(50deg) translate(8px, 8px)',

                '@md5': {
                    transform: 'rotate(50deg) translate(6px, 7px)',
                }
            }
        }
    }
})

export const Line2 = styled('div', {
    width: '3rem',
    height: '3px',
    background: 'white',
    transition: '.3s',

    '@md5': {
        width: '2.5rem',
        height: '2px',
    },

    variants: {
        active: {
            aberto: {
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

    '@md5': {
        width: '2.5rem',
        height: '2px',
    },

    variants: {
        active: {
            aberto: {
                transform: 'rotate(-50deg) translate(6px, -7px)',

                '@md5': {
                    transform: 'rotate(-50deg) translate(6px, -7px)',
                }
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

    '@md5': {
        fontSize: '1.8rem'
    },

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

    '@md5': {
        svg: {
            scale: '70%'
        }
    }

})