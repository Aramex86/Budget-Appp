import styled from "styled-components";

export interface BoxType {
  // style?: Record<string, string | number | any>;
  style?: React.CSSProperties;
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

  // textAlign?: "start" | "center" | "left" | "right" | "top" | "bottom";
  alignItems?: "normal" | "center" | "start" | "end" | "baseline";
  flexDirection?: "row" | "column";
  border?: string;
  borderTop?: string;
  borderBottom?: string;
  color?: string;
  fontWeight?: number;
  flexWrap?: "wrap" | "nowrap";
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
  cursor?: "pointer" | "no-drop" | string;
  borderRadius?: string | number;
  boxShadow?: string;
  overflowX?: "hidden" | "scroll" | "auto";
  overflowY?: "hidden" | "scroll" | "auto";
  overflow?: "hidden" | "auto";
  whiteSpace?: "nowrap" | "normal";
  textTransform?: "capitalize" | "lowercase" | "uppercase";
  transform?: string;
  zIndex?: number;
  gap?: number | string;
  filter?: any;
}

export const StyledBox = styled.div(({ filter, style }: BoxType) => ({
  ...style,
  filter: filter,
}));
