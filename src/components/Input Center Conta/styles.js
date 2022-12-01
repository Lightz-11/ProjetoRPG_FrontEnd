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
    top: '-22%',
    textAlign: 'center',
    zIndex: '1',
    fontSize: '2rem',
    color: 'rgb(208, 147, 226)',
    transition: '0.3s',
    background: 'rgb(20,20,20)',
    padding: '0px 10px',



    variants: {
        active: {
            true: {
                fontSize: '1.9rem',
                transform: 'translateY(-0.8rem)',
                padding: '0px 10px',
            },
        },
    },

})