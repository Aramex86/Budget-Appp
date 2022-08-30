import {
  Col,
  DatePicker,
  Radio,
  RadioChangeEvent,
  Row,
  Space,
  Table,
} from "antd";
import { Colors } from "../../../helpers/enums/colors";
import { Box, RadioBtn, TabsHeading } from "../..";
import {
  DollarOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { MedicineIcon, PartyIcon } from "../../Icons";
import { UserCards, UserPayments } from "../../../models/userModel";
import { useEffect, useState } from "react";
import { usePostPeriod } from "../../../hooks";
import moment from "moment";

interface IPayments {
  payments: UserPayments[];
  mainCard: UserCards;
  refetch?: any;
}

export function PaymentHistory({
  payments = [],
  mainCard,
  refetch,
}: IPayments) {
  const [showMonth, setShowMonth] = useState(false);
  const { data, mutate } = usePostPeriod();
  const onChange = (e: RadioChangeEvent) => {
    mutate({ period: e.target.value });
    e.target.value === "monthly" ? setShowMonth(true) : setShowMonth(false);
  };

  const handleMonth = (value: any) => {
    mutate({ month: moment(value).format("M") });
  };

  useEffect(() => {
    refetch();
  }, [data]);

  useEffect(() => {
    mutate({ peroid: "all" });
  }, []);

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
              <Box display="flex">
                <Box
                  width={50}
                  height={50}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius={50}
                  background="rgb(39 199 182 / 19%)"
                  boxShadow="0px 0px 3px 2px #74d2a88c"
                  marginRight={15}
                >
                  <HomeOutlined
                    style={{ fontSize: "24px", color: `rgb(39 199 182)` }}
                  />
                </Box>
                <Box alignSelf="center" fontWeight={500}>
                  {category}
                </Box>
              </Box>
            );
          case "Grocery":
            return (
              <Box display="flex">
                <Box
                  width={50}
                  height={50}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius={50}
                  background="rgb(39 199 182 / 19%)"
                  boxShadow="0px 0px 3px 2px #74d2a88c"
                  marginRight={15}
                >
                  <ShoppingCartOutlined
                    style={{ fontSize: "24px", color: "rgb(101 27 206)" }}
                  />
                </Box>
                <Box alignSelf="center" fontWeight={500}>
                  {category}
                </Box>
              </Box>
            );

          case "Party":
            return (
              <Box display="flex">
                <Box
                  width={50}
                  height={50}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius={50}
                  background="rgb(39 199 182 / 19%)"
                  boxShadow="0px 0px 3px 2px #74d2a88c"
                  marginRight={15}
                >
                  <PartyIcon
                    style={{ fontSize: "24px", fill: "rgb(60 153 67)" }}
                  />
                </Box>
                <Box alignSelf="center" fontWeight={500}>
                  {category}
                </Box>
              </Box>
            );
          case "Medicine":
            return (
              <Box display="flex">
                <Box
                  width={50}
                  height={50}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius={50}
                  background="rgb(39 199 182 / 19%)"
                  boxShadow="0px 0px 3px 2px #74d2a88c"
                  marginRight={15}
                >
                  <MedicineIcon
                    style={{ fontSize: "24px", fill: "rgb(217 51 51)" }}
                  />
                </Box>
                <Box alignSelf="center" fontWeight={500}>
                  {category}
                </Box>
              </Box>
            );
          case "Salary":
            return (
              <Box display="flex">
                <Box
                  width={50}
                  height={50}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius={50}
                  background="rgb(39 199 182 / 19%)"
                  boxShadow="0px 0px 3px 2px #74d2a88c"
                  marginRight={15}
                >
                  <DollarOutlined
                    style={{ fontSize: "24px", color: "rgb(50 170 220)" }}
                  />
                </Box>
                <Box alignSelf="center" fontWeight={500}>
                  {category}
                </Box>
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
        <Radio.Group onChange={onChange} defaultValue="all" buttonStyle="solid">
          <Space>
            {showMonth && <DatePicker picker="month" onChange={handleMonth} />}
            {/* <RadioBtn value="weekly">Weekly</RadioBtn> */}
            <RadioBtn value="monthly">Monthly</RadioBtn>
            <RadioBtn value="day">Today</RadioBtn>
            <RadioBtn value="all">All</RadioBtn>
          </Space>
        </Radio.Group>
      </Box>
      <Box marginTop={20}>
        <Table
          dataSource={data?.length ? data : payments}
          columns={colunms}
          rowKey="_id"
          pagination={{
            total: data ? data?.length : payments?.length,
            pageSize: 10,
          }}
        />
      </Box>
    </Box>
  );
}
