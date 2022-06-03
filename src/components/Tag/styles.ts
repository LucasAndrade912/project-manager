import styled from 'styled-components'

export const Container = styled.div`
  display: inline-block;
  margin-top: 1rem;
  margin-right: 0.75rem;
  padding: 0.5rem;
  border-radius: 3px;
  font-size: 0.875rem;
  background-color: ${(props: { color: string }) => {
		return props.color
	}}
`