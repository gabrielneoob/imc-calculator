import styled from "styled-components";

type ContainerProps = {
  bg?: string;
  flex?: boolean;
}

const ContainerWrapper = styled.div<ContainerProps>`
  display: flex;
  max-width: 1100px;
  gap:4rem;
  /* display: ${props => props.flex ? 'flex' : 'block'};
  background-color: ${props => props.bg}; */

  /* a {
    transition: 0.4s ease-in-out color;

    &:hover {
      color: #fff;
    }
  } */

  
`

export {ContainerWrapper}