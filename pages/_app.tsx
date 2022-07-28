import type { AppProps } from "next/app";
import "../globalCss/global.css";
import "antd/dist/antd.css";
import { Colors } from "../helpers/enums/colors";
import { BellOutlined, SearchOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Badge } from "antd";
import { AntInput } from "../components/Input/Input";
import {
  Box,
  AntAvatar,
  SiderNavigation,
  Header,
  Sider,
  Layout,
} from "../components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    // <ThemeProvider theme={theme}>

    <Layout>
      <Sider background={Colors.White}>
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
                <AntAvatar
                  src={
                    <Image src="/images/testPic.jpg" width={100} height={100} />
                  }
                  size="large"
                />
              </Box>
            </Box>
          </Box>
        </Header>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Layout>
    </Layout>
  );
}

export default MyApp;
