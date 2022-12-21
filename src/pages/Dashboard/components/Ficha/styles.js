import { styled } from "../../../../stitches.config";

export const Container = styled('div', {
    width: '100%',
    minWidth: '3rem',
    background: 'rgb(27,27,27, 0.8)',
    border: '2px solid',
    borderColor: '#4040ff',
    padding: '1rem',
    borderRadius: '1rem',
    fontFamily: 'El Messiri',

    hr: {
        margin: '0rem -1rem',
        borderColor: '#ffffff75'
    },
})

export const Header = styled('div', {

    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.6rem',
    marginTop: '-0.2rem',

    h2: {
        color: "#4040ff",
        fontSize: '2rem',
        textAlign: 'left',
        wordBreak: 'break-word',
        marginRight: '2rem'
    },
})

export const Botoes = styled('div', {

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',


    a: {
        background: 'none',
        textDecoration: 'none',
        padding: '.3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'solid 1px transparent',
        transition: 'ease 0.3s'
    },

    'a:hover': {
        border: 'solid 1px aqua',
    },

})

export const Button = styled('button', {

    background: 'none',
    textDecoration: 'none',
    padding: '.3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 1px transparent',
    transition: 'ease 0.3s',

    variants: {
        color: {
            green: {
                '&:hover': {
                    border: 'solid 1px #13ff72',
                },
            },
            crimson: {
                '&:hover': {
                    border: 'solid 1px crimson',
                },
            },
            red: {
                '&:hover': {
                    border: 'solid 1px red',
                },
            }
        }
    }

})

export const Desc = styled('div', {
    height: '12.5rem',
    display: 'flex',
    justifyContent: 'left',
    marginTop: '1rem',
    marginBottom: '1rem',

    h2: {
        width: 'max-content',
        height: 'max-content',
        color: 'white',
        fontSize: '1.6rem',
        textAlign: 'left',
        fontWeight: '100',
        wordBreak: 'break-word'
    },

    img: {
        border: '1px solid white',
        borderRadius: '70rem'
    }
})

export const Grade = styled('div', {
    display: "flex",
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',

    strong: {
        fontSize: '1.8rem'
    },

    span: {
        width: '45%',
        fontSize: '1.6rem',
        height: 'max-contet',
        alignItems: 'center',
        color: 'white',
        padding: '.5rem .5rem',
        paddingLeft: '1rem',
        gap: '.5rem',
        border: '1px solid #ffffff90'
    },

})

export const MiniGrade = styled('div', {
    display: "flex",
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    strong: {
        fontSize: '1.8rem'
    },

    span: {
        width: '45%',
        fontSize: '1.6rem',
        height: 'max-contet',
        alignItems: 'center',
        color: 'white',
        padding: '.5rem .5rem',
        paddingLeft: '1rem',
        gap: '.5rem',
        border: '1px solid #ffffff90'
    },

})

export const Footer = styled('div', {
    height: '4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1rem',

    a: {
        width: '100%',
        textAlign: 'center',
        textDecoration: 'none',
        fontFamily: 'Crimson Text',
        color: '#4040ff',
        fontSize: '2rem',
        background: 'none',
        border: '2px solid #4040ff',
        padding: '.5rem',
        borderRadius: '1rem',
        transition: 'ease 0.3s'
    },
    'a:hover': {
        backgroundColor: 'rgb(47,47,47,0.5)'
    }
})