import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  height: 100vh;
`

export const LoginWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Welcome = styled.span`
  font-size: 0.875rem;
  margin: 64px 0;
`

export const LoginButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: #EEE;
  transition: .1s;

  :hover {
    background-color: #E7E7E7;
  }
`

export const Icon = styled.img`
  width: 1.875rem;
  margin-right: 0.5rem;
`

export const LogoWrapper = styled(LoginWrapper)`
  background: none;
`

export const Logo = styled.img`
  width: 40%;
`