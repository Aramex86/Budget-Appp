import { Divider, Radio, RadioChangeEvent, Space, Table } from "antd";
import { Colors } from "../../../helpers/enums/colors";
import { RadioBtn } from "../../RadioBtn/RadioBtn";
import Image from "next/image";
import { TabsHeading } from "../../TabsHeading/TabsHeading";
import { Box } from "../../Box/Box";

const cards = [
  {
    id: 1,
    date: "12/24",
    paySystem: "mastercard",
    amount: "3,920",
    backgound: "#4D53E0",
    cardHolder: "Jhon Doe",
  },
  {
    id: 2,
    date: "09/24",
    paySystem: "visa",
    amount: "2,500",
    backgound: "#FF8C00",
    cardHolder: "Jhon Doe",
  },
  {
    id: 3,
    date: "08/24",
    paySystem: "mastercard",
    amount: "1,500",
    backgound: "#202041",
    cardHolder: "Jhon Doe",
  },
  {
    id: 4,
    date: "25/23",
    paySystem: "visa",
    amount: "1000",
    backgound: "#202041",
    cardHolder: "Jhon Doe",
  },
];

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (text: string) => <Box fontWeight={600}>{text}</Box>,
  },
  {
    title: "Pay System",
    dataIndex: "paySystem",
    key: "paySystem",
    render: (paySystem: string) => {
      const sytem = () => {
        switch (paySystem) {
          case "visa":
            return (
              <Box display="flex" alignItems="center">
                <Image
                  src={"/images/294654_visa_icon.svg"}
                  width={45}
                  height={45}
                  alt="Pay System"
                />
                <Box marginLeft={25} fontWeight={600}>
                  {paySystem.toLocaleUpperCase()}
                </Box>
              </Box>
            );
          case "mastercard":
            return (
              <Box display="flex" alignItems="center">
                <Image
                  src={"/images/mc_symbol_opt_73_2x.png"}
                  width={45}
                  height={35}
                  alt="Pay System"
                />
                <Box marginLeft={25} fontWeight={600}>
                  {paySystem.toLocaleUpperCase()}
                </Box>
              </Box>
            );
        }
      };

      return <>{sytem()}</>;
    },
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (amount: string) => <Box fontWeight={600}>{amount}</Box>,
  },
  {
    title: "Card Holder",
    dataIndex: "cardHolder",
    key: "cardHolder",
    render: (holderName: string) => <Box fontWeight={600}>{holderName}</Box>,
  },
];

export function CradOptions() {
  const onChange = (e: RadioChangeEvent) => {
    console.log(`radio checked:${e.target.value}`);
  };

  return (
    <Box background={Colors.White}>
      <TabsHeading text="Manage your Cards Settings" />
      <Box paddingLeft={25} marginBottom={45}>
        Bellow are cards options for your account.
      </Box>
      <Box display="flex" flexDirection="column" paddingLeft={25} padding={10}>
        <Box fontWeight={600} marginBottom={20}>
          How many cards you want to display in dashboard?
        </Box>
        <Box display="flex">
          <Radio.Group
            onChange={onChange}
            defaultValue="one"
            buttonStyle="solid"
          >
            <Space>
              <RadioBtn value="one">One</RadioBtn>
              <RadioBtn value="three">Three</RadioBtn>
              <RadioBtn value="all">All</RadioBtn>
            </Space>
          </Radio.Group>
        </Box>
        <Divider />
        <Box marginTop={25}>
          <Table columns={columns} dataSource={cards} pagination={false} />
        </Box>
      </Box>
    </Box>
  );
}
