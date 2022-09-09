import { InfoCircleOutlined } from "@ant-design/icons";
import { Select, Table } from "antd";
import { useState } from "react";
import { Colors } from "../../../helpers/enums/colors";
import { formatedAmount } from "../../../helpers/formatedAmount";
import { useFetchIncome } from "../../../hooks";
import { UserCards, UserPayments } from "../../../models/userModel";
import { Box } from "../../Box/Box";
import { Button } from "../../Buttons/Button";
import { CustomModal } from "../../Modal/Modal";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Income",
    dataIndex: "amount",
    key: "amount",
    render(_: any, { amount, currency }: UserPayments) {
      return (
        <Box>
          {amount} {currency}
        </Box>
      );
    },
  },
  {
    title: "Card Number",
    dataIndex: "cardNumber",
    key: "cardNumber",
    render(_: any, { cardNumber }: UserPayments) {
      return <Box>{cardNumber?.replace(/.(?=.{4})/g, "*")}</Box>;
    },
  },
];

interface IBalance {
  cards: UserCards[];
}

export function BalanceCard({ cards }: IBalance) {
  const { data } = useFetchIncome();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currency, setCurrency] = useState("USD");

  const amount = cards
    ?.filter((a) => {
      if (a.currency === currency) {
        return a;
      }
    })
    .map((sums) => Number(sums.amount))
    .reduce((a, c) => {
      return a + c;
    }, 0);

  const handleChangeCurrency = (value: string) => {
    setCurrency(value);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Box
      width={315}
      background={Colors.White}
      padding="21px"
      display="flex"
      flexDirection="column"
      borderRadius="19px"
      boxShadow="0px 2px 2px 2px #80808040"
      justifyContent="center"
      gap={13}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={15}
      >
        <Box fontWeight={900} fontSize={16} color={Colors.SilverSand}>
          4263 9826 4026 9299
        </Box>
        <Box
          fontWeight={900}
          fontSize={20}
          color={Colors.SilverSand}
          position="relative"
        >
          <Select
            defaultValue={currency}
            bordered={false}
            onChange={handleChangeCurrency}
            size="small"
          >
            <Select.Option value="USD">USD</Select.Option>
            <Select.Option value="EUR">EUR</Select.Option>
            <Select.Option value="LEI">LEI</Select.Option>
          </Select>
        </Box>
      </Box>
      <Box>
        <Box fontSize={30} fontWeight={700} color={Colors.CloudBurst}>
          {amount && formatedAmount(amount, currency)}
          <sup
            style={{
              color: `${Colors.SilverSand}`,
              fontSize: 15,
              marginLeft: 10,
            }}
          >
            {currency}
          </sup>
        </Box>
        <Box color={Colors.SilverSand} fontSize={16}>
          Total Balance of all cards in {currency}
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        flexDirection="column"
        alignItems="end"
      >
        <Box fontWeight={500} color={Colors.VistaBlue} fontSize={16}>
          <Box display="flex">
            Income
            <Box marginLeft={10}>
              <InfoCircleOutlined
                style={{ color: Colors.Black, cursor: "pointer" }}
                onClick={showModal}
              />
            </Box>
            <CustomModal
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              destroyOnClose
              title="Latest income"
              bodyStyle={{ padding: "0px" }}
              footer={[
                <Button
                  key="add"
                  onClick={handleOk}
                  backgroundColor={Colors.VistaBlue}
                  color={Colors.White}
                  border={`1px solid ${Colors.VistaBlue}`}
                >
                  Ok
                </Button>,
              ]}
            >
              <Table
                dataSource={data}
                columns={columns}
                rowKey="_id"
                pagination={false}
              />
            </CustomModal>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
