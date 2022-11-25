import { styled } from '../../stitches.config';

export const Container = styled('div', {
    minWidth: '7rem',
    width: '7rem',
    height: '100%',
    transition: 'ease 0.5s',
    textAlign: 'center',
    overflow: 'hidden',

    button: {
        background: 'none',
        color: 'white',
        border: 'none',
    },

    h1: {
        scale: '250%'
    },

    h2: {
        scale: '100%',
        fontSize: '2rem',
        position: 'relative',
        bottom: '8px',
        marginLeft: '2rem',
    },

    variants: {
        active : {
            true: {
                minWidth: '15rem',
                width: '20rem',

                li: {
                    div: {
                        display: 'flex',
                        flexDirection: 'row',
                    }
                }
            }
        }
    }
})

export const Header = styled('div', {
    marginTop: '3rem',
    height: 'auto',
    overflow: 'hidden',

    hr: {
        marginTop: '2rem',
        borderColor: 'White'
    }
})

export const Body = styled('div', {

    height: '100%',
    overflowY: 'auto',

    ul: {
        display: 'grid',
    },

    li: {
        margin: '10rem 0'
    },

    '.dado': {
        scale: '80%',
        color: 'Purple'
    },

    '.user': {
        scale: '90%',
        color: 'Yellow'
    },

    '.usernome': {
        color: 'Yellow'
    },

    '.userquit': {
        scale: '90%'
    },

    '.dadonome': {
        color: 'Purple'
    },

    '.userquit': {
        color: 'crimson'
    },

    '.userquitnome': {
        color: 'crimson'
    },

    'button:hover': {
        opacity: '0.5'
    },

})