import { styled } from '../../stitches.config';

export const Container = styled('div', {

    width: '100%',
    minWidth: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',

})

export const InputB = styled('h2', {

    width: '100%',
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
    overflow: 'hidden',
    textOverflow: 'ellipsis'
})

export const LabelContainer = styled('label', {

    position: 'absolute',
    width: 'fit-content',
    top: '-33%',
    left: '3rem',
    zIndex: '1',
    fontSize: '2.5rem',
    backgroundColor: 'transparent',
    fontFamily: 'Cormorant Garamond',
    color: 'rgb(208, 147, 226)',
    background: 'rgb(20,20,20)',
    transition: 'ease 0.5s',
    padding: '0px 1rem',

})