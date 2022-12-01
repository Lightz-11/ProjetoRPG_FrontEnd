import { styled } from "../../../stitches.config";

export const Container = styled('div', {

    width: '65rem',
    height: '57rem',
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
        top: '2rem',
        position: 'relative',
        alignItems: 'stretch',
        justifyContent: 'center'
    }

})

export const Body = styled('div', {
    height: '450px',
    textAlign: 'left',
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

export const ButtonDelete = styled('button', {
    width: '14rem',
    height: '3rem',
    background: 'none',
    border: '2px solid',
    borderColor: 'Crimson',
    color: 'white',
    borderRadius: '8px',
    fontSize: '1.6rem',
    cursor: 'pointer',
    paddingRight: '1px',
    transition: 'color ease 0.3s',
    marginTop: '15px',

    '.icon': {
        position: 'relative',
        top: '5.5%'
    },

    '&:hover': {
        color: 'Crimson',
    },

})