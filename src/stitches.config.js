import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
    media: {
      sm: '(max-width: 640px)',
      md: '(max-width: 768px)',
      lg: '(max-width: 1024px)',
    },
});