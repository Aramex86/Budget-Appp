import { MoreOutlined, TransactionOutlined } from "@ant-design/icons";
import Head from "next/head";
import { Box, Button, Categories, PaymentHistory } from "../../components";
import { Colors } from "../../helpers/enums/colors";

export default function Payments() {
  return (
    <>
      <Head>
        <title>Payments</title>
      </Head>
      <Box display="flex" paddingTop={50}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="80%"
        >
          <Box
            background={Colors.White}
            padding="50px 40px"
            width="80%"
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
            <Box
              fontWeight={600}
              fontSize={18}
              alignSelf="center"
              width="33.33%"
            >
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
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
        >
          <Button
            height="auto"
            backgroundColor={Colors.VistaBlue}
            display="flex"
            alignItems="center"
            color={Colors.White}
            border={`1px solid ${Colors.VistaBlue}`}
            borderRadius={10}
            padding={10}
            width={160}
            onClick={() => {
              console.log("New Transaction");
            }}
          >
            <TransactionOutlined style={{ fontSize: "2em" }} /> New Transaction
          </Button>
          <Button
            height="auto"
            backgroundColor={Colors.CoralPink}
            display="flex"
            alignItems="center"
            color={Colors.White}
            border={`1px solid ${Colors.CoralPink}`}
            borderRadius={10}
            padding={10}
            width={160}
            onClick={() => {
              console.log("Send Invoces");
            }}
          >
            <TransactionOutlined style={{ fontSize: "2em" }} /> Send Invoces
          </Button>
        </Box>
      </Box>
      <Box padding="25px 20px" display="flex">
        <PaymentHistory />
        <Categories />
      </Box>
    </>
  );
}
