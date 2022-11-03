import type { FC } from 'react'
import { useState, useEffect } from 'react'

import { ColorFrame } from './parts/ColorFrame'
import { Layout, Heading, GuessContainer, ButtonContainer } from './styled'

import { Button } from '../ui/components/Button'

const getRandomHex = (): string => {
  return `#${((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')}`
}

export const Home: FC = () => {
  const [correctColor, setCorrectColor] = useState('')
  const [wrongColors, setWrongColors] = useState<string[]>([])
  useEffect(() => {
    setCorrectColor(getRandomHex())
    setWrongColors([getRandomHex(), getRandomHex()])
  }, [])

  const colors = [...wrongColors, correctColor]
  colors.sort(() => 0.5 - Math.random())
  console.log(correctColor)

  const evaluateGuessIsCorrect = (color: string) => {
    if (color === correctColor) {
      // TODO: implement proper answer showing
      alert('CORRECT!')
    } else {
      alert('WRONG!')
    }
  }

  return (
    <Layout>
      <Heading>Guess the Hex!</Heading>
      <GuessContainer>
        <ColorFrame color={correctColor} />
        <ButtonContainer>
          {colors.map((c) => (
            <Button key={c} onClick={() => evaluateGuessIsCorrect(c)}>
              {c}
            </Button>
          ))}
        </ButtonContainer>
      </GuessContainer>
    </Layout>
  )
}
