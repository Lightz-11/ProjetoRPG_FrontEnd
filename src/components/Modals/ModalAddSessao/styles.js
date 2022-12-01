import { styled } from "../../../stitches.config";

export const Container = styled('div', {

    width: '65rem',
    height: '52rem',
    borderRadius: '1.2rem',
    backgroundColor: 'rgb(27,27,27)',
    boxShadow: 'rgba(255, 255, 255, 0.45) 0rem 0.5rem 1.5rem',
    padding: '3.5rem 2.5rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',

    '@sm': {
        width: '45rem'
    },

    h1: {
        display: 'inline-block',
        marginBottom: '3.5rem',
        fontSize: '3rem',
        color: '#a151b4',
    },
    hr: {
        marginBottom: '1rem'
    },

    '.footer': {
        top: '20px',
        position: 'relative',
        alignItems: 'stretch',
        justifyContent: 'center'
    }

})

export const Body = styled('div', {
    height: '450px'
})

export const Header = styled('div', {
    width: '100%'
})

export const Button = styled('button', {
    width: '15rem',
    height: '4.5rem',
    margin: '1rem',
    border: 'none',
    color: 'white',
    borderRadius: '8px',
    fontSize: '2rem',
    cursor: 'pointer',

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