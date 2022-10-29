import type { FC } from 'react'

import { ColorFrame } from './parts/ColorFrame'
import { Layout, Heading, GuessContainer } from './styled'

export const Home: FC = () => (
  <Layout>
    <Heading>Guess the Hex!</Heading>
    <GuessContainer>
      <ColorFrame />
    </GuessContainer>
  </Layout>
)
