import { Avatar, AvatarProps } from "antd";
import styled from "styled-components";

export interface AvatarType extends AvatarProps {
  style?: Record<string, any>;
  background?: string;
  position?: "inherit" | "absolute" | "relative" | "static";
  top?: string | number;
  bottom?: string | number;
  right?: string | number;
  left?: string | number;
  transform?: string;
  width?: number | "auto" | string;
  height?: number | "auto" | string;
  borderRadius?: string;
}

export const StyledAvatar = styled(Avatar)(({ style }: AvatarType) => ({
  ...style,
}));
