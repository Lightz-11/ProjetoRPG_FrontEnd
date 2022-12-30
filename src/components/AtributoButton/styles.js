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
            fontSize: '2.2rem'
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
    top: '10.5%',

    '@sm': {
        top: '9.5%',
    },
})

export const Mid = styled('div', {
    position: 'absolute',
    top: '30.5%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '21rem',
    marginRight: '.4rem',

    '@sm': {
        top: '29.5%',
        gap: '15.4rem',
        marginRight: '0rem',
    },

    '@sm5': {
        top: '29.5%',
        gap: '12.8rem',
    }
})

export const Bot = styled('div', {

    marginRight: '.3rem',
    position: 'absolute',
    top: '66.5%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '13.8rem',

    '@sm': {
        top: '65.5%',
        gap: '10.2rem',
        marginRight: '0rem'
    },

    '@sm5': {
        top: '65.5%',
        gap: '8.5rem',
        marginRight: '0rem'
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