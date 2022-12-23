import { styled } from "../../stitches.config";

export const Container = styled("div", {
    width: "100%",
    height: "100vh",
    background: "rgb(20,20,20)",
    display: 'flex',
    flexDirection: 'column'
});

export const Body = styled("div", {
    marginTop: '7.3rem',
    overflowY: "auto",
    width: '100%',
    padding: "3rem 2rem 7rem 2rem",

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
