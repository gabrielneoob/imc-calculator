import styled from "styled-components";

type CardProps = {
  bgColor: string;
  imgPath: string;
  imcLevel: string;
  imcValue?: number;
}

const CardWrapper = styled.div<CardProps>`
  background-color: ${props => props.bgColor};
  
  display: grid;
  padding:1.3rem 1rem 1rem 1rem;
  justify-content: center;
  text-align: center;

  color: #fff;
  font-weight: 700;

  border-radius: 15px;

  div {
    width:70px;
    height: 70px;
    justify-self:center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.2);
    border-radius: 50%;
  }
  


`

export {CardWrapper}