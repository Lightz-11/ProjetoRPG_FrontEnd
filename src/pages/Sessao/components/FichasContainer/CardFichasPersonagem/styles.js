import { Link } from "react-router-dom";
import { styled } from "../../../../../stitches.config";

export const Container = styled("div", {
    maxWidth: "100%",
    minWidth: "25rem",
    minHeight: "40rem",
    border: "2px solid #ffffff90",
});

export const Header = styled("div", {
    display: "flex",
    padding: ".4rem 1rem",
    alignItems: "center",
    justifyContent: "space-between",

    h1: {
        color: "White",
        fontWeight: 100,
        fontSize: "2.4rem",
        paddingTop: '0.3rem',
        width: 'fit-content',
        fontFamily: 'El Messiri'
    },

    div: {
        display: "flex",

        button: {
            marginLeft: "1rem",
        },
    },
});

export const Body = styled("div", {
    height: "auto",
    overflow: 'hidden',
});

export const TopBody = styled("div", {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: 'hidden',
    gap: '1rem',
    padding: "0.5rem",
    flexWrap: 'wrap',

    '@md5': {
        gap: '.5rem'
    },

});

export const BottomBody = styled("div", {

    padding: '1rem',
    color: 'white',

    h2: {
        width: '100%',
        textAlign: 'center',
        fontSize: '1.8rem',
        fontFamily: 'El Messiri'
    },

    h3: {
        width: '100%',
        textAlign: 'center',
        fontSize: '2rem',
        fontFamily: 'El Messiri'
    }

});

export const Grid = styled('div', {

    width: '100%',
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: '1fr 1fr',
    alignContent: 'center',
    justifyItems: 'center',

    '@md5': {
        gridTemplateColumns: '1fr'
    }

})

export const Card = styled('div', {

    width: '100%',
    border: '1px solid white',
    fontFamily: 'El Messiri',
    overflow: 'hidden',
    display: 'flex',
    padding: '.2rem 1rem 0rem 0rem',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',

    label: {

        paddingLeft: '1rem',
        color: '#ffffff90'

    },

    span: {

        paddingLeft: '2rem',

    }

})

export const Button = styled("button", {
    background: "none",
    padding: "0.3rem 1rem 0.1rem 1rem",
    border: "1px solid transparent",
    color: "white",
    fontSize: '1.6rem',
    fontFamily: 'El Messiri',

    "&:hover": {
        border: "1px solid white",
    },

    variants: {
        active: {
            true: {
                border: "1px solid white",

                "&:hover": {
                    cursor: 'default'
                },
            }
        }
    }

});

export const LinkButton = styled(Link, {
    background: 'none',
    border: "none",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '1rem',

    svg: {
        transition: '0.2s',
    },

    '&:hover': {
        svg: {
            filter: 'brightness(2)'
        }
    }
})

export const LinkIcon = styled(Link, {
    background: "none",
    border: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: '0.2s',
    padding: '.2rem',
    marginLeft: '1rem',

    variants: {
        color: {
            red: {
                border: '1px solid transparent',
                '&:hover': {
                    border: '1px solid #ae0808ff',
                }
            },
            aqua: {
                border: '1px solid transparent',
                '&:hover': {
                    border: '1px solid #03d9ffff',
                }
            }
        }
    },
})

export const ButtonIcon = styled('button', {
    background: "none",
    border: "none",
    display: "flex",
    justifyContent: "center",
    transition: '0.2s',
    padding: '.2rem',
    marginLeft: '1rem',

    variants: {
        color: {
            red: {
                border: '1px solid transparent',
                '&:hover': {
                    border: '1px solid #ae0808ff',
                }
            },
            aqua: {
                border: '1px solid transparent',
                '&:hover': {
                    border: '1px solid #03d9ffff',
                }
            }
        }
    },
})

export const Deferes = styled('span', {

    textTransform: 'capitalize',
    border: '1px solid white',
    padding: '.4rem 1rem .2rem 1rem',
    fontFamily: 'El Messiri',
    fontWeight: 700,

})

export const DivDeferes = styled('div', {

    width: '100%',
    display: 'flex',
    marginTop: '1rem',
    marginBottom: '2rem',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1rem'

})