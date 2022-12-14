import { styled } from "../../stitches.config";

export const Container = styled('div', {
    width: '100%',
    minWidth: '3rem',
    background: 'rgb(27,27,27, 0.8)',
    border: '2px solid',
    borderColor: 'crimson',
    padding: '1rem',
    borderRadius: '1rem',
    fontFamily: 'El Messiri',

    hr: {
        margin: '0rem -1rem',
        borderColor: '#ffffff75'
    },
})

export const Header = styled('div', {

    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.6rem',
    marginTop: '-0.2rem',

    button: {
        background: 'none',
        color: 'White',
        border: 'none',
        transition: 'ease 0.3s'
    },

    'button:hover': {
        color: 'crimson'
    },

    h2: {
        color: "crimson",
        fontSize: '2rem',
        textAlign: 'left',
        wordBreak: 'break-word',
        marginRight: '2rem'
    },
})

export const Desc = styled('div', {
    height: '6rem',
    display: 'flex',
    justifyContent: 'left',
    marginTop: '1rem',
    marginBottom: '1rem',
    overflowY: 'auto',
    overflowX: 'hidden',

    h2: {
        width: 'max-content',
        height: 'max-content',
        color: 'white',
        fontSize: '1.6rem',
        textAlign: 'left',
        fontWeight: '100',
        wordBreak: 'break-word'
    }
})

export const Part = styled('div', {
    height: '3.8rem',
    display: 'flex',
    justifyContent: 'left',
    marginTop: '1rem',
    marginBottom: '1rem',
    overflowY: 'auto',
    overflowX: 'hidden',

    h2: {
        width: 'max-content',
        height: 'max-content',
        color: 'white',
        fontSize: '1.6rem',
        textAlign: 'left',
        fontWeight: '100',
        wordBreak: 'break-word',
    }
})

export const Footer = styled('div', {
    height: '4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1rem',

    button: {
        width: '100%',
        fontFamily: 'Crimson Text',
        color: 'crimson',
        fontSize: '2rem',
        background: 'none',
        border: '2px solid crimson',
        padding: '.5rem',
        borderRadius: '1rem',
        transition: 'ease 0.3s'
    },
    'button:hover': {
        backgroundColor: 'rgb(47,47,47,0.5)'
    }
})