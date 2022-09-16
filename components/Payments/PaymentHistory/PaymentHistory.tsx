import { DatePicker, Radio, RadioChangeEvent, Space, Table } from "antd";
import { Colors } from "../../../helpers/enums/colors";
import { Box, RadioBtn, TabsHeading } from "../..";
import { UserCards, UserPayments } from "../../../models/userModel";
import { useEffect, useState } from "react";
import { usePostPeriod } from "../../../hooks";
import moment from "moment";
import { SetIconByCategory } from "../../SetIconByCategory/setIconsByCategory";

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
  const [typeOfPeriod, setTipeOfPeriod] = useState<string>("all");
  const onChange = (e: RadioChangeEvent) => {
    setTipeOfPeriod(e.target.value);
    e.target.value === "monthly" ? setShowMonth(true) : setShowMonth(false);
  };

  const handleMonth = (value: any) => {
    mutate({ period: "monthly", month: moment(value).format("M") });
  };

  useEffect(() => {
    refetch();
  }, [data]);

  useEffect(() => {
    mutate({ period: typeOfPeriod });
  }, [typeOfPeriod]);

  const colunms = [
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: "5%",
      render: (category: string) => (
        <SetIconByCategory category={category} size={50} />
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      width: "20%",
      render: (text: string) => {
        return (
          <Box
            color={text?.includes("+") ? Colors.VistaBlue : Colors.SunsetOrange}
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
            {mainCard.paysystem?.toUpperCase()}
          </Box>
          <Box> {mainCard.cardNumber?.replace(/.(?=.{4})/g, "*")}</Box>
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
          dataSource={!data ? payments : data}
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
