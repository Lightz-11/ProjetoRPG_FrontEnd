import { styled } from "../../stitches.config"
import BackgroundImage from "../../assets/img/Home-Background50.jpg";

export const Container = styled('div', {

    width: "100%",
    height: "100vh",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',

    hr: {
        borderColor: 'White'
    }

})

export const Header = styled('div', {

    background: 'rgb(15,15,15)',
    borderBottom: '2px solid white',

    h1: {
        width: 'max-content',
        transition: '.5s',
        color: 'Purple',
        fontFamily: 'Fredoka One',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        letterSpacing: '.2rem',
        marginTop: '1.4rem',
        marginBottom: '1.4rem',
        fontSize: '3.5rem',
        textShadow: '4px 3px 2px black'
    },

    '@lg3': {
        h1: {
            left: 0,
            transform: 'translateX(25%)',
        }
    }

})

export const Body = styled('div', {

    width: '100%',
    padding: '5rem 0',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',

})

export const Body1 = styled('div', {
    height: 'auto',
    justifyContent: 'center',

    display: 'grid',
    gridTemplateColumns: '45% 45%',
    gridColumnGap: '6rem',

    '@sm3': {
        gridTemplateColumns: '80%'
    }

})

export const Body2 = styled('div', {
    height: 'auto',
    justifyContent: 'center',

    display: 'grid',
    gridTemplateColumns: '50%',

    '@sm3': {
        gridTemplateColumns: '90%'
    },
})

export const Footer = styled('div', {
    textAlign: 'center',

    '@sm3': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }
})

export const Button = styled('button', {
    width: '24rem',
    height: '5rem',
    margin: '3rem',
    border: 'none',
    color: 'white',
    borderRadius: '8px',
    fontFamily: 'Crimson Text',
    fontSize: '2.6rem',
    cursor: 'pointer',

    '@sm4': {
        fontSize: '1.6rem',
        width: '16rem',
        height: '4rem'
    },

    variants: {
        color: {
            crismon: {
                backgroundColor: '#b91313ff',

                '&:hover': {
                    backgroundColor: '#9c1111ff',
                },
            },
            blue: {
                backgroundColor: '#4f1db4',

                '&:hover': {
                    backgroundColor: '#3f178f',
                },
            }
        }
    },

    defaultVariants: {
        color: 'crismon'
    }
})