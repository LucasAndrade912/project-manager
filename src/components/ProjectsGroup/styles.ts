import styled from 'styled-components'

export const Container = styled.div`
  width: 30%;

  @media (max-width: 375px) {
    width: 100%;
    margin-bottom: 1.5rem;
  }
`

export const Projects = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 375px) {
    flex-direction: row;
    overflow-x: auto;
    gap: 0.75rem;
  }
`