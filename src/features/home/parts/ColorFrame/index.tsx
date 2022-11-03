import type { FC } from 'react'

import { ColorFrameWrapper } from './styled'

type Props = {
  color: string
}

export const ColorFrame: FC<Props> = ({ color }) => {
  return <ColorFrameWrapper color={color} />
}
