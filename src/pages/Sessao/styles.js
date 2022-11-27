import { styled } from "../../stitches.config";

export const Container = styled("div", {
    width: "100%",
    height: "100vh",
    background: "rgb(20,20,20)",
});

export const Header = styled("div", {
    height: "auto",
    background: "rgb(15,15,15)",
    padding: "1.5rem 0",

    h1: {
        color: "Purple",
        textAlign: "center",
        fontSize: "3.5rem",
        textShadow: "4px 3px 2px black",
    },
});

export const Body = styled("div", {
    overflowY: "auto",
    height: "100%",
    width: '100%',
    padding: "2rem",
    paddingBottom: "7rem",

    hr: {
        borderColor: "#ffffff75",
    },
});

export const DoubleParteContainer = styled("div", {
    display: "flex",
    flexDirection: 'row',
    gridColumnGap: "2rem",
    width: '100%',

    "@lg3": {
        flexDirection: "column",
    },
});
