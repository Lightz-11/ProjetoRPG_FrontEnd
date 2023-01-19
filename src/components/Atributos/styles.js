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
        fontSize: "8rem",
        padding: '1rem .5rem 0rem .5rem',
        background: "none",
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        cursor: 'default',
        zIndex: 1,
        fontFamily: 'Special Elite',
        transition: '.3s',
    },

})

export const Top = styled('div', {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    top: '9.5%',

})

export const Mid = styled('div', {
    position: 'absolute',
    top: '30.5%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '38.5rem',
    marginRight: '.3rem',
})

export const Bot = styled('div', {

    marginRight: '.3rem',
    position: 'absolute',
    top: '67.5%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '25.5rem',
})

export const Img = styled('img', {
    width: '70rem',
})