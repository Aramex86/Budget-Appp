import Sider from "antd/lib/layout/Sider";
import styled from "styled-components";

export interface SiderType {
  width?: string | number;
  style?: Record<string, string | number>;
  background?: string;
  height?: number | string;
}

const CustomSider = styled(Sider)(
  ({ style, width, background }: SiderType) => ({
    ...style,
    background: background,
  })
);

export default CustomSider;
