import { ReactNode } from "react";
import { IButtonType, TransactionBtn } from "./Button.style";

interface IButton extends IButtonType {
  children?: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  hoverColor?: string;
  hoverBackground?: string;
}
export default function TransactionButton({
  children,
  icon,
  onClick,
  type,
  hovercolor,
  hoverbackground,
  ...rest
}: IButton) {
  return (
    <TransactionBtn
      icon={icon}
      onClick={onClick}
      type={type}
      style={rest}
      hovercolor={hovercolor}
      hoverbackground={hoverbackground}
    >
      {children ? children : ""}
    </TransactionBtn>
  );
}
