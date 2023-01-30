import styled from 'styled-components'

import { StyleReset } from '../ui/components/StyleReset'
import { colors } from '../ui/theme/colors'
import { mq } from '../ui/theme/mq'

export const Layout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-size: 4.8rem;
  ${mq.smallOnly} {
    font-size: 4rem;
  }
  margin-bottom: 2rem;
  font-weight: 400;
`

export const HexToGuess = styled.h2`
  font-size: 4rem;
  margin-bottom: 2rem;
  font-weight: 400;
`

export const GuessContainer = styled.main`
  width: 100%;
  max-width: 64rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mq.smallOnly} {
    flex-direction: column;
    gap: 1rem;
  }
`

export const Streak = styled.h3`
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 2rem;
`

export const Answer = styled(Streak)`
  font-size: 4.8rem;
  margin: 0;
`

export const ColorButton = styled.button<{
  color: string
  onClick: (color: string) => void
}>`
  ${StyleReset}
  border-radius: 1rem;
  border: 0.3rem solid ${colors.text.base};
  width: 20rem;
  height: 10rem;
  cursor: pointer;
  transition: scale 0.3s ease-in-out;
  ${mq.smallOnly} {
    height: 8rem;
  }

  &:hover {
    scale: 105%;
  }

  background-color: ${(props) => props.color};
`
