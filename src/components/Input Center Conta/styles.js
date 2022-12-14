import { styled } from '../../stitches.config';

export const Container = styled('div', {

    width: '100%',
    minWidth: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: '2rem',
    border: '20px solid rgb(20,20,20)',
    background: 'rgb(20,20,20)',

    span: {
        color: 'red',
        position: 'absolute',
        fontSize: '1.8rem',
        right: '1.5rem',
        top: '1.6rem',
        fontFamily: 'emoji',
    },

    variants: {
        noMarginTop: {
            false: {
                marginTop: '0rem'
            }
        }
    }

})

export const InputB = styled('input', {

    width: '100%',
    fontSize: "2rem",
    padding: "1.5rem",
    background: 'transparent',
    borderRadius: "0.7rem",
    border: 'none',
    outline: 'solid 0.2rem white',
    color: 'white',
    transition: '0.3s',
})

export const LabelContainer = styled('label', {

    position: 'absolute',
    width: 'fit-content',
    top: '-34%',
    textAlign: 'center',
    zIndex: '1',
    fontFamily: 'Cormorant Garamond',
    fontSize: '2.5rem',
    color: 'rgb(208, 147, 226)',
    transition: '0.3s',
    background: 'rgb(20,20,20)',
    padding: '0px 1rem',



    variants: {
        active: {
            true: {
                fontSize: '2.3rem',
                transform: 'translateY(-0.6rem)',
                padding: '0px 1.6rem',
            },
        },
    },

})