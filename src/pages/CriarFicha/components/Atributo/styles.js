import { styled } from '../../../../stitches.config';

export const Container = styled('div', {

    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: '4rem',

})

export const Top = styled('div', {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    top: '11%',

    '@sm': {
        top: '9%',
        marginRight: '-.1rem',
    }
})

export const Mid = styled('div', {
    position: 'absolute',
    top: '32%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '21.8rem',

    '@sm': {
        top: '30%',
        gap: '15.6rem',
        marginRight: '-.3rem'
    }
})

export const Bot = styled('div', {
    position: 'absolute',
    marginRight: '.3rem',
    top: '69%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '14.7rem',

    '@sm': {
        top: '67.5%',
        gap: '10.2rem',
        marginRight: '0rem'
    }
})

export const Img = styled('img', {
    width: '40rem',

    '@sm': {
        width: '30rem'
    }
})