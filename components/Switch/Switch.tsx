import { ReactNode } from "react";
import { Iprops, StyledSwitch } from "./Switch.style";

interface SwitchProps extends Iprops {
  checkedChildren?: ReactNode;
  unCheckedChildren?: ReactNode;
  onChange?: () => void;
  defaultChecked?: boolean;
}

export function Switch({
  checkedChildren,
  unCheckedChildren,
  onChange,
  defaultChecked = false,
  ...rest
}: SwitchProps) {
  return (
    <StyledSwitch
      style={rest}
      checkedChildren={checkedChildren}
      unCheckedChildren={unCheckedChildren}
      onChange={onChange}
      defaultChecked={defaultChecked}
    />
  );
}
