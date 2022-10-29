import styled, { css } from 'styled-components'

import { colors } from '../../theme/colors'
import { elevations } from '../../theme/elevations'
import { StyleReset } from '../StyleReset'

type ButtonProps = {
  size?: 'small' | 'medium' // in case we want smaller buttons somewhere
  accent?: 'primary' | 'secondary'
}

export const Button = styled.button<ButtonProps>`
  --text-color: ${colors.text.inverted};
  --background-color: ${colors.accent.base};
  --background-color-hover: ${colors.accent.baseDarker};
  ${StyleReset}
  padding: 0.8rem 5.4rem;
  border-radius: 0.8rem;
  color: var(--text-color);
  transition: background-color 0.3s;
  background-color: var(--background-color);
  ${elevations.shadow}
  text-transform: uppercase;
  font-size: 1.8rem;
  /**
   If we want to disable button in the future
   Some input is not filled = you can't submit form
  */
  &:disabled {
    --text-color: ${colors.text.subtle};
    --background-color: ${colors.background.lighter};
  }
  &:not(:disabled) {
    cursor: pointer;
    &:hover,
    &:focus {
      background-color: var(--background-color-hover);
    }
  }
  ${(props) =>
    props.accent === 'secondary' &&
    css`
      --background-color: ${colors.text.subtle};
      --background-color-hover: ${colors.background.lighter};
      --text-color: ${colors.text.base};
    `}
`
