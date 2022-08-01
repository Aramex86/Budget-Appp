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
}

// const ButtonIcon = styled(Button)(
//   ({ color, active, background, fontWeight }: IButtonType) => `
//   &.ant-btn:focus{
//     color:${active ? `${color}` : ` ${Colors.SilverSand}`} !important;
//   }
//   .ant-btn-icon-only > span {
//     color: ${color};
//   }
//   .ant-btn{
//     color:${active ? "#000" : ` ${Colors.SilverSand}`} !important;
//     font-weight:${active ? 400 : 0} !important;
//     background:${background};
//   }

//   &.ant-btn:hover,&.ant-btn:focus{
//     color:${Colors.White} ;
//     background:${background};
//   }

//   `
// );

const StyledButton = styled(Button)(({ style }: IButtonType) => ({
  ...style,
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
