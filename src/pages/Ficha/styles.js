import { styled, keyframes } from "../../stitches.config";

export const Container = styled("div", {
  width: "100%",
  height: "100vh",
  background: "rgb(20,20,20)",
  display: 'flex',
  flexDirection: 'column',
  overflowX: 'hidden',

  p: {
    color: 'white',
    fontSize: '2rem'
  }
});

export const Body = styled("div", {
  overflowY: "auto",
  marginTop: '7.3rem',
  width: '100%',
  padding: "3rem 2rem 1rem 2rem",
  overflowX: 'hidden',

  hr: {
    borderColor: "#ffffff75",
  },

  '@md5': {
    padding: "3rem 2rem 7rem 2rem",
  },

  variants: {
    low: {
      true: {
        paddingBottom: "7rem"
      }
    }
  }
});

export const DoubleParteContainer = styled("div", {
  display: "grid",
  paddingRight: '2rem',
  gridColumnGap: "2rem",
  gridTemplateColumns: '50% 50%',
  width: '100%',

  "@lg3": {
    paddingRight: '0rem',
    gridTemplateColumns: '100%',
  },
});

export const DoubleParteColumnContainer = styled('div', {

  display: 'grid',


})

export const ParteImgModal = styled('div', {
  height: '95vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',

  img: {
    objectFit: 'contain'
  }
})

const scaleUpImgModal = keyframes({
  '0%': {
    width: '20%',
    opacity: 0
  },

  '100%': {
    width: '100%',
    opacity: 1
  },
});

export const ImgModal = styled('img', {

  animation: `${scaleUpImgModal} 300ms`,
  width: '100%'

})
