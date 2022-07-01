import type { AppProps } from "next/app";
import "../globalCss/global.css";
import "antd/dist/antd.css";
import Layout from "../components/Layout/Layout";
import Sider from "../components/Sider/Sider";
import { Colors } from "../helpers/enums/colors";
import Header from "../components/Header/Header";
import SiderNavigation from "../components/SiderNavigation/SiderNavigation";
import Box from "../components/Box/Box";
import { BellOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar } from "../components/Avatar/Avatar";
import Image from "next/image";
import { Badge, Input } from "antd";
import { AntInput } from "../components/Input/Input";

// const theme = {
//   colors: {
//     primary: "#0070f3",
//   },
// };

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ThemeProvider theme={theme}>
    <Layout>
      <Sider background={Colors.White} height="100vh">
        <Box
          paddingTop={31}
          textAlign="center"
          fontWeight={900}
          color={Colors.CloudBurst}
          fontSize={24}
        >
          Budget App
        </Box>
        <SiderNavigation />
      </Sider>
      <Layout>
        <Header background={Colors.White}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box width="70%" display="flex" alignSelf="center" fontWeight={900}>
              <AntInput
                placeholder="Search"
                bordered={false}
                width="100%"
                prefix={
                  <SearchOutlined
                    style={{
                      color: `${Colors.SilverSand}`,
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  />
                }
              />
            </Box>
            <Box
              width="30%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box marginRight={15} cursor="pointer">
                <Badge dot>
                  <BellOutlined
                    style={{ fontSize: 18, color: `${Colors.SilverSand}` }}
                  />
                </Badge>
              </Box>
              <Box>
                <Avatar
                  src={
                    <Image src="/images/testPic.jpg" width={100} height={100} />
                  }
                  size="large"
                />
              </Box>
            </Box>
          </Box>
        </Header>
        <Component {...pageProps} />
      </Layout>
    </Layout>
    // </ThemeProvider>
  );
}

export default MyApp;
