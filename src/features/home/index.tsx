import type { FC } from 'react'
import { useState, useEffect } from 'react'

import {
  Layout,
  Heading,
  GuessContainer,
  ColorButton,
  HexToGuess,
  Streak,
  Answer,
} from './styled'

const getRandomHex = (): string => {
  return `#${((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')}`
}

export const Home: FC = () => {
  const [correctColor, setCorrectColor] = useState('')
  const [wrongColors, setWrongColors] = useState<string[]>([])
  const [currentStreak, setCurrentStreak] = useState<number>(0)
  const [nextRoundLoading, setNextRoundLoading] = useState(false)
  const [isGuessCorrect, setIsGuessCorrect] = useState(false)

  useEffect(() => {
    setCorrectColor(getRandomHex())
    setWrongColors([getRandomHex(), getRandomHex()])
  }, [])

  useEffect(() => {
    if (nextRoundLoading) {
      setCorrectColor(getRandomHex())
      setWrongColors([getRandomHex(), getRandomHex()])
      const timer = setTimeout(() => {
        setNextRoundLoading(false)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [nextRoundLoading])

  const colors = [...wrongColors, correctColor]
  colors.sort(() => 0.5 - Math.random())

  const evaluateGuessIsCorrect = (color: string) => {
    if (color === correctColor) {
      setCurrentStreak((prev) => prev + 1)
      setIsGuessCorrect(true)
    } else {
      setCurrentStreak(0)
      setIsGuessCorrect(false)
    }
    setNextRoundLoading(true)
  }

  return (
    <Layout>
      {!nextRoundLoading && (
        <>
          <Heading>Guess the Hex!</Heading>
          <HexToGuess>{correctColor.toUpperCase()}</HexToGuess>
          <Streak>Streak: {currentStreak}</Streak>
          <GuessContainer>
            <ColorButton
              color={colors[0]}
              onClick={() => evaluateGuessIsCorrect(colors[0])}
            />
            <ColorButton
              color={colors[1]}
              onClick={() => evaluateGuessIsCorrect(colors[1])}
            />
            <ColorButton
              color={colors[2]}
              onClick={() => evaluateGuessIsCorrect(colors[2])}
            />
          </GuessContainer>
        </>
      )}
      {nextRoundLoading && (
        <Answer>{isGuessCorrect ? 'Correct! 🚀' : 'Wrong 😟'}</Answer>
      )}
    </Layout>
  )
}
