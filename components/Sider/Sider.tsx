import { ReactNode } from "react";
import CustomSider, { SiderType } from "./Sider.style";

interface ISider extends SiderType {
  children: ReactNode;
}

export function Sider({ children, ...rest }: ISider) {
  return <CustomSider style={{ ...rest }}>{children}</CustomSider>;
}
