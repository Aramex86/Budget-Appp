import Box from "../Box/Box";
import {
  CreditCardOutlined,
  HomeOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { StyledMenu } from "./SiderNavigation.style";
import { CustomLink } from "../StyledLink/StyledLink";

export default function SiderNavigation() {
  const handleClick = (e: any) => {
    console.log("click ", e);
  };

  return (
    <Box marginTop={120}>
      <StyledMenu onClick={handleClick}>
        <CustomLink
          href="/"
          title="Dashboard"
          icon={<HomeOutlined style={{ fontSize: "24px" }} />}
        />
        <CustomLink
          href="/payments/payments"
          title="Payments"
          icon={<CreditCardOutlined style={{ fontSize: "24px" }} />}
        />
        <CustomLink
          href="/userProfile/userProfile"
          title="Account"
          icon={<UserOutlined style={{ fontSize: "24px" }} />}
        />
        <CustomLink
          href="/settings/settings"
          title="Settings"
          icon={<SettingOutlined style={{ fontSize: "24px" }} />}
        />
      </StyledMenu>
    </Box>
  );
}
