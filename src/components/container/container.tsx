import React, { ReactNode } from "react";
import * as C from "./style"

type Props = {
  children: ReactNode
  flex?: boolean
  bg?: string
}

const Container = ({children, flex, bg}:Props):JSX.Element => {
  return (
    <C.ContainerWrapper bg={bg} flex={flex}>
      {children}
    </C.ContainerWrapper>
  )
}

export default Container