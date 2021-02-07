import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

//NavLogo
const Logo = styled(Link)`
  text-decoration: none;
  color: white;
`;

//NavBar
const StyledNav = styled.nav`
  height: 80px;
  width: auto;
  background: blue;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  padding: 0 1rem;
  @media only screen and (max-width: 500px) {
    position: relative;
  }
`;

//NavLinks
const StyleedUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 20px;
  list-style: none;
  @media only screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    text-align: center;
    width: 100%;
    top: 80px;
    left: -100%;
    transition: 0.5s all;
    ${(props) =>
      props.isOpened
        ? css`
            background: blue;
            left: 0;
          `
        : ''}
  }
`;

//NavItem
const StyledLi = styled.li`
  @media only screen and (max-width: 500px) {
    padding: 10px 0;
  }
`;

//NavLink
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  transition: 0.3s all;
  &:hover {
    color: red;
  }
`;

const Icon = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  @media only screen and (max-width: 500px) {
    display: flex;
  }
`;

export default function NavBar() {
  const [isOpened, setOpened] = useState(false);
  const handleClick = () => setOpened(!isOpened);
  const closeMenu = () => setOpened(false);

  return (
    <StyledNav>
      <Logo to="/">Logo</Logo>
      <Icon onClick={handleClick}> {isOpened ? <FiX /> : <FiMenu />} </Icon>
      <StyleedUl isOpened={isOpened}>
        <StyledLi>
          <StyledLink to="/" onClick={closeMenu}>
            ГОЛОВНА
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/about" onClick={closeMenu}>
            ПРО НАС
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/reviews" onClick={closeMenu}>
            ВІДГУКИ
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/contacts" onClick={closeMenu}>
            КОНТАКТИ
          </StyledLink>
        </StyledLi>
      </StyleedUl>
    </StyledNav>
  );
}
