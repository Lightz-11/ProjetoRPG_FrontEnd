import { styled } from '../../../../../stitches.config';

export const Container = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '0.5rem',
  textOverflow: 'clip',

})

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid transparent',
  background: 'none',
  padding: '1rem',
  borderRadius: '10px',
  transition: '.3s',
  gap: '1rem',
  fontSize: '2rem',
  color: 'white',

  variants: {
    level: {
      nt: {
        textShadow: '#cccccc 0 0 5px, #cccccc 0 0 10px',
        svg: {
          filter: 'drop-shadow(#cccccc 0 0 5px)'
        },
        '&:hover': {
          border: '2px solid #cccccc',
        }
      },
      t: {
        textShadow: '#0095ff 0 0 5px, #0095ff 0 0 10px',
        svg: {
          filter: 'drop-shadow(#0095ff 0 0 5px)'
        },
        '&:hover': {
          border: '2px solid #0095ff',
        }
      },
      v: {
        textShadow: '#0800ff 0 0 5px, #0800ff 0 0 10px',
        svg: {
          filter: 'drop-shadow(#0800ff 0 0 5px)'
        },
        '&:hover': {
          border: '2px solid #0800ff',
        }
      },
      e: {
        textShadow: '#7700ff 0 0 5px, #7700ff 0 0 10px',
        svg: {
          filter: 'drop-shadow(#7700ff 0 0 5px)'
        },
        '&:hover': {
          border: '2px solid #7700ff',
        }
      }
    }
  }


})

export const Span = styled('span', {
  textTransform: 'capitalize',
  fontWeight: 700,
  fontSize: '2rem',
  overflow: 'hidden',
  textOverflow: 'clip',

  variants: {
    level: {
      nt: {
        color: '#cccccc'
      },
      t: {
        color: '#0095ff'
      },
      v: {
        color: '#0800ff'
      },
      e: {
        color: '#7700ff'
      }
    }
  }
})