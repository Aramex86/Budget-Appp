import { Header } from "antd/lib/layout/layout";
import styled from "styled-components";

export interface HeaderType {
  style?: Record<string, string | number>;
  width?: string | number;
  p?: string | number;
  pt?: string | number;
  pb?: string | number;
  pr?: string | number;
  background?: string;
  height?: string | number;
}

export const StyledHeader = styled(Header)(
  ({ style, background }: HeaderType) => ({
    ...style,
    background: background,
  })
);
