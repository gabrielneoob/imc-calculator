import styled from "styled-components";

type TitleProps = {
  color: string
}

const TitleWrapper = styled.h1<TitleProps>`
  color: ${props => props.color};
  font-size: 3rem;
  letter-spacing: 1.9px;
  margin-bottom : 0.5rem;
`

export {TitleWrapper}