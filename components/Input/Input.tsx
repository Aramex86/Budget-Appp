import { ReactNode } from "react";
import { IInput, StyledInput } from "./Input.style";

interface InputProps extends IInput {
  prefix?: ReactNode;
  suffix?: ReactNode;
  placeholder?: string;
  bordered?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function AntInput({
  suffix,
  bordered,
  placeholder,
  prefix,
  size,
  onChange,
  type,
  value,
  ...rest
}: InputProps) {
  return (
    <StyledInput
      size={size}
      style={rest}
      suffix={suffix}
      value={value}
      prefix={prefix}
      placeholder={placeholder}
      bordered={bordered}
      onChange={onChange}
      type={type}
    />
  );
}
