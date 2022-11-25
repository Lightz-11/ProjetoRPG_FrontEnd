import { styled } from '../../stitches.config';

export const Container = styled('div', {
    height: 'auto',
    width: '100%',
    minWidth: '1rem',
    background: 'rgb(20,20,20)',
    padding: '2rem',
    border: '2px solid White',
    borderRadius: '10px',
    marginBottom: '6rem',

    h1: {
        color: 'Purple',
        fontSize: '2.2rem',
        marginBottom: '1.5rem'
    },

    hr: {
        margin: '0 -2rem'
    }
})

export const Body = styled('div', {
    width: '100%',
    minWidth: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
})