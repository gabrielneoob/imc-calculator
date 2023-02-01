import styled from "styled-components";

type inputProps = {
  check: boolean;
}

const InputWrapper = styled.input<inputProps>`
  width: 100%;
  border: none;
  border-bottom: 2px solid #ddd;
  outline: none;

  opacity: ${props => props.check ? 0.5 : 1};

  padding: 10px 0;
  margin: 5px 0;
`

export {InputWrapper}