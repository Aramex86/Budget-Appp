import Icon from "@ant-design/icons";

const svgBankCard = () => (
  <svg width="1em" height="1em" viewBox="0 0 122.88 78.22">
    <g>
      <path d="M86.63,45.01c3.23,0,6.1,1.56,7.89,3.96c1.79-2.41,4.66-3.96,7.89-3.96c5.43,0,9.83,4.4,9.83,9.83 c0,5.43-4.4,9.83-9.83,9.83c-3.23,0-6.1-1.56-7.89-3.96c-1.79,2.41-4.66,3.96-7.89,3.96c-5.43,0-9.83-4.4-9.83-9.83 C76.8,49.41,81.2,45.01,86.63,45.01L86.63,45.01z M6.76,0h109.36c1.86,0,3.55,0.76,4.77,1.98c1.22,1.22,1.98,2.92,1.98,4.77v64.7 c0,1.86-0.76,3.55-1.98,4.77c-1.22,1.22-2.91,1.99-4.77,1.99H6.76c-1.86,0-3.55-0.76-4.77-1.98C0.76,75.01,0,73.32,0,71.46V6.76 C0,4.9,0.76,3.21,1.98,1.98C3.21,0.76,4.9,0,6.76,0L6.76,0z M16.66,51.66c-1.08,0-1.96-0.88-1.96-1.96c0-1.08,0.88-1.96,1.96-1.96 h32.95c1.08,0,1.96,0.88,1.96,1.96c0,1.08-0.88,1.96-1.96,1.96H16.66L16.66,51.66z M16.66,61.94c-1.08,0-1.96-0.88-1.96-1.96 c0-1.08,0.88-1.96,1.96-1.96h22.23c1.08,0,1.96,0.88,1.96,1.96c0,1.08-0.88,1.96-1.96,1.96H16.66L16.66,61.94z M3.91,14.56h115.05 v-7.8c0-0.78-0.32-1.49-0.84-2.01c-0.52-0.52-1.23-0.84-2.01-0.84H6.76c-0.78,0-1.49,0.32-2.01,0.84C4.23,5.27,3.91,5.98,3.91,6.76 V14.56L3.91,14.56z M118.97,33.99H3.91v37.47c0,0.78,0.32,1.49,0.84,2.01c0.52,0.52,1.23,0.84,2.01,0.84h109.36 c0.78,0,1.49-0.32,2.01-0.84c0.52-0.52,0.84-1.23,0.84-2.01V33.99L118.97,33.99z" />
    </g>
  </svg>
);

export const BankIcon = (props: any) => (
  <Icon component={svgBankCard} {...props} />
);
