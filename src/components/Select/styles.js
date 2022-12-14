import { styled } from '../../stitches.config';

export const Container = styled('div', {

    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: '4rem',


    option: {
        color: 'white',
        background: 'rgb(27,27,27)',
        textTransform: 'capitalize'
    }

})

export const ContainerSel = styled('div', {
    width: '100%',
    overflow: 'hidden',
    border: "2px solid #ffffff",
    borderRadius: '1rem',
    display: 'block',
})

export const InputB = styled('select', {

    width: '99%',
    height: 'auto',
    wordWrap: 'break-word',
    marginTop: "0px",
    fontSize: "2rem",
    padding: "1.5rem",
    background: "none",
    borderRadius: "0.7rem",
    border: 'none',
    outline: 'none',
    color: 'white',
    zIndex: 1,

})

export const LabelContainer = styled('label', {

    position: 'absolute',
    width: 'fit-content',
    bottom: '25%',
    left: 15,
    backgroundColor: 'rgb(27, 27, 27)',
    color: 'rgb(208, 147, 226)',
    transition: '0.3s',
    fontSize: '2.5rem',
    transform: 'translateX(1rem) translateY(-3rem)',
    padding: '0px 10px',
    fontFamily: 'Cormorant Garamond',
    zIndex: 2

})

export const LabelContainerMenor = styled('label', {

    position: 'absolute',
    width: 'fit-content',
    bottom: '30%',
    left: 15,
    backgroundColor: 'rgb(27, 27, 27)',
    color: 'rgb(208, 147, 226)',
    transition: '0.3s',
    fontSize: '2rem',
    fontFamily: 'Cormorant Garamond',
    transform: 'translateX(1rem) translateY(-3rem)',
    padding: '0px 10px',
    zIndex: 2

})