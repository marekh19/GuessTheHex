import { css } from 'styled-components'

export const elevations = {
  shadow: css`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `,
  elevate: {
    1: css`
      z-index: 1;
    `,
    2: css`
      z-index: 2;
    `,
    3: css`
      z-index: 3;
    `,
  },
}
