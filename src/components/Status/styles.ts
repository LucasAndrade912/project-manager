import styled from 'styled-components'

type Status = {
  status: 'to-do' | 'in-progress' | 'done'
}

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const StatusColor = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: ${({ status }: Status) => {
		if (status === 'to-do') {
			return '#FF1313'
		} else if (status === 'in-progress') {
			return '#27FD89'
		} else {
			return '#16ABFE'
		}
	}};
`

export const StatusTitle = styled.p`
  font-size: 1.125rem;
  margin-left: 0.625rem;
`