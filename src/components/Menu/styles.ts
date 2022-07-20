import styled from 'styled-components'

export const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 2rem;
  background-color: #FFF;
  
  @media (max-width: 375px) {
    height: auto;
    padding: 0.75rem 1.5rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const Logo = styled.img`
  width: 5rem;
  margin-bottom: 10rem;

  @media (max-width: 375px) {
    width: 2.25rem;
    margin: 0;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 375px) {
    display: none;
  }
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
  background-color: #226CDF;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  margin-bottom: 3.75rem;
  transition: 0.2s;
  
  &:hover {
    background-color: #1A51AB;
  }
`

export const ButtonIcon = styled.img`
  width: 1.5rem;
`

export const MenuHamburger = styled.img`
  width: 2.25rem;

  @media (min-width: 375px) {
    display: none;
  }
`

export const MenuExpanded = styled.div`
  position: sticky;
  top: 60px;
  background-color: #FFF;
`

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  padding: 0.75rem 1.5rem;
  width: 100%;
  display: flex;
`

export const MenuButtonIcon = styled.img`
  width: 1.125rem;
  margin-right: 0.75rem;
`