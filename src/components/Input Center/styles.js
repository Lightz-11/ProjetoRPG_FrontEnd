import { styled } from '../../stitches.config';

export const Container = styled('div', {

    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: '4rem',

    span: {
        color: 'red',
        fontSize: '3rem',
        position: 'relative',
        right: '2rem',
        top: '.7rem',
        marginRight: '-1.2rem',
        fontFamily: 'emoji',
    }

})

export const InputB = styled('input', {

    width: '100%',
    marginTop: "0px",
    fontSize: "2rem",
    padding: "1.5rem",
    background: "none",
    borderRadius: "0.7rem",
    border: 'none',
    outline: 'solid 0.2rem white',
    color: 'white',
    transition: 'ease 0.5s',
})

export const LabelContainer = styled('label', {

    position: 'absolute',
    width: 'fit-content',
    top: '-34%',
    textAlign: 'center',
    zIndex: '1',
    fontFamily: 'Cormorant Garamond',
    fontSize: '2.5rem',
    backgroundColor: 'rgb(27, 27, 27)',
    color: 'rgb(208, 147, 226)',
    transition: '.3s',
    padding: '0px 1rem',

    variants: {
        active: {
            true: {
                fontSize: '2.3rem',
                transform: 'translateY(-0.6rem)',
                padding: '0px 1.3rem',
            }
        }
    },

})