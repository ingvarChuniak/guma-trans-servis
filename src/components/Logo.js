import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

const StyledLink = styled(Link)`
  outline: none;
  text-decoration: none;
  display: flex;
`;

const Text = styled.p`
  color: #3c1874;
  white-space: pre-line;
  text-align: left;
  font-weight: 600;
`;

const Image = styled.img`
  height: 5rem;
  width: auto;
`;

export default function Logo() {
  return (
    <StyledLink to="/">
      <Image src={logo} />
      <Text>
        ГУМА{'\n'}ТРАНС{'\n'}СЕРВІС
      </Text>
    </StyledLink>
  );
}
