import { createStitches } from "@stitches/react";

export const { styled, css, keyframes } = createStitches({
    media: {
        sm: "(max-width: 740px)",
        md: "(max-width: 840px)",
        lg: "(max-width: 1024px)",

        sm2: "(max-width: 280px)",
        md2: "(max-width: 680px)",
        lg2: "(max-width: 980px)",

        sm3: "(max-width: 980px)",
        md3: "(max-width: 1080px)",
        lg3: "(max-width: 1180px)",

        sm4: "(max-width: 750px)",
        md4: "(max-width: 1300px)",
        lg4: "(max-width: 1440px)",
    }
});
