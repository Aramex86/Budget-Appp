import { Colors } from "./../../helpers/enums/colors";
import { Menu } from "antd";
import styled from "styled-components";

export const StyledMenu = styled(Menu)`
  background: transparent;
  border-bottom: none;

  display: flex;
  flex-direction: column;

  a {
    padding: 10px;
    color: ${Colors.Black};
    display: flex;
    align-items: center;
  }

  a > span {
    margin-right: 18px;
  }

  a:hover {
    color: ${Colors.VistaBlue};
    font-weight: 900;
  }

  .ant-menu-item:hover {
    background-color: ${Colors.White};
    color: ${Colors.VistaBlue};
    font-weight: 900;
  }
  .ant-menu-item svg:hover {
    background-color: ${Colors.White};
    color: ${Colors.VistaBlue};
    font-weight: 900;
  }

  .ant-menu-item-selected {
    background-color: ${Colors.White} !important;
    color: ${Colors.VistaBlue};
    font-weight: 900;
  }

  .ant-menu-item-selected a {
    color: ${Colors.VistaBlue};
  }
  .ant-menu-item-active a {
    color: ${Colors.VistaBlue};
  }
`;
