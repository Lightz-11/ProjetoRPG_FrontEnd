import { styled } from "../../stitches.config";

export const Container = styled("div", {
    maxWidth: "100%",
    minWidth: "30rem",
    height: "30rem",
    border: "2px solid #ffffff90",
});

export const Header = styled("div", {
    display: "flex",
    padding: "1rem",
    alignItems: "center",
    justifyContent: "space-between",

    h1: {
        color: "White",
        fontWeight: 100,
        fontSize: "2.2rem",
    },

    div: {
        display: "flex",

        button: {
            marginLeft: "1rem",
        },
    },
});

export const Body = styled("div", {
    height: "auto",
});

export const TopBody = styled("div", {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.2rem",
});

export const BottomBody = styled("div", {

    padding: '1rem',
    color: 'white'

});

export const Button = styled("button", {
    background: "none",
    padding: "0.5rem 1rem",
    border: "1px solid transparent",
    color: "white",

    "&:hover": {
        border: "1px solid white",
    },

    variants: {
        active: {
            true: {
                border: "1px solid white",
            }
        }
    }

});

export const LinkButton = styled('button', {
    background: 'none',
    border: "none",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    svg: {
        transition: '0.2s',
    },

    '&:hover': {
        svg: {
            filter: 'brightness(2)'
        }
    }
})
