import { Colors } from "./../../helpers/enums/colors";
import { Radio, RadioProps } from "antd";
import styled from "styled-components";
import { CSSProperties } from "react";

export interface IRadionBtnProps extends RadioProps {
  style?: CSSProperties;
  background?: string;
}

export const StyledRadioBtn = styled(Radio.Button)(
  ({ style }: IRadionBtnProps) => ({
    "&.ant-radio-button-wrapper.ant-radio-button-wrapper-checked": {
      background: Colors.VistaBlue,
      color: Colors.White,
      border: "none",
      fontWeight: 500,
    },
    "&.ant-radio-button-wrapper.ant-radio-button-wrapper-checked:hover": {
      background: Colors.VistaBlue,
      border: "none",
    },
    "&.ant-radio-button-wrapper.ant-radio-button-wrapper-checked:focus-within":
      {
        boxShadow: `0 0 0 3px #74d2a842`,
      },
    "&.ant-radio-button-wrapper:hover": {
      color: Colors.Black,
    },
    "&.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before":
      {
        backgroundColor: "transparent",
      },

    ...style,
  })
);
