import { Input, InputProps } from "antd";
import styled from "styled-components";

export interface IInput extends InputProps {
  width?: string;
  borderColor?: string;
}

export const StyledInput = styled(Input)(({ borderColor, style }: IInput) => ({
  borderColor: borderColor,
  ...style,
}));
