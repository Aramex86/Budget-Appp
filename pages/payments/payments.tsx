import { TransactionOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import Head from "next/head";
import {
  Box,
  Button,
  Categories,
  MainCard,
  PaymentHistory,
} from "../../components";
import { Colors } from "../../helpers/enums/colors";
import { useGetCards } from "../../hooks";

export default function Payments() {
  const {
    status,
    data = [],
    error,
    isFetching,
  } = useGetCards({ enabled: true });

  const mainCard = data[0]?.mainCard;

  return (
    <>
      <Head>
        <title>Payments</title>
      </Head>
      <Box display="flex" paddingTop={50}>
        <Row gutter={[20, 20]}>
          <Box display="flex" justifyContent="space-between" paddingLeft={20}>
            <Col span={8}>
              <MainCard mainCard={mainCard} isFetching={isFetching} />
            </Col>
            <Col span={18}>
              <Categories />
            </Col>
            <Col span={6}>
              <Box display="flex" flexDirection="column" alignItems="center">
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
                  marginBottom={25}
                >
                  <TransactionOutlined style={{ fontSize: "2em" }} /> New
                  Transaction
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
                  <TransactionOutlined style={{ fontSize: "2em" }} /> Send
                  Invoces
                </Button>
              </Box>
            </Col>
          </Box>
        </Row>
      </Box>
      <Box padding="25px 25px">
        <PaymentHistory />
      </Box>
    </>
  );
}
