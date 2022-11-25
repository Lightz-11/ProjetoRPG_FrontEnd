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
    height: 'auto',
    wordWrap: 'break-word',
    marginTop: "0px",
    fontSize: "2rem",
    padding: "1.5rem",
    background: "none",
    borderRadius: "0.7rem",
    border: 'none',
    outline: 'solid 0.2rem white',
    color: 'white',
    transition: 'ease 0.5s',

    variants: {
        active: {
            falseCampo: {
                textIndent: '37%',
                transition: 'ease 0.3s'
            },
            falseUsername: {
                textIndent: '35%',
                transition: 'ease 0.3s'
            },
            falseEmail: {
                textIndent: '21.5%',
                transition: 'ease 0.3s'
            },
            falseSenha: {
                textIndent: '24%',
                transition: 'ease 0.3s'
            },
            falseSenhaConfirmada: {
                textIndent: '64.7%',
                transition: 'ease 0.3s'
            },
            falseNome: {
                textIndent: '23%',
                transition: 'ease 0.3s'
            }
        }
    }
})

export const LabelContainer = styled('label', {
    
    position: 'absolute',
    width: 'fit-content',
    bottom: '25%',
    left: 15,
    zIndex: '1',
    fontSize: '2.5rem',
    backgroundColor: 'rgb(27, 27, 27)',
    color: 'rgb(208, 147, 226)',
    transition: 'ease 0.5s',

    variants: {
        active: {
            true: {
                fontSize: '2rem',
                transform: 'translateX(0.1rem) translateY(-2.8rem)',
                padding: '0px 10px',
                zIndex: 3
            }
        }
    },

})