import { styled } from "../../../stitches.config";

export const Container = styled('div', {

    width: '65rem',
    borderRadius: '1.2rem',
    backgroundColor: 'rgb(27,27,27)',
    boxShadow: 'rgba(255, 255, 255, 0.45) 0rem 0.5rem 1.5rem',
    padding: '3.5rem 2.5rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',

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
        marginTop: '3rem'
    },

    '@sm': {
        width: '100vw',
        minHeight: '100vh',

        hr: {
            margin: '0 -2.5rem 1rem -2.5rem'
        }

    },

})

export const Body = styled('div', {
    textAlign: 'left',
})

export const Header = styled('div', {
    width: '100%',
    fontFamily: 'Arvo'
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

export const ButtonDelete = styled('button', {
    width: '14rem',
    background: 'none',
    border: '2px solid',
    borderColor: 'Crimson',
    color: 'white',
    fontFamily: 'El Messiri',
    borderRadius: '8px',
    fontSize: '1.6rem',
    cursor: 'pointer',
    transition: 'color ease 0.3s',
    marginTop: '15px',
    paddingTop: '.3rem',

    '.icon': {
        position: 'relative',
        top: '.2rem'
    },

    '&:hover': {
        color: 'Crimson',
    },

})