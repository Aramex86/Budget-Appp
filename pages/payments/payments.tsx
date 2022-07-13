import {
  HomeOutlined,
  MoreOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import Head from "next/head";
import { Box, Button, PaymentHistory } from "../../components";
import { MedicineIcon, PartyIcon } from "../../components/Icons";
import { Colors } from "../../helpers/enums/colors";

export default function Payments() {
  return (
    <>
      <Head>
        <title>Payments </title>
      </Head>
      <Box
        padding="20px  10px  0 10px"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Box
          background={Colors.White}
          padding="50px 40px"
          width="60%"
          display="flex"
          justifyContent="space-between"
          position="relative"
          borderRadius="20px"
          boxShadow="#8080806e 0px 1px 6px 1px"
        >
          <Box color={Colors.Black} width="20.33%">
            <Box fontSize={16} fontWeight={600}>
              Main Balance
            </Box>
            <Box fontSize={26} fontWeight={700}>
              $3,920.69
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            width="33.33%"
            alignItems="baseline"
          >
            <Box marginRight={35}>
              <Box color={Colors.SilverSand}>Valid Thru</Box>
              <Box fontWeight={600}>12/24</Box>
            </Box>
            <Box>
              <Box color={Colors.SilverSand}>Card Holder</Box>
              <Box fontWeight={600}>Doe J.</Box>
            </Box>
          </Box>
          <Box fontWeight={600} fontSize={18} alignSelf="center" width="33.33%">
            **** **** **** 1234
          </Box>
          <Button
            fontWeight={900}
            border="none"
            color={Colors.Black}
            position="absolute"
            right={10}
            top={7}
            boxShadow="none"
          >
            <MoreOutlined />
          </Button>
        </Box>
      </Box>
      <Box
        padding="20px  10px  0 10px"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Box
          marginTop={25}
          background={Colors.White}
          padding="35px 40px"
          width="60%"
          display="flex"
          borderRadius="20px"
          boxShadow="#8080806e 0px 1px 6px 1px"
          flexDirection="column"
        >
          <Box
            fontWeight={700}
            fontSize={18}
            display="flex"
            justifyContent="space-between"
          >
            Categories
            <Button
              borderRadius={50}
              width={30}
              height={30}
              display="flex"
              justifyContent="center"
              alignItems="center"
              border={`1px solid ${Colors.BlueDiamond}`}
            >
              <Tooltip title="Add Category" color={Colors.VistaBlue}>
                <PlusOutlined
                  style={{ fontSize: "16px", color: `${Colors.BlueDiamond}` }}
                />
              </Tooltip>
            </Button>
          </Box>
          <Box
            marginTop={25}
            background={Colors.White}
            display="flex"
            justifyContent="space-between"
          >
            <Box
              padding="10px 10px"
              background="rgb(89 221 207 / 44%)"
              borderRadius={23}
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              width="20%"
              fontWeight={700}
              boxShadow="0px 2px 4px 2px #8a8a8a4f"
            >
              <Box>
                <HomeOutlined
                  style={{ fontSize: "24px", color: `rgb(39 199 182)` }}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
              >
                <Box>Apartament</Box>
                <Box>1,500$</Box>
              </Box>
            </Box>
            <Box
              padding="10px 10px"
              background="rgb(144 89 221 / 44%)"
              borderRadius={23}
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              width="20%"
              fontWeight={700}
              boxShadow="0px 2px 4px 2px #8a8a8a4f"
            >
              <Box>
                <ShoppingCartOutlined
                  style={{ fontSize: "24px", color: "rgb(101 27 206)" }}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
              >
                <Box>Grocery</Box>
                <Box>3000$</Box>
              </Box>
            </Box>
            <Box
              padding="10px 10px"
              background="rgb(89 221 98 / 44%)"
              borderRadius={23}
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              width="20%"
              fontWeight={700}
              boxShadow="0px 2px 4px 2px #8a8a8a4f"
            >
              <Box>
                <PartyIcon
                  style={{ fontSize: "24px", fill: "rgb(60 153 67)" }}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
              >
                <Box>Party</Box>
                <Box>5,300$</Box>
              </Box>
            </Box>
            <Box
              padding="10px 10px"
              background="rgb(221 89 89 / 44%)"
              borderRadius={23}
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              width="20%"
              fontWeight={700}
              boxShadow="0px 2px 4px 2px #8a8a8a4f"
            >
              <Box>
                <MedicineIcon
                  style={{ fontSize: "24px", fill: "rgb(217 51 51)" }}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
              >
                <Box>Medicine</Box>
                <Box>1000$</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box width="70%" padding="25px 20px">
        <PaymentHistory />
      </Box>
    </>
  );
}
