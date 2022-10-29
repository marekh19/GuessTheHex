import styled from 'styled-components'

export const ColorFrameWrapper = styled.div`
  height: 30rem;
  background-color: ${(props) => props.color};
  max-width: 90%;
  margin: 2rem auto 0;
`
