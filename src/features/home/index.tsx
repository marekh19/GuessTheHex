import type { FC } from 'react'

import { ColorFrame } from './parts/ColorFrame'
import { Layout, Heading, GuessContainer } from './styled'

import { Button } from '../ui/components/Button'

export const Home: FC = () => (
  <Layout>
    <Heading>Guess the Hex!</Heading>
    <GuessContainer>
      <ColorFrame />
      <Button />
      <Button />
      <Button />
    </GuessContainer>
  </Layout>
)
