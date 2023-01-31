import React, { ReactNode } from 'react'
import { TitleWrapper } from './style'

type Props = {
  color: string
  children: ReactNode
}

const Title = ({color, children}:Props) => {
  return (
    <TitleWrapper color={color}>{children}</TitleWrapper>
  )
}

export default Title