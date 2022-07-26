import { Colors } from "./../../helpers/enums/colors";
import { Tabs } from "antd";
import styled from "styled-components";

export interface StyleTabs {
  style?: Record<string, string | number>;
  color?: string;
  background?: string;
  width?: string | number;
  padding?: string | number;
  marginTop?: string | number;
}

const StylesTabs = styled(Tabs)(({ style, marginTop }: StyleTabs) => ({
  ".ant-tabs-nav-wrap": {
    justifyContent: "center",
  },

  ".ant-tabs-tab": {
    padding: "6px 16px",
  },

  ".ant-tabs-tab-btn:hover": {
    color: Colors.VistaBlue,
  },

  ".ant-tabs-tab.ant-tabs-tab-active  ": {
    background: `${Colors.VistaBlue}`,
  },
  ".ant-tabs-tab.ant-tabs-tab-active > div ": {
    color: `${Colors.White} !important`,
    background: `${Colors.VistaBlue}`,
    // padding: "3px 5px",
  },
  ".ant-tabs-ink-bar": {
    display: "none",
  },
  ...(marginTop && { marginTop: marginTop }),
  ...style,
}));

const StyledTabPane = styled(Tabs.TabPane)(({ style }: StyleTabs) => ({
  ...style,
}));

export { StylesTabs, StyledTabPane };
