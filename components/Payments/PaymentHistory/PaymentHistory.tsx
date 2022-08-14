import { Col, Radio, RadioChangeEvent, Row, Space, Table } from "antd";
import { Colors } from "../../../helpers/enums/colors";
import { Box, RadioBtn, TabsHeading } from "../..";
import {
  DollarOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { MedicineIcon, PartyIcon } from "../../Icons";
import { UserCards, UserPayments } from "../../../models/userModel";

interface IPayments {
  payments: UserPayments[];
  mainCard: UserCards;
}

export function PaymentHistory({ payments, mainCard }: IPayments) {
  const onChange = (e: RadioChangeEvent) => {
    console.log(`radio checked:${e.target.value}`);
  };

  const colunms = [
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: "5%",
      render: (category: string) => {
        switch (category) {
          case "Apartament":
            return (
              <Box
                width={50}
                height={50}
                border={`2px solid ${Colors.VistaBlue}`}
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius={50}
                background="rgb(39 199 182 / 19%)"
                boxShadow="0px 0px 3px 2px #74d2a8ba"
              >
                <HomeOutlined
                  style={{ fontSize: "24px", color: `rgb(39 199 182)` }}
                />
              </Box>
            );
          case "Grocery":
            return (
              <Box
                width={50}
                height={50}
                border={`2px solid ${Colors.VistaBlue}`}
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius={50}
                background="rgb(39 199 182 / 19%)"
                boxShadow="0px 0px 3px 2px #74d2a8ba"
              >
                <ShoppingCartOutlined
                  style={{ fontSize: "24px", color: "rgb(101 27 206)" }}
                />
              </Box>
            );

          case "Party":
            return (
              <Box
                width={50}
                height={50}
                border={`2px solid ${Colors.VistaBlue}`}
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius={50}
                background="rgb(39 199 182 / 19%)"
                boxShadow="0px 0px 3px 2px #74d2a8ba"
              >
                <PartyIcon
                  style={{ fontSize: "24px", fill: "rgb(60 153 67)" }}
                />
              </Box>
            );
          case "Medicine":
            return (
              <Box
                width={50}
                height={50}
                border={`2px solid ${Colors.VistaBlue}`}
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius={50}
                background="rgb(39 199 182 / 19%)"
                boxShadow="0px 0px 3px 2px #74d2a8ba"
              >
                <MedicineIcon
                  style={{ fontSize: "24px", fill: "rgb(217 51 51)" }}
                />
              </Box>
            );
          case "Salary":
            return (
              <Box
                width={50}
                height={50}
                border={`2px solid ${Colors.VistaBlue}`}
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius={50}
                background="rgb(39 199 182 / 19%)"
                boxShadow="0px 0px 3px 2px #74d2a8ba"
              >
                <DollarOutlined
                  style={{ fontSize: "24px", color: "rgb(50 170 220)" }}
                />
              </Box>
            );
        }
      },
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      width: "20%",
      render: (text: string) => {
        return (
          <Box
            color={text.includes("+") ? Colors.VistaBlue : Colors.SunsetOrange}
            fontWeight={700}
            display="flex"
            justifyContent="center"
          >
            <Box marginRight={10}>{text}</Box>
            <Box>{mainCard.currency}</Box>
          </Box>
        );
      },
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: "20%",
      render: (text: string) => <Box color={Colors.Black}>{text}</Box>,
    },

    {
      title: "Card",
      dataIndex: "card",
      key: "card",
      width: "20%",
      render: () => (
        <Box color={Colors.Black} display="flex">
          <Box fontWeight={600} marginRight={25}>
            {mainCard.paysystem.toUpperCase()}
          </Box>
          <Box> {mainCard.cardNumber.replace(/.(?=.{4})/g, "*")}</Box>
        </Box>
      ),
    },
  ];

  return (
    <Box
      background={Colors.White}
      paddingTop={20}
      borderRadius=" 10px  10px 0 0"
      padding="0 40px"
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <TabsHeading
          text="Payment History"
          color={Colors.Black}
          subText="Here you can see latest transactions"
        />
        <Radio.Group
          onChange={onChange}
          defaultValue="today"
          buttonStyle="solid"
        >
          <Space>
            <RadioBtn value="monthly">Monthly</RadioBtn>
            <RadioBtn value="weekly">Weekly</RadioBtn>
            <RadioBtn value="today">Today</RadioBtn>
          </Space>
        </Radio.Group>
      </Box>
      <Box marginTop={20}>
        <Table
          dataSource={payments}
          pagination={false}
          columns={colunms}
          rowKey="_id"
        />
      </Box>
    </Box>
  );
}
