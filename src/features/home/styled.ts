import styled from 'styled-components'

export const Layout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-size: 4.5rem;
`

export const GuessContainer = styled.main`
  width: 100%;
  max-width: 70rem;
  border: 1px solid red;
`

export const ButtonContainer = styled.div`
  display: flex;
  border: 1px solid green;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 0;
`
