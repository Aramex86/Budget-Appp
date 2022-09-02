import { ReactNode } from "react";
import StyledLayout, { LayoutType } from "./Layout.styled";

interface ILayout extends LayoutType {
  children: ReactNode;
}

export function Layout({ children, ...rest }: ILayout) {
  return <StyledLayout style={{ ...rest }}>{children}</StyledLayout>;
}
