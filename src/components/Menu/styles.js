import { styled } from "../../stitches.config";

export const Container = styled("div", {
    minWidth: "4rem",
    width: "7rem",
    height: "100%",
    transition: "ease 0.5s",
    textAlign: "center",
    overflow: "hidden",

    variants: {
        active: {
            true: {
                minWidth: "15rem",
                width: "15rem",
            },
        },
    },
});

export const Header = styled("div", {
    marginTop: "1.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    hr: {
        width: "100%",
        marginTop: "1.5rem",
        borderColor: "White",
    },
});

export const Body = styled("div", {
    height: "100%",
    overflowY: "auto",

    ul: {
        display: "flex",
        flexDirection: "column",
    },

    "button:hover": {
        opacity: "0.5",
    },

});

export const Button = styled("button", {
    background: "none",
    color: "white",
    border: "none",

    display: "flex",
    alignContent: "center",
    ustifyContent: "center",
    fontSize: "1.8rem",
    gap: "1rem",

    variants: {
        color: {
            crimson: {
                color: 'Crimson'
            },
            purple: {
                color: 'Purple'
            },
            yellow: {
                color: 'Yellow'
            }
        }
    }
});

export const Li = styled('li', {

    margin: "5rem 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    variants: {
        active: {
            true: {
                justifyContent: 'flex-start',
                paddingLeft: '3.5rem'
            },
        },
    },
})