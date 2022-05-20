import styled from 'styled-components'

import { ITag } from '../../types'

export const Container = styled.div`
  display: inline-block;
  margin-top: 1rem;
  margin-right: 0.75rem;
  padding: 0.5rem;
  border-radius: 3px;
  font-size: 0.875rem;
  background-color: ${({ color }: ITag) => {
		return color
	}}
`