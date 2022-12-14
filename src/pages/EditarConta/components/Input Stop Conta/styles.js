import { styled } from '../../../../stitches.config';

export const Container = styled('div', {

    width: '85%',
    minWidth: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: '4rem',

})

export const InputB = styled('h2', {

    width: '100%',
    height: '5.2rem',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
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
    top: '-33%',
    textAlign: 'center',
    zIndex: '1',
    fontSize: '2.5rem',
    backgroundColor: 'transparent',
    fontFamily: 'Cormorant Garamond',
    color: 'rgb(208, 147, 226)',
    background: 'rgb(20,20,20)',
    transition: 'ease 0.5s',
    padding: '0px 1rem',

    '@md5': {
        top: '-26%',
        fontSize: '2rem'
    }

})