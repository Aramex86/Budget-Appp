import {
  Divider,
  Popconfirm,
  Radio,
  RadioChangeEvent,
  Space,
  Table,
} from "antd";
import { Colors } from "../../../helpers/enums/colors";
import { RadioBtn } from "../../RadioBtn/RadioBtn";
import Image from "next/image";
import { TabsHeading } from "../../TabsHeading/TabsHeading";
import { Box } from "../../Box/Box";
import { UserCards } from "../../../models/userModel";
import { usePostMainCard } from "../../../hooks/usePostMainCard";
import { Button } from "../../Buttons/Button";
import { fetchData, useDeleteCard, usePostCloseCard } from "../../../hooks";
import { DeleteOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

interface ICards {
  cards: UserCards[];
}

export function CradOptions({ cards }: ICards) {
  const { mutate } = usePostMainCard();
  const { mutate: closeCardMutate } = usePostCloseCard();
  const { mutate: deleteCardMutate } = useDeleteCard();
  const onChange = (e: RadioChangeEvent) => {
    console.log(`radio checked:${e.target.value}`);
  };

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text: string) => <Box fontWeight={600}>{text}</Box>,
    },
    {
      title: "Pay System",
      dataIndex: "paysystem",
      key: "paysystem",
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
      dataIndex: "cardholder",
      key: "cardholder",
      render: (holderName: string) => <Box fontWeight={600}>{holderName}</Box>,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      align: "center" as const,
      width: "20%",
      render: (_: any, record: UserCards) => {
        const { _id, close } = record;

        const defaultCard = {
          ...record,
          date: "",
          cardholder: "",
          cardNumber: "",
          amount: "0",
        };

        const handleSetCard = () => {
          mutate(record);
        };

        const handaleCloseCard = () => {
          closeCardMutate({ cardId: _id });
        };
        const handaleDeleteCard = () => {
          deleteCardMutate({ cardId: _id, defaultCard });
        };
        return (
          <Box
            display="flex"
            gap={10}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              fontWeight={700}
              onClick={handleSetCard}
              color={Colors.White}
              border={`1px solid ${Colors.VistaBlue}`}
              hovercolor="red"
              disabled={close}
              backgroundColor={Colors.VistaBlue}
            >
              Set as main
            </Button>
            <Button
              fontWeight={700}
              color={Colors.White}
              border={`1px solid ${Colors.VistaBlue}`}
              backgroundColor={Colors.VistaBlue}
            >
              <Popconfirm
                title="Are you sure to close this card?"
                onConfirm={handaleCloseCard}
                okText="Yes"
                cancelText="No"
              >
                Close card
              </Popconfirm>
            </Button>
            <Button
              fontWeight={700}
              color={Colors.CoralPink}
              border={`1px solid ${Colors.CoralPink}`}
              backgroundColor={Colors.White}
            >
              <Popconfirm
                title="Are you sure to delete this card?"
                onConfirm={handaleDeleteCard}
                okText="Yes"
                cancelText="No"
              >
                <DeleteOutlined />
              </Popconfirm>
            </Button>
          </Box>
        );
      },
    },
  ];

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
            defaultValue="all"
            buttonStyle="outline"
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
          <Table
            columns={columns}
            dataSource={cards}
            pagination={false}
            rowKey="_id"
          />
        </Box>
      </Box>
    </Box>
  );
}
