import type { FC } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import { ColorFrameWrapper } from './styled'

const getRandomHex = (): string => {
  return `#${((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')}`
}

export const ColorFrame: FC = () => {
  const [color, setColor] = useState('')
  useEffect(() => {
    setColor(getRandomHex())
  }, [])
  return <ColorFrameWrapper color={color} />
}
