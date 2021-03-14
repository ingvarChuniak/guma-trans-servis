import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo.js';
import Menu from '../components/MenuIcon.js';

const StyledNav = styled.nav`
  height: 80px;
  width: auto;
  background: #f3f3f3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  padding: 0 1rem;
  @media only screen and (max-width: 500px) {
    position: relative;
  }
`;

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
    background: #f3f3f3;
    transition: 0.5s all;
    left: ${(props) => (props.isOpened ? '0' : '-100%')};
  } ;
`;

const StyledLi = styled.li`
  @media only screen and (max-width: 500px) {
    padding: 10px 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #3c1874;
  transition: 0.3s all;
  &:hover {
    color: red;
  }
`;
const MenuWrapper = styled.div`
  display: none;
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
      <Logo />
      <MenuWrapper>
        <Menu eventHandler={handleClick} />
      </MenuWrapper>
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
