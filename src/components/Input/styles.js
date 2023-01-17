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
        position: 'absolute',
        fontSize: '1.8rem',
        right: '1.5rem',
        top: '1.8rem',
        fontFamily: 'emoji',
    },

    '@sm': {
        span: {
            fontSize: '1.6rem'
        }
    },

    variants: {
        padding: {
            low: {
                marginTop: '2rem'
            }
        }
    }

})

export const ContainerInput = styled('div', {
    width: '100%',
    overflow: 'hidden',
    border: "2px solid #ffffff",
    borderRadius: '1rem',
    display: 'block',
    background: 'transparent',
    zIndex: 3
})

export const InputB = styled('input', {
    width: '100%',
    height: 'auto',
    wordWrap: 'break-all',
    fontSize: "2rem",
    padding: "1.5rem",
    background: "transparent",
    borderRadius: "0.7rem",
    border: 'none',
    outline: 'solid 0.2rem white',
    color: 'transparent',
    caretColor: 'white',

    variants: {
        padding: {
            low: {
                padding: '.5rem 1rem'
            }
        }
    }
})

export const LabelContainer = styled('label', {

    position: 'absolute',
    width: 'fit-content',
    whiteSpace: 'nowrap',
    bottom: '18%',
    left: 15,
    zIndex: 1,
    fontSize: '3rem',
    fontWeight: 100,
    fontFamily: 'arial',
    backgroundColor: 'rgb(27, 27, 27)',
    fontFamily: 'Cormorant Garamond',
    color: 'rgb(208, 147, 226)',
    transition: '0.3s',

    variants: {
        active: {
            true: {
                fontSize: '2.5rem',
                transform: 'translateX(1rem) translateY(-3.3rem)',
                padding: '0px 10px',
                zIndex: 4
            }
        },
    },

})

export const LabelContainerMenor = styled('label', {

    position: 'absolute',
    width: 'fit-content',
    bottom: '30%',
    left: 15,
    zIndex: 1,
    fontSize: '2rem',
    backgroundColor: 'rgb(27, 27, 27)',
    color: 'rgb(208, 147, 226)',
    transition: '0.3s',

    variants: {
        active: {
            true: {
                fontSize: '1.6rem',
                transform: 'translateX(1rem) translateY(-3rem)',
                padding: '0px 10px',
                zIndex: 4
            }
        },
    },

})

export const LabelContainerMenorEPadding = styled('label', {

    position: 'absolute',
    width: 'fit-content',
    bottom: '80%',
    padding: '0 1rem',
    left: 15,
    zIndex: 4,
    fontSize: '1.6rem',
    backgroundColor: 'rgb(27, 27, 27)',
    color: 'rgb(208, 147, 226)',
    transition: '0.3s',

})