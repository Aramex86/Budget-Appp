import { ReactNode } from "react";
import { IModalProps, StyledModal } from "./Modal.style";

interface IModal extends IModalProps {
  children: ReactNode;
  //   style?: Record<string, any>;
  visible?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
}

export function CustomModal({
  children,
  visible,
  onCancel,
  onOk,
  title,
  footer,
  ...rest
}: IModal) {
  return (
    <StyledModal
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      title={title}
      footer={footer}
    >
      {children}
    </StyledModal>
  );
}
