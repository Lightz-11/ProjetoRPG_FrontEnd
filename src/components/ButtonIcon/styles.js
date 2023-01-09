import { styled } from "../../stitches.config";

export const Container = styled("button", {
  background: "none",
  width: 'fit-content',
  border: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: '0.2s',
  padding: '.2rem',
  borderRadius: '5px',

  variants: {
    color: {
      red: {
        border: '2px solid transparent',
        '&:hover': {
          border: '2px solid #ae0808ff',
        }
      },
      aqua: {
        border: '2px solid transparent',
        '&:hover': {
          border: '2px solid #03d9ffff',
        }
      }
    }
  },

});
