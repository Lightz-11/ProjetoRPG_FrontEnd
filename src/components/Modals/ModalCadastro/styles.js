import { styled } from "../../../stitches.config";

export const Container = styled('div', {

    width: '47rem',
    height: '73rem',
    borderRadius: '1.2rem',
    backgroundColor: 'rgb(27,27,27)',
    boxShadow: 'rgba(255, 255, 255, 0.45) 0rem 0.5rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    padding: '3.5rem 2.5rem',

    h1: {
        fontSize: "3rem",
        color: "#a151b4",
        textAlign: 'center',
        marginBottom: '3rem',
        fontFamily: 'Arvo',
    },

    '.toggles': {
        display: 'flex',
        flexDirection: 'row',
        margin: '0.5rem 0 2rem 1rem'
    },

    '.footer': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    '@sm': {
        width: '100vw',
        minHeight: '100vh',

        '.footer': {

        },

        hr: {
            margin: '0 -2.5rem'
        }
    }

})

export const Button = styled('button', {
    width: '15rem',
    height: '4.5rem',
    margin: '1rem',
    border: 'none',
    color: 'white',
    borderRadius: '8px',
    fontSize: '2.5rem',
    cursor: 'pointer',
    fontFamily: 'Crimson Text',

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
