import { PlusOutlined, WifiOutlined } from "@ant-design/icons";
import { Colors } from "../../../helpers/enums/colors";
import Image from "next/image";
import { AntInput, Box, Button, CustomModal, RadioBtn } from "../..";
import { UserCards } from "../../../models/userModel";
import { ChangeEvent, useRef, useState } from "react";
import {
  Col,
  DatePicker,
  DatePickerProps,
  Form,
  Radio,
  Row,
  Select,
  Spin,
} from "antd";
import moment from "moment";
import { usePostCard } from "../../../hooks";
import { antIcon } from "../../Icons";

interface IBankCard {
  cards: UserCards[];
  isFetching: boolean;
}

export default function BankCard({ cards, isFetching }: IBankCard) {
  const { mutate } = usePostCard();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [bg, setBg] = useState("#484ef4");
  const [date, setDate] = useState<string>("");
  const [cardNr, setCardNumber] = useState("");
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    const cardObj = form.getFieldsValue(true);
    const card = { ...cardObj, date };
    mutate(card);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setDate(dateString);
  };

  const handleCardNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    setCardNumber(value);
  };

  if (isFetching)
    return (
      <Box>
        <Spin indicator={antIcon} />
      </Box>
    );
  return (
    <Form form={form} component={false}>
      <Box
        display="flex"
        overflowX={cards?.length > 3 ? "scroll" : "auto"}
        whiteSpace="nowrap"
        width="70%"
      >
        <Box>
          <Button
            icon={<PlusOutlined style={{ color: `${Colors.SilverSand}` }} />}
            border={`1px solid ${Colors.SilverSand}`}
            color={Colors.SilverSand}
            width={47}
            height={47}
            boxShadow={`0px 0px 4px 1px ${Colors.GhostWhite}`}
            marginRight={20}
            borderRadius={4}
            onClick={showModal}
          />
        </Box>

        <CustomModal
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          destroyOnClose
          title="Add new card"
          footer={[
            <Button
              key="cancel"
              onClick={handleCancel}
              color={Colors.VistaBlue}
              border={`1px solid ${Colors.VistaBlue}`}
            >
              Cancel
            </Button>,
            <Button
              key="add"
              onClick={handleOk}
              backgroundColor={Colors.VistaBlue}
              color={Colors.White}
              border={`1px solid ${Colors.VistaBlue}`}
            >
              Add Crard
            </Button>,
          ]}
        >
          <Row gutter={[20, 30]}>
            <Col span={8}>
              Card Holder
              <Form.Item name="cardholder" required>
                <AntInput
                  placeholder="Jhon Doe"
                  borderColor={Colors.VistaBlue}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              Amount
              <Form.Item name="amount">
                <AntInput
                  placeholder="ex:1000.00"
                  borderColor={Colors.VistaBlue}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              Currency
              <Form.Item name="currency" initialValue="USD">
                <Select style={{ width: 100 }} bordered={false}>
                  <Select.Option value="EUR">EUR</Select.Option>
                  <Select.Option value="USD">USD</Select.Option>
                  <Select.Option value="LEI">LEI</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Box marginTop={20}>
            <Row>
              <Col span={8}>
                Valid True
                <Form.Item
                  name="date"
                  initialValue={moment("01/2022", "MM/YYYY")}
                >
                  <DatePicker
                    onChange={onChange}
                    bordered={false}
                    format={"MM/YYYY"}
                    picker="month"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                Pay System
                <Form.Item name="paysystem" initialValue="visa">
                  <Radio.Group
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      gap: "20px",
                    }}
                  >
                    <RadioBtn value="visa">Visa</RadioBtn>
                    <RadioBtn value="mastercard">Mastercard</RadioBtn>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>
            <Box marginTop={10}>
              <Row>
                <Col span={12}>
                  Card number
                  <Form.Item name="cardNumber">
                    <AntInput
                      type="text"
                      maxLength={16}
                      bordered={false}
                      placeholder="1234 1234 1234 1234"
                      // onChange={handleCardNumber}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Box>
            <Box marginTop={10}>
              <Row>
                <Col span={12}>
                  Select background of card
                  <Form.Item name="cardBg" initialValue={bg}>
                    <AntInput type="color" bordered={false} width="50%" />
                  </Form.Item>
                </Col>
              </Row>
            </Box>
          </Box>
        </CustomModal>
        <Box display="flex">
          {cards?.map(
            ({ _id, date, paysystem, amount, cardBg, currency }: UserCards) => (
              <Box
                key={_id}
                background={cardBg}
                width={230}
                padding={20}
                marginRight={20}
                borderRadius="10px"
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  marginBottom={25}
                >
                  <WifiOutlined
                    style={{
                      color: `${Colors.White}`,
                      transform: "rotate(90deg)",
                    }}
                  />
                  <Box color={Colors.White}>{date ? date : "invalid card"}</Box>
                </Box>
                <Box>
                  {paysystem === "visa" ? (
                    <>
                      <Box height={60}>
                        <Image
                          src={"/images/294654_visa_icon.png"}
                          width={80}
                          height={80}
                          alt="Pay System"
                        />
                      </Box>
                      <Box
                        paddingLeft={10}
                        color={Colors.White}
                        fontSize={12}
                      >{`${paysystem.toUpperCase()} `}</Box>
                    </>
                  ) : (
                    <>
                      <Box height={60} paddingTop={10}>
                        <Image
                          src="/images/mc_symbol_opt_73_2x.png"
                          width={60}
                          height={45}
                          alt="Pay System"
                        />
                      </Box>
                      <Box
                        paddingLeft={10}
                        color={Colors.White}
                        fontSize={12}
                      >{`${paysystem?.toUpperCase()}`}</Box>
                    </>
                  )}
                </Box>
                <Box>
                  <Box
                    color={Colors.White}
                    paddingLeft={10}
                    fontSize={25}
                    fontWeight={700}
                  >{`${currency} ${amount ? amount : 0}`}</Box>
                </Box>
              </Box>
            )
          )}
        </Box>
      </Box>
    </Form>
  );
}
