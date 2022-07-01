import { Switch, SwitchProps } from "antd";
import styled from "styled-components";

export interface Iprops extends SwitchProps {
  borderRadius?: string | number;
  background?: string;
  border?: string;
  color?: string;
  innerColor?: string;
}

export const StyledSwitch = styled(Switch)(
  ({ border, color, innerColor, background, borderRadius, style }: Iprops) => ({
    borderRadius: borderRadius,
    background: background,
    border: border,
    ...style,
  })
);
