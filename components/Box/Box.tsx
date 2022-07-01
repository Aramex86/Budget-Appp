import { ReactNode } from "react";
import { BoxType, StyledBox } from "./Box.style";

interface IBox extends BoxType {
  children?: ReactNode;
}

export default function Box({ children, ...rest }: IBox) {
  return <StyledBox style={rest}>{children ? children : ""}</StyledBox>;
}
