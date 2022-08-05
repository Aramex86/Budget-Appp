import { TransactionOutlined } from "@ant-design/icons";
import { Col, DatePicker, DatePickerProps, Form, Row, Select } from "antd";
import { useForm } from "antd/lib/form/Form";
import moment from "moment";
import Head from "next/head";
import { ChangeEvent, useState } from "react";
import {
  AntInput,
  Box,
  Button,
  Categories,
  CustomModal,
  MainCard,
  PaymentHistory,
} from "../../components";
import { Colors } from "../../helpers/enums/colors";
import { useGetCards } from "../../hooks";
import { IUser } from "../../models/userModel";

export default function Payments() {
  const {
    status,
    data = [],
    error,
    isFetching,
  } = useGetCards({ enabled: true });
  const [showModal, setShowModal] = useState(false);
  const [typeOfAmount, setTypeOfAmount] = useState("");
  const [date, setDate] = useState("");
  const [form] = useForm();
  const [user] = data as IUser[];
  const { getFieldsValue, resetFields } = form;

  const { mainCard, categories, payments } = user || {};

  const categoryOptions = categories?.map((category) => {
    return { label: category.category, value: category.category };
  });

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleOk = () => {
    setShowModal(false);
    const formFields = getFieldsValue();

    const newTransaction = {
      ...formFields,
      date,
    };
    console.log(newTransaction);
    resetFields();
    setTypeOfAmount("");
  };
  const handleCancel = () => {
    setShowModal(false);
    resetFields();
    setTypeOfAmount("");
  };
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setDate(dateString);
  };
  return (
    <Form form={form} component={false}>
      <Head>
        <title>Payments</title>
      </Head>
      <Box padding="0 20px" marginTop={50}>
        <Row justify="space-between">
          <Col xxl={6} xl={8}>
            <MainCard mainCard={mainCard} isFetching={isFetching} />
          </Col>
          <Col xxl={12} xl={10}>
            <Categories categories={categories} isFetching={isFetching} />
          </Col>
          <Col xxl={4}>
            <Box>
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
                onClick={handleShowModal}
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
                disabled
              >
                <TransactionOutlined style={{ fontSize: "2em" }} /> Send Invoces
              </Button>
            </Box>
          </Col>
        </Row>
      </Box>
      <Row justify="center">
        <Col span={22}>
          <Box padding="25px 20px">
            <PaymentHistory payments={payments} mainCard={mainCard} />
          </Box>
        </Col>
      </Row>
      <CustomModal
        title="New Transaction"
        visible={showModal}
        onCancel={handleCancel}
        onOk={handleOk}
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
            Add new transaction
          </Button>,
        ]}
        destroyOnClose={true}
      >
        <Box>
          <Box fontWeight={600}>Category</Box>
          <Form.Item name="category">
            <Select
              bordered={false}
              options={categoryOptions}
              dropdownStyle={{ fontWeight: 700 }}
              placeholder={<Box>select a category</Box>}
            />
          </Form.Item>
        </Box>
        <Box display="flex" flexDirection="column">
          <Box fontWeight={600}> Amount </Box>
          <Box color={Colors.SilverSand}>Select type of amount</Box>
          <Box display="flex">
            <Box marginRight={25} display="flex" justifyContent="space-between">
              <Button
                backgroundColor={Colors.VistaBlue}
                border="none"
                color={Colors.White}
                onClick={() => setTypeOfAmount("+")}
                marginRight={10}
              >
                Income
              </Button>
              <Button
                backgroundColor={Colors.SunsetOrange}
                border="none"
                color={Colors.White}
                onClick={() => setTypeOfAmount("-")}
              >
                Expense
              </Button>
            </Box>
            <Form.Item name="amount">
              <AntInput
                placeholder="Enter amount"
                borderColor={`1px solid ${Colors.VistaBlue}`}
                prefix={
                  <Box
                    color={
                      typeOfAmount === "+"
                        ? Colors.VistaBlue
                        : Colors.SunsetOrange
                    }
                    fontWeight={900}
                    display="flex"
                    alignItems="center"
                  >
                    {typeOfAmount}
                  </Box>
                }
              />
            </Form.Item>
          </Box>
        </Box>
        <Box fontWeight={600}>
          <Form.Item name="date">
            <Box>Date</Box>
            <DatePicker
              onChange={onChange}
              bordered={false}
              format="DD/MM/YYYY HH:MM A"
            />
          </Form.Item>
        </Box>
      </CustomModal>
    </Form>
  );
}
