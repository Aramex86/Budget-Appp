import React, { ReactNode } from "react";
import { IRadionBtnProps, StyledRadioBtn } from "./RadioBtn.styled";

interface IRadioBtn extends IRadionBtnProps {
  children?: ReactNode;
  value?: string;
}

export function RadioBtn({ children, value, ...rest }: IRadioBtn) {
  return (
    <StyledRadioBtn value={value} style={rest}>
      {children}
    </StyledRadioBtn>
  );
}
