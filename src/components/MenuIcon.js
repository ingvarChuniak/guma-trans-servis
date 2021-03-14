import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 3rem;
  height: 3rem;
`;

const Span = styled.span`
  background: #3c1874;
  border-radius: 10px;
  height: 0.7rem;
  margin: 0.3rem 0;
  transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  &:nth-child(2) {
    width: 50%;
  }
  &:nth-child(3) {
    width: 100%;
  }
  &:nth-child(4) {
    width: 75%;
  }
`;

const Input = styled.input`
  display: none;
  &:checked ~ span:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotatez(45deg) translate(7px, 0px);
  }
  &:checked ~ span:nth-of-type(2) {
    transform-origin: top;
    transform: rotatez(-45deg);
  }
  &:checked ~ span:nth-of-type(3) {
    transform-origin: bottom;
    width: 50%;
    transform: rotatez(45deg) translate(8px, -22px);
  }
`;

export default function MenuIcon(props) {
  return (
    <Label htmlFor="check">
      <Input id="check" type="checkbox" onClick={props.eventHandler} />
      <Span />
      <Span />
      <Span />
    </Label>
  );
}
