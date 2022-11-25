import { styled } from '../../../stitches.config';

export const Container = styled('div', {

    width: '47rem',
    height: '47rem',
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
    height: '4.5rem',
    margin: '1rem',
    border: 'none',
    color: 'white',
    borderRadius: '8px',
    fontSize: '2rem',
    cursor: 'pointer',

    variants: {
        color: {
            crismon: {backgroundColor: 'Crimson'},
            blue: {backgroundColor: 'CornflowerBlue'}
        }
    },

    defaultVariants: {
        color: 'crismon'
    }
})
