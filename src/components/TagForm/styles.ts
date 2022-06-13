import styled from 'styled-components'

import { Input } from '../ProjectForm/styles'
import { Field } from '../TaskForm/styles'

export const Container = styled(Field)`
  height: auto;
  flex-direction: column;
`

export const InputField = styled(Input)`
  width: 100%;
`

export const Colors = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`

interface Props {
  color: string | undefined
}

export const Color = styled.div`
  border-radius: 5px;
  width: 1.875rem;
  height: 1.875rem;
  margin-right: 1.5rem;
  background-color: ${(props: Props) => {
		if (props.color) {
			return props.color
		}
	}};

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
  }
`

export const Tag = styled.div`
  display: inline-block;
  padding: 0.5rem;
  margin: 2.5rem auto;
  border-radius: 5px;
  text-align: center;
  background-color: ${(props: Props) => {
		if (props.color) {
			return props.color
		}
	}};
`