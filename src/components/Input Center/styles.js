import { styled } from '../../stitches.config';

export const Container = styled('div', {

    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: '4rem',

})

export const InputB = styled ('input', {

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
    top: '-22%',
    textAlign: 'center',
    zIndex: '1',
    fontSize: '2rem',
    backgroundColor: 'rgb(27, 27, 27)',
    color: 'rgb(208, 147, 226)',
    transition: 'ease 0.5s',
    padding: '0px 10px',

    variants: {
        active: {
            true: {
                fontSize: '1.9rem',
                transform: 'translateY(-0.8rem)',
                padding: '0px 10px',
            }
        }
    },

})