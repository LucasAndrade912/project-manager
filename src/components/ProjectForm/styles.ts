import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`

export const Image = styled.img`
  width: 1.25rem;

  &:hover {
    cursor: pointer;
  }
`

export const Section = styled.section`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 1.125rem;
`

export const Input = styled.input`
  color: #0D0D0D;
  border: none;
  padding: 0.75rem;
  background-color: #D9D9D9;
  border-radius: 5px;
  margin-top: 0.5rem;
`

export const TextArea = styled.textarea`
  color: #0D0D0D;
  border: none;
  padding: 0.75rem;
  background-color: #D9D9D9;
  border-radius: 5px;
  height: 6.25rem;
  resize: none;
  margin-top: 0.5rem;
`

export const Tags = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
`

interface TagProps {
  color: string
  selected: boolean
}

export const Tag = styled.div`
  display: inline-block;
  margin-top: 1rem;
  margin-right: 0.75rem;
  padding: 0.5rem;
  border-radius: 3px;
  font-size: 0.875rem;
  background-color: ${(props: TagProps) => {
		return props.color
	}};
  outline: ${(props: TagProps) => {
		if (props.selected) {
			return '3px solid #1A51AB'
		}
	}};

  &:hover {
    cursor: pointer;
  }
`

export const Submit = styled.button`
  width: 100%;
  margin-top: 2rem;
  font-size: 1rem;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 5px;
  background-color: #226CDF;
  color: #FFF;
  text-align: center;
  padding: 1.125rem 0;

  &:hover {
    cursor: pointer;
  }
`

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`