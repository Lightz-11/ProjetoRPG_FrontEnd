import { styled } from '../../stitches.config';

export const Container = styled('div', {

    width: '100%',
    minWidth: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: '4rem',

})

export const InputB = styled ('h2', {

    width: '96%',
    height: '5.2rem',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
    marginTop: "0px",
    fontSize: "2rem",
    padding: "1.5rem",
    background: "none",
    borderRadius: "0.7rem",
    border: 'none',
    outline: 'solid 0.2rem white',
    color: 'white',
    fontWeight: '100',
    transition: 'ease 0.5s',
})

export const LabelContainer = styled('label', {
    
    position: 'absolute',
    width: 'fit-content',
    top: '-22%',
    textAlign: 'center',
    zIndex: '1',
    fontSize: '2rem',
    backgroundColor: 'transparent',
    color: 'rgb(208, 147, 226)',
    background: 'rgb(20,20,20)',
    transition: 'ease 0.5s',
    padding: '0px 10px',

})