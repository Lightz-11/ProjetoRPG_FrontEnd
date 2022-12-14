import { styled } from "../../stitches.config";

export const Container = styled('div', {
    height: "fit-content",
    display: "flex",
    width: "100%",
    marginTop: "1rem",

    '@sm': {
        marginLeft: '1.5rem'
    }
})

export const SpanContainer = styled('span', {
    color: 'white',
    position: 'relative',
    top: '-0.5px',
    fontFamily: "'Arial', sans-serif",
    fontWeight: 100,
    textDecoration: 'underline',
    marginRight: '1rem'
})

export const Input = styled('input', {
    display: "none",

    '&.toggle1 + .toggleLabel1': {
        width: '3.8rem',
        height: '2.0rem',
        background: 'lightgrey',
        display: 'block',
        position: 'relative',
        borderRadius: '2rem',
        transition: 'ease 0.5s',
        cursor: 'pointer',
    },

    '&.toggle1 + .toggleLabel1:before': {
        content: "",
        position: 'absolute',
        width: '2rem',
        height: '2rem',
        background: 'white',
        display: 'block',
        borderRadius: '50%',
        right: 'unset',
        transition: 'ease 0.3s'
    },

    '&.toggle1:checked + .toggleLabel1': {
        background: '#a151b4',
    },

    '&.toggle1:checked + .toggleLabel1:before': {
        content: "",
        transform: 'translateX(1.8rem)',
        boxShadow: '0 0.4rem 0.4rem rgb(0 0 0 / 10%)',
    },






    '&.toggle2 + .toggleLabel2': {
        width: '3.8rem',
        height: '2.0rem',
        background: 'lightgrey',
        display: 'block',
        position: 'relative',
        borderRadius: '2rem',
        transition: 'ease 0.5s',
        cursor: 'pointer',
    },

    '&.toggle2 + .toggleLabel2:before': {
        content: "",
        position: 'absolute',
        width: '2rem',
        height: '2rem',
        background: 'white',
        display: 'block',
        borderRadius: '50%',
        right: 'unset',
        transition: 'ease 0.3s'
    },

    '&.toggle2:checked + .toggleLabel2': {
        background: '#a151b4',
    },

    '&.toggle2:checked + .toggleLabel2:before': {
        content: "",
        transform: 'translateX(1.8rem)',
        boxShadow: '0 0.4rem 0.4rem rgb(0 0 0 / 10%)',
    }
})