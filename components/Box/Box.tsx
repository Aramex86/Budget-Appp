import { ReactNode } from "react";
import { BoxType, StyledBox } from "./Box.style";

interface IBox extends BoxType {
  children?: ReactNode;
  onClick?: () => void;
}

export function Box({ children, onClick, ...rest }: IBox) {
  return (
    <StyledBox style={rest} onClick={onClick}>
      {children ? children : ""}
    </StyledBox>
  );
}
