import { ReactNode } from "react";
import { StylesTabs, StyleTabs } from "./AntTabs.style";

interface ITabs extends StyleTabs {
  onChange?: () => void;
  children: ReactNode;
}

export function AntTabs({ onChange, children, ...rest }: ITabs) {
  return (
    <>
      <StylesTabs onChange={onChange} style={rest} animated={false}>
        {children}
      </StylesTabs>
    </>
  );
}
