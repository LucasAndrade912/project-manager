import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  height: 100vh;

  @media (max-width: 545px) {
    flex-direction: column-reverse;
    justify-content: center;
    background-color: #FFF;
  }
`

export const LoginWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFF;

  @media (max-width: 545px) {
    width: 100%;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;

  @media (max-width: 545px) {
    font-size: 2rem;
  }
`

export const Welcome = styled.span`
  font-size: 0.875rem;
  margin: 64px 0;
  text-align: center;

  @media (max-width: 545px) {
    margin: 2.5rem 0;
    max-width: 90%;
  }
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

  @media (max-width: 545px) {
    font-size: 0.875rem;
  }
`

export const Icon = styled.img`
  width: 1.875rem;
  margin-right: 0.5rem;

  @media (max-width: 545px) {
    width: 1.5rem;
  }
`

export const LogoWrapper = styled(LoginWrapper)`
  background: none;

  @media (max-width: 545px) {
    margin-bottom: 3.5rem;
  }
`

export const Logo = styled.img`
  width: 40%;

  @media (max-width: 545px) {
    width: 7.5rem;
  }
`