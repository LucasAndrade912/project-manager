import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 2rem;
  background-color: #FFF;
`

export const Logo = styled.img`
  width: 5rem;
  margin-bottom: 10rem;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Button = styled.button`
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1A51AB;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  margin-bottom: 3.75rem;
  transition: 0.1s;
  
  :hover {
    background-color: #1E5BBE;
  }
`

export const ButtonIcon = styled.img`
  width: 1.5rem;
`

export const Main = styled.main`
  width: 100%;
  padding: 2.5rem;
`

export const Title = styled.h1`
  font-size: 2.125rem;
  font-weight: normal;
  margin-bottom: 2.5rem;
`

export const AllProjects = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ProjectsWrapper = styled.div`
  width: 30%;
`