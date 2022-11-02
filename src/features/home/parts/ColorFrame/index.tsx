import type { FC } from 'react'
import { useState, useEffect } from 'react'

import { ColorFrameWrapper } from './styled'

const getRandomHex = (): string => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

export const ColorFrame: FC = () => {
  const [color, setColor] = useState('')
  useEffect(() => {
    setColor(getRandomHex())
  }, [])

  return <ColorFrameWrapper color={color} />
}
