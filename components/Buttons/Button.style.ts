import { Colors } from "../../helpers/enums/colors";
import { Button, ButtonProps } from "antd";
import styled from "styled-components";

export interface IButtonType extends ButtonProps {
  border?: string;
  color?: string;
  width?: string | number;
  height?: string | number;
  boxShadow?: string;
  marginRight?: string | number;
  marginBottom?: string | number;
  borderRadius?: string | number;
  backgroundColor?: string;
  fontWeight?: number;
  hovercolor?: string;
  position?: "inherit" | "absolute" | "relative" | "static";
  top?: string | number;
  bottom?: string | number;
  right?: string | number;
  left?: string | number;
  transform?: string;
  display?: "block" | "flex";
  justifyContent?:
    | "initial"
    | "space-between"
    | "center"
    | "space-around"
    | "space-evenly"
    | "flex-start"
    | "flex-end";
  textAlign?: "initial" | "center" | "left" | "right";
  alignItems?: "normal" | "center" | "start" | "end" | "baseline";
  padding?: number | string;
  fontSize?: number | string;
}

const StyledButton = styled(Button)(({ style }: IButtonType) => ({
  ...style,
  "&.ant-btn[disabled], &.ant-btn[disabled]:hover, &.ant-btn[disabled]:focus, &.ant-btn[disabled]:active":
    {
      color: "rgba(0, 0, 0, 0.25) !important",
      borderColor: " #d9d9d9 !important",
      background: "#f5f5f5 !important",
      textShadow: "none !important",
      boxShadow: "none !important",
    },
}));

const TransactionBtn = styled(StyledButton)(
  ({ style, ...rest }: IButtonType) => ({
    ...style,
    "&.ant-btn:hover,&.ant-btn:focus,&.ant-btn:active": {
      color: Colors.VistaBlue,
      backgroundColor: Colors.CloudBurst,
    },
  })
);

export { StyledButton, TransactionBtn };
