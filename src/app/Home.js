import styled from 'styled-components';
import product from '../cat17567_b.jpg';

const StyledWrapper = styled.div`
  font-size: '2rem';
  display: 'flex';
  justify-content: 'center';
  margin-top: '2rem';
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ProductPosition = styled.div`
  border-radius: 10px;
  margin: 20px;
  width: 340px;
  height: 200px;
  border: 3px solid;
  border-color: #3c1874;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Image = styled.img`
  height: 150px;
  width: auto;
`;

const Span = styled.span`
  color: #3c1874;
  white-space: pre-line;
  font-size: 1.2rem;
  text-align: left;
  font-weight: 600;
`;

export default function Home() {
  return (
    <StyledWrapper>
      <ProductPosition>
        <Image src={product} />
        <Span>
          Lanvigator{'\n'}Т706{'\n'}385/65 R22.5{'\n'}160L
        </Span>
      </ProductPosition>
    </StyledWrapper>
  );
}
