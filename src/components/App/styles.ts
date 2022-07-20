import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 375px) {
    flex-direction: column;
  }
`