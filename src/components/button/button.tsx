import React, { ReactNode } from "react";
import { Btn } from "./style";

type Props = {
  children: ReactNode;
  onClick: () => void;
  opacity: boolean;
  disabled: boolean;
}

const Button = ({children, onClick, opacity, disabled}: Props) => {
  return (
    <Btn 
    disabled={disabled}
    opacity={opacity}
    type="button"
    onClick={onClick}>{children}</Btn>
  )
}

export default Button