import type React from "react";
import { Container } from "./style";


type Props = React.ComponentProps<'button'> & {
  name: string
}

export const Button = ({name,...props}: Props) => {
  return (
    <Container {...props} >{name}</Container>
  )
}
