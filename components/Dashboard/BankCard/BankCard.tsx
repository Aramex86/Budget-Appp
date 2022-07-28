import { PlusOutlined, WifiOutlined } from "@ant-design/icons";
import { Colors } from "../../../helpers/enums/colors";
import Image from "next/image";
import { AntInput, Box, Button, CustomModal, RadioBtn } from "../..";
import { UserCards } from "../../../models/userModel";
import { useEffect, useState } from "react";
import {
  Col,
  DatePicker,
  DatePickerProps,
  Form,
  Radio,
  Row,
  Select,
} from "antd";
import moment from "moment";
import { useGetCards, usePostCard } from "../../../hooks";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

export default function BankCard() {
  const { status, data, error, isFetching } = useGetCards();
  // const { mutate } = usePostCard({ params: data });
  const { isLoading, isError, mutate } = useMutation(createPost, {
    retry: 3,
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [bg, setBg] = useState("#484ef4");
  const [date, setDate] = useState<string>("");
  const [form] = Form.useForm();

  async function createPost() {
    const response = await axios.post("api/postcard");
    console.log(response);
  }

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    const cardObj = form.getFieldsValue(true);
    const card = { ...cardObj, date };

    mutate(card);
    // refetch()
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setDate(dateString);
  };

  return (
    <Form form={form}>
      <Box display="flex" justifyContent="flex-end">
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
              <Form.Item name="currency" initialValue="$">
                <Select
                  // defaultValue="$"
                  style={{ width: 100 }}
                  bordered={false}
                  onChange={handleChange}
                >
                  <Select.Option value="€">€</Select.Option>
                  <Select.Option value="$">$</Select.Option>
                  <Select.Option value="lei">Lei</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Box marginTop={20}>
            <Row>
              <Col span={8}>
                Valid True
                <Form.Item name="date">
                  <DatePicker
                    onChange={onChange}
                    bordered={false}
                    defaultValue={moment("01/2022", "MM/YYYY")}
                    format={"MM/YYYY"}
                    picker="month"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                Pay System
                <Form.Item name="paysystem" initialValue="visa">
                  <Radio.Group
                    defaultValue="visa"
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
          {data?.map(
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
