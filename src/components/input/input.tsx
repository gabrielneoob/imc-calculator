import React from "react";
import * as C from "./style"

type Props = {
  placeholder?: string;
  type: string;
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  value: any;
  disabled: boolean;


}

const Input = ({placeholder, type, onChange,id, value, disabled, ...rest}:Props):JSX.Element => {
  return (
     <C.InputWrapper 
     check={disabled}
     placeholder={placeholder}
     type={type}
     id={id}
     value={value}
     onChange={onChange}
     disabled={disabled}
     {...rest}
     />
  )
}

export default Input