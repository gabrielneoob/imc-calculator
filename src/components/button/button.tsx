import React, { ReactNode } from "react";
import { Btn } from "./style";

type Props = {
  children: ReactNode;
  onClick: (e:React.FormEvent) => void;
  opacity: boolean;
}

const Button = ({children, onClick, opacity}: Props) => {
  return (
    <Btn 
    disabled
    opacity={opacity}
    type="button"
    onClick={onClick}>{children}</Btn>
  )
}

export default Button