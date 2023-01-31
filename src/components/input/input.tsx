import React from "react";
import * as C from "./style"

type Props = {
  placeholder?: string;
  type: string;
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  value: any;


}

const Input = ({placeholder, type, onChange,id, value, ...rest}:Props):JSX.Element => {
  return (
     <C.InputWrapper 
     placeholder={placeholder}
     type={type}
     id={id}
     value={value}
     onChange={onChange}
     {...rest}
     />
  )
}

export default Input