import { Radio, RadioChangeEvent, Space, Table } from "antd";
import { Colors } from "../../../helpers/enums/colors";
import { Box, RadioBtn, TabsHeading } from "../..";
import {
  DollarOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { MedicineIcon, PartyIcon } from "../../Icons";

const mockData = [
  {
    id: 1,
    category: "Apartament",
    title: "Apartament",
    amount: "-2500 USD",
    date: "29 March 2022, 19:00 PM",
    card: "MASTERCARD 1234",
  },
  {
    id: 2,
    category: "Salary",
    title: "Salary",
    amount: "+4500 USD",
    date: "29 March 2022, 19:00 PM",
    card: "MASTERCARD 1234",
  },
  {
    id: 3,
    category: "Party",
    title: "Party",
    amount: "-150 USD",
    date: "29 March 2022, 19:00 PM",
    card: "MASTERCARD 1234",
  },
  {
    id: 4,
    category: "Medicine",
    title: "Medicine",
    amount: "+1000 USD",
    date: "29 March 2022, 19:00 PM",
    card: "MASTERCARD 1234",
  },
  {
    id: 5,
    category: "Grocery",
    title: "Grocery",
    amount: "-300 USD",
    date: "29 March 2022, 19:00 PM",
    card: "MASTERCARD 1234",
  },
];

const colunms = [
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
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
              <PartyIcon style={{ fontSize: "24px", fill: "rgb(60 153 67)" }} />
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

      return <></>;
    },
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (text: any) => <Box color={Colors.Black}>{text}</Box>,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (text: any) => {
      // console.log();
      return (
        <Box
          color={text.includes("+") ? Colors.Black : Colors.SunsetOrange}
          fontWeight={600}
        >
          {text}
        </Box>
      );
    },
  },
  {
    title: "Card",
    dataIndex: "card",
    key: "card",
    render: (text: any) => <Box color={Colors.Black}>{text}</Box>,
  },
];

export function PaymentHistory() {
  const onChange = (e: RadioChangeEvent) => {
    console.log(`radio checked:${e.target.value}`);
  };

  return (
    <Box
      background={Colors.White}
      paddingTop={20}
      borderRadius=" 10px  10px 0 0"
      padding="0 40px"
      width="70%"
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
          dataSource={mockData}
          pagination={false}
          columns={colunms}
          rowKey="id"
        />
      </Box>
    </Box>
  );
}
