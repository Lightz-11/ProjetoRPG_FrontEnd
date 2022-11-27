import { styled } from "../../stitches.config";

export const Container = styled("button", {
  background: "none",
  border: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: '0.2s',
  padding: '.2rem',

  variants: {
    color: {
      red: {
        border: '1px solid transparent',
        '&:hover': {
          border: '1px solid #ae0808ff',
        }
      },
      aqua: {
        border: '1px solid transparent',
        '&:hover': {
          border: '1px solid #03d9ffff',
        }
      }
    }
  },

});
