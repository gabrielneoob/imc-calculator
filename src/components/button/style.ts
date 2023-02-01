import styled from "styled-components";

type BtnProps = {
  opacity: boolean;
}

const Btn = styled.button<BtnProps>`
  opacity: ${props => props.opacity ? 0.3 : 1};
  cursor: pointer;
  background-color: var(--btn-color);
  color: #fff;

  border:none;
  margin:10px 0;

  border-radius: 15px;

  padding: 20px 0;
  width: 100%;

  transition: 0.3s ease-in-out opacity;

  &:hover {
    opacity: 0.7;
  }
`

export {Btn}