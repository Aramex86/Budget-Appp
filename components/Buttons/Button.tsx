import { ReactNode } from "react";
import { IButtonType, StyledButton } from "./Button.style";

interface IButton extends IButtonType {
  children?: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
}
export function Button({ children, icon, onClick, type, ...rest }: IButton) {
  return (
    <StyledButton icon={icon} style={rest} onClick={onClick} type={type}>
      {children ? children : ""}
    </StyledButton>
  );
}
