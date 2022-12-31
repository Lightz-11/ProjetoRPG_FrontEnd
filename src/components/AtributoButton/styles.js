import { styled } from '../../stitches.config';

export const Container = styled('div', {

    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',

    button: {
        width: 'fit-content',
        height: 'fit-content',
        fontSize: "4rem",
        padding: '1rem .5rem 0rem .5rem',
        background: "none",
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        zIndex: 1,
        fontFamily: 'Special Elite',
        transition: '.3s',

        "@sm": {
            fontSize: '3rem'
        },

        '@sm5': {
            fontSize: '2.5rem'
        }
    },

    'button:hover': {
        color: 'Crimson'
    }

})

export const Top = styled('div', {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    top: '9.5%',

    '@sm': {
        top: '8.5%',
    },

    '@sm5': {
        top: '7.5%'
    }
})

export const Mid = styled('div', {
    position: 'absolute',
    top: '30.5%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '21.7rem',
    marginRight: '.3rem',

    '@sm': {
        top: '29.5%',
        gap: '15.9rem',
        marginRight: '.1rem',
    },

    '@sm5': {
        top: '28.5%',
        gap: '13.2rem',
    }
})

export const Bot = styled('div', {

    marginRight: '.3rem',
    position: 'absolute',
    top: '67.5%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '14.5rem',

    '@sm': {
        top: '66.5%',
        gap: '10.5rem',
        marginRight: '.2rem'
    },

    '@sm5': {
        top: '65.5%',
        gap: '8.6rem',
        marginRight: '.2rem'
    }
})

export const Img = styled('img', {
    width: '40rem',

    '@sm': {
        width: '30rem'
    },

    '@sm5': {
        width: '25rem'
    }
})