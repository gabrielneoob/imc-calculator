import React, { ReactNode } from "react";
import * as C from "./style";
import upImg from "../../assets/imgs/up.png"
import downImg from "../../assets/imgs/down.png"

type Props = {
  bgColor: string;
  imgPath: "up" | "down";
  imcLevel: 'Magreza' | 'Normal' | 'Sobrepeso' | 'Obesidade';
  imcArr: [number, number];
  imcValue: number;
  children: ReactNode;

}


const Card = ({imgPath,bgColor, imcLevel, imcArr, children, imcValue}:Props) => {
  return (
    <C.CardWrapper imgPath={imgPath} bgColor={bgColor} >
      {children}
      <div>
        <img src={imgPath === "up" ? upImg : downImg} alt="" width="30px"  height='30px'/>
      </div>      
      <h2>{imcLevel}</h2>
      {imcValue && <span>Seu IMC é de {imcValue}</span>}
      <span>IMC está entre {imcArr[0]} e {imcArr[1]}</span>
      
    </C.CardWrapper>
  )
}

export default Card;