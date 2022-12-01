import { styled } from '../../../../../../stitches.config';

export const Container = styled('div', {

  minWidth: '30rem',
  borderRadius: '1.2rem',
  backgroundColor: 'rgb(27,27,27)',
  boxShadow: 'rgba(255, 255, 255, 0.45) 0rem 0.5rem 1.5rem',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',

  h5: {
    color: 'transparent'
  }

})

export const Header = styled('div', {

  width: '100%',
  height: '5rem',
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'left',
  background: 'rgb(20,20,20)',
  paddingTop: '1.2rem',
  paddingLeft: '2rem',

  h1: {
    color: 'purple',
    width: '92%',
    fontSize: '2.2rem',
    textAlign: 'left'
  },

})

export const CloseButton = styled('button', {

  fontSize: '3rem',
  border: 'none',
  background: 'none',
  color: 'white',
  fontWeight: 100,
  position: 'relative',
  bottom: '15%',
  marginRight: '2rem'

})

export const Body = styled('div', {

  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  paddingLeft: '2rem',
  color: 'white',
  marginRight: '2rem',
  paddingTop: '1rem',
  wordBreak: 'keep-all',

  h2: {
    display: 'flex',
    alignItems: 'baseline',
    fontSize: '3rem',
    wordBreak: 'keep-all'
  },
  h3: {
    display: 'flex',
    fontSize: '3rem',
    marginRight: '1rem',
    fontWeight: 'bold',
    wordBreak: 'keep-all'
  },
  h4: {
    display: 'flex',
    fontSize: '3rem',
    fontWeight: 'normal',
    wordBreak: 'keep-all'
  },
  h5: {
    wordBreak: 'keep-all'
  },

  '@sm': {
    h2: {
      fontSize: '2rem'
    },
    h3: {
      fontSize: '2rem',
    },
    h4: {
      fontSize: '2rem',
    }
  }
})

export const FooterTeste = styled('div', {
  display: 'flex',
  height: '100%',
  flexDirection: 'row',
  paddingLeft: '2rem',
  paddingBottom: '1rem',
  paddingTop: '2rem',
  color: '#e7e7e7b9',

  h2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  h3: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '.5rem',
    fontWeight: 'bold'
  },
  h4: {
    marginRight: '.3rem',
    fontWeight: 'normal'
  },

  '@sm': {
    h2: {
      fontSize: '1rem'
    }
  }
})

export const FooterDano = styled('div', {

  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  paddingLeft: '2rem',
  paddingBottom: '1rem',
  paddingTop: '2rem',
  color: '#e7e7e7b9',
  gap: '.5rem',

  h2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  h3: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '.5rem',
    fontWeight: 'bold'
  },
  h4: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '.3rem',
    fontWeight: 'normal'
  },

  '@sm': {
    h3: {
      fontSize: '1.3rem'
    },
    h4: {
      fontSize: '1.3rem'
    }
  }
})