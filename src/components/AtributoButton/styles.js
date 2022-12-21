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
    top: '10%',

    '@sm': {
        top: '9%',
    }
})

export const Mid = styled('div', {
    position: 'absolute',
    top: '30%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '21.8rem',

    '@sm': {
        top: '29%',
        gap: '15.6rem',
    }
})

export const Bot = styled('div', {
    position: 'absolute',
    top: '67.5%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '14.5rem',

    '@sm': {
        top: '66.5%',
        gap: '10.2rem',
        marginRight: '0.7rem'
    }
})

export const Img = styled('img', {
    width: '40rem',

    '@sm': {
        width: '30rem'
    }
})