import React, { ReactNode } from "react";
import * as C from "./style";
import upImg from "../../assets/imgs/up.png"
import downImg from "../../assets/imgs/down.png"
import Button from "../button";

type Props = {
  bgColor: string;
  imgPath: "up" | "down";
  imcLevel: 'Magreza' | 'Normal' | 'Sobrepeso' | 'Obesidade';
  imcArr: [number, number];
  imcValue: number | undefined;
  children: ReactNode;
  onlyCard?: boolean;

}


const Card = ({imgPath,bgColor, imcLevel, imcArr, children, imcValue, onlyCard}:Props) => {
  return (
    <C.CardWrapper imgPath={imgPath} bgColor={bgColor} onlyCard={onlyCard}>
      {children}
      <div>
        <img src={imgPath === "up" ? upImg : downImg} alt="" width="30px"  height='30px'/>
      </div>      
      <h2>{imcLevel}</h2>
      {imcValue && <span style={{fontWeight: 'normal', marginBottom: '1.5rem'}}>Seu IMC é de {imcValue} kg/m</span>}
      <span>IMC está entre {imcArr[0]} e {imcArr[1]}</span>
      {imcValue && <Button disabled={false} opacity={false} onClick={() => {
        
      }}>sair</Button>}
      
    </C.CardWrapper>
  )
}

export default Card;