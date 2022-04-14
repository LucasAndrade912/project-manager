import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
`

export const Checkmark = styled.span`
  position: relative;
  display: block;
  width: 1.125rem;
  height: 1.125rem;
  background: none;
  border: 2px solid black;
  border-radius: 2px;
  cursor: pointer;
`

export const Checkbox = styled.input`
  z-index: 2;
  position: absolute;
  opacity: 0;
  width: 1.125rem;
  height: 1.125rem;
  cursor: pointer;

  &:checked + ${Checkmark}:after {
    content: '';
    position: absolute;
    left: 3px;
    width: 4px;
    height: 8px;
    border: solid black;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`

export const TaskLabel = styled.label`
  font-size: 15px;
  margin-left: 0.5rem;
`