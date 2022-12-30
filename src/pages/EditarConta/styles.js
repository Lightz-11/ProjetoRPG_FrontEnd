import { styled } from "../../stitches.config"
import BackgroundImage from "../../assets/img/Home-Background50.jpg";

export const Container = styled('div', {

    width: "100%",
    height: "100vh",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',

    hr: {
        borderColor: 'White'
    }

})

export const Body = styled('div', {

    width: '100%',
    padding: '5rem 0rem 0rem 0rem',
    marginTop: '7.3rem',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',

    '@md5': {
        padding: '5rem 0rem 5rem 0rem',
    }

})

export const Body1 = styled('div', {
    height: 'auto',
    justifyContent: 'center',

    display: 'grid',
    gridTemplateColumns: '45% 45%',
    gridColumnGap: '6rem',

    '@sm3': {
        gridTemplateColumns: '80%'
    }

})

export const Body2 = styled('div', {
    height: 'auto',
    justifyContent: 'center',

    display: 'grid',
    gridTemplateColumns: '50%',

    '@sm3': {
        gridTemplateColumns: '90%'
    },
})

export const Footer = styled('div', {
    textAlign: 'center',

    '@sm3': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }
})

export const Button = styled('button', {
    width: '24rem',
    height: '5rem',
    margin: '3rem',
    border: 'none',
    color: 'white',
    borderRadius: '8px',
    fontFamily: 'Crimson Text',
    fontSize: '2.6rem',
    cursor: 'pointer',

    '@sm4': {
        fontSize: '1.6rem',
        width: '16rem',
        height: '4rem'
    },

    variants: {
        color: {
            crismon: {
                backgroundColor: '#b91313ff',

                '&:hover': {
                    backgroundColor: '#9c1111ff',
                },
            },
            blue: {
                backgroundColor: '#4f1db4',

                '&:hover': {
                    backgroundColor: '#3f178f',
                },
            }
        }
    },

    defaultVariants: {
        color: 'crismon'
    }
})