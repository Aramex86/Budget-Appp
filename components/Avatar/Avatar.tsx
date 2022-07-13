import { ReactNode } from "react";
import { AvatarType, StyledAvatar } from "./Avatar.style";

interface IAvatar extends AvatarType {
  icon?: ReactNode;
}

export function AntAvatar({ style, icon, src, size, ...rest }: IAvatar) {
  return <StyledAvatar style={rest} icon={icon} src={src} size={size} />;
}
