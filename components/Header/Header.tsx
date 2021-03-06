import { ReactNode } from "react";
import { HeaderType, StyledHeader } from "./Header.style";

interface IHeader extends HeaderType {
  children: ReactNode;
}

export function Header({ children, ...rest }: IHeader) {
  return <StyledHeader style={rest}>{children}</StyledHeader>;
}
