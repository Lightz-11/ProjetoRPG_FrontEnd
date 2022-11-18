import { styled } from "../../stitches.config";

export const Container = styled('div', {
    background: "Black",
    
    'div > h1': {
        fontSize: "20px"
    }
})

export const Button = styled('button', {
    backgroundColor: "#78108d",
    borderRadius: "20px",
    border: "none",
    color: "white",
    fontSize: "35px",
    fontFamily: "'League Gothic', sans-serif",
    letterSpacing: "1px",
    padding: "10px 70px",
    transition: "ease 0.7s",
    cursor: "pointer",

    '&:hover': {
        backgroundColor: "Black"
    },

    '@sm': {
        backgroundColor: "Red"
    },

    variants: {
        active: {
            true: {
                backgroundColor: 'Blue'
            }
        }
    },
})