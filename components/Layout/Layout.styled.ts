import Layout from "antd/lib/layout";
import styled from "styled-components";

export interface LayoutType {
  width?: number | string;
}

const StyledLayout = styled(Layout)(({ style }: { style: LayoutType }) => ({
  height: "100vh",
  ...style,
}));

export default StyledLayout;
