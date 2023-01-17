import { styled } from "../../../../../stitches.config";

export const Container = styled('div', {

    width: '70rem',
    borderRadius: '1.2rem',
    backgroundColor: 'rgb(27,27,27)',
    boxShadow: 'rgba(255, 255, 255, 0.45) 0rem 0.5rem 1.5rem',
    padding: '3.5rem 2.5rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',

    '@sm': {
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',

        hr: {
            margin: '0rem -2.5rem'
        }
    },

    h1: {
        display: 'inline-block',
        marginBottom: '3.5rem',
        fontSize: '3rem',
        color: '#a151b4',
    },

})

export const Body = styled('div', {
    textAlign: 'left',

    '@sm': {

        overflowY: 'auto',
        height: '80rem',
        padding: '0 2rem 3rem 1rem'

    }
})

export const Hr = styled('hr', {

    borderColor: 'transparent',

    '@sm': {
        borderColor: 'white'
    }

})

export const Header = styled('div', {
    width: '100%',
    fontFamily: 'Arvo'
})

export const DualParte = styled('div', {

    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',

    '@sm': {
        gridTemplateColumns: '1fr',
        gap: '0rem',
    }

})

export const Button = styled('button', {
    width: '15rem',
    height: '4.5rem',
    margin: '1rem',
    border: 'none',
    color: 'white',
    borderRadius: '8px',
    fontSize: '2.3rem',
    cursor: 'pointer',
    fontFamily: 'Crimson Text',
    paddingLeft: '.2rem',

    variants: {
        color: {
            red: {
                backgroundColor: '#d41717ff',

                '&:hover': {
                    backgroundColor: '#ac1414ff',
                },
            },
            purple: {
                backgroundColor: '#4f1db4',

                '&:hover': {
                    backgroundColor: '#3f178f',
                },
            }
        }
    },

    defaultVariants: {
        color: 'red'
    }
})

export const Footer = styled('div', {

    marginTop: '3rem',

    '@sm': {
        marginTop: '1rem',
        marginBottom: '-2.5rem'
    }

})