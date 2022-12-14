import { styled } from '../../../stitches.config';

export const Container = styled('div', {

    width: '47rem',
    height: '44rem',
    borderRadius: '1.2rem',
    backgroundColor: 'rgb(27,27,27)',
    boxShadow: 'rgba(255, 255, 255, 0.45) 0rem 0.5rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    padding: '3.5rem 2.5rem',
    fontFamily: 'Arvo',

    h1: {
        fontSize: "3rem",
        color: "#a151b4",
        textAlign: 'center',
        marginBottom: '3rem'
    },

    '.toggles': {
        display: 'flex',
        flexDirection: 'row',
        margin: '0.5rem -11rem 2rem 1rem'
    },

    '.footer': {
        flex: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export const Button = styled('button', {
    width: '15rem',
    fontFamily: 'Crimson Text',
    height: '4.5rem',
    margin: '1rem',
    border: '1px solid transparent',
    color: 'white',
    borderRadius: '8px',
    fontSize: '2.5rem',
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
