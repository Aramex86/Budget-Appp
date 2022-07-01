import { ReactNode } from "react";
import StyledLayout from "./Layout.styled";

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children, ...rest }: ILayout) {
  return <StyledLayout style={{ ...rest }}>{children}</StyledLayout>;
}
