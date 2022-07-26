import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  padding: 2.5rem;
  overflow-x: visible;
`

export const Title = styled.h1`
  font-size: 2.125rem;
  font-weight: normal;
  margin-bottom: 2.5rem;

  @media (max-width: 375px) {
    display: none;
  }
`

export const AllProjects = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 375px) {
    flex-direction: column;
  }
`