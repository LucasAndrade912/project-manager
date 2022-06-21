import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`

export const Spinner = styled.div`
  width: ${(props: { size: string }) => {
		return props.size
	}};
  height: ${(props: { size: string }) => {
		return props.size
	}};;
  border: 3px solid rgba(0, 0, 0, 0.8);
  border-color: rgba(0, 0, 0, 0.8) transparent rgba(0, 0, 0, 0.8) transparent;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`