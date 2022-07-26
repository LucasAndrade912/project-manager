import styled from 'styled-components'

export const Container = styled.div`
  min-width: 100%;
  background-color: #FFF;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15);
  margin-top: 2rem;
  
  :hover {
    cursor: move;
  }

  @media (max-width: 375px) {
    box-shadow: none;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 6.25rem;
  object-fit: cover;
  border-radius: 5px;

  @media (max-width: 375px) {
    height: 3.125rem;
  }
`

export const ProjectTitle = styled.h2`
  font-weight: normal;
  margin: 1rem 0;
  
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media (max-width: 375px) {
    font-size: 1rem;
    margin: 0.5rem 0;
  }
`

export const ProjectDescription = styled.p`
  font-size: 0.875rem;

  @media (max-width: 375px) {
    font-size: 0.625rem;
  }
`