import styled from "styled-components";

export interface BoxType {
  style?: any;
  paddingTop?: string | number;
  paddingBottom?: string | number;
  paddingRight?: string | number;
  paddingLeft?: string | number;
  display?: "block" | "flex";
  alignSelf?: "center" | "flex-start" | "flex-end";
  width?: number | "auto" | string;
  height?: number | "auto" | string;
  backgroundImage?: string;
  backgroundSize?: "cover" | "contain" | "auto";
  opacity?: number;

  justifyContent?:
    | "initial"
    | "space-between"
    | "center"
    | "space-around"
    | "space-evenly"
    | "flex-start"
    | "flex-end";
  textAlign?: "initial" | "center" | "left" | "right";
  alignItems?: "normal" | "center" | "start" | "end";
  flexDirection?: "row" | "column";
  border?: string;
  borderTop?: string;
  borderBottom?: string;
  color?: string;
  fontWeight?: number;
  overflow?: "auto";
  flexWrap?: "wrap";
  maxHeight?: string;
  padding?: string | number;
  margin?: string | number;
  marginTop?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  fontSize?: string | number;
  background?: string;
  position?: "inherit" | "absolute" | "relative" | "static";
  top?: string | number;
  bottom?: string | number;
  right?: string | number;
  left?: string | number;
  cursor?: "pointer" | string;
  borderRadius?: string;
  boxShadow?: string;
  overfolwX?: "hidden" | "scroll";
  overfolwY?: "hidden" | "scroll";
  textTransform?: "capitalize" | "lowercase" | "uppercase";
  transform?: string;
  zIndex?: number;
}

export const StyledBox = styled.div(({ style }: BoxType) => ({
  ...style,
}));
