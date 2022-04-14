import styled from 'styled-components'

import { Title } from '../Projects/styles'

export const Image = styled.img`
  width: 100%;
  height: 12.5rem;
  object-fit: cover;
  border-radius: 5px;
`

export const ProjectTitle = styled(Title)`
  margin: 2rem 0;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProjectDescription = styled.p`
  margin-bottom: 1rem;
`

export const Subtitle = styled.h2`
  font-weight: normal;
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const AddTaskButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: rgba(0, 0, 0, 0.7);
  font-size: 1rem;
`

export const Tasks = styled.div`
  display: flex;
  flex-direction: column;
`