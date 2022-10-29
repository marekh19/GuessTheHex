import type { FC } from 'react'

import { ColorFrameWrapper } from './styled'

// const getRandomHex = (): string => {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16)
// }

export const ColorFrame: FC = () => {
  // const [color, setColor] = useState(getRandomHex())
  // return <ColorFrameWrapper color={color} />
  return <ColorFrameWrapper color="red" />
}
