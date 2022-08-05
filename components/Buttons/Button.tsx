import { ReactNode } from "react";
import { IButtonType, StyledButton } from "./Button.style";

interface IButton extends IButtonType {
  children?: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}
export function Button({
  children,
  icon,
  onClick,
  type,
  disabled,
  ...rest
}: IButton) {
  return (
    <StyledButton
      icon={icon}
      style={rest}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children ? children : ""}
    </StyledButton>
  );
}
