import styled from 'styled-components'

import { Input, Submit } from '../ProjectForm/styles'

export const Field = styled.div`
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  margin-top: 3.75rem;
`

export const InputField = styled(Input)`
  width: 70%;
  height: 100%;
  margin: 0;
`

export const SubmitButton = styled(Submit)`
  width: 25%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`