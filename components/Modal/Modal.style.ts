import styled from "styled-components";
import { Modal, ModalProps } from "antd";

export interface IModalProps extends ModalProps {}

export const StyledModal = styled(Modal)(({ style }: IModalProps) => ({
  ...style,
}));
