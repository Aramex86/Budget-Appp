import { TransactionOutlined } from "@ant-design/icons";
import { Col, DatePicker, DatePickerProps, Form, Row, Select } from "antd";
import { useForm } from "antd/lib/form/Form";
import moment from "moment";
import Head from "next/head";
import { useEffect, useState } from "react";
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
import { useGetCards, usePostTransaction } from "../../hooks";
import { IUser } from "../../models/userModel";

export default function Payments() {
  const {
    status,
    data = [],
    error,
    isFetching,
    refetch,
  } = useGetCards({ enabled: true });
  const { mutate } = usePostTransaction();
  const [showModal, setShowModal] = useState(false);

  const [typeOfAmount, setTypeOfAmount] = useState("");
  const [momentDate, setMomentDate] = useState(
    moment().format("DD/MM/YYYY HH:MM A")
  );
  const [form] = useForm();
  const [user] = data as IUser[];
  const { getFieldsValue, resetFields, validateFields, setFieldValue } = form;

  const { mainCard, categories, payments } = user || {};

  const categoryOptions = categories?.map((category) => {
    return { label: category.category, value: category.category };
  });

  useEffect(() => {
    setFieldValue("date", momentDate);
  }, []);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleOk = async () => {
    try {
      const values = await validateFields();
      if (values) {
        setShowModal(false);
        const { amount, category } = getFieldsValue();
        const newTransaction = {
          category,
          amount: `${typeOfAmount}${amount}`,
          date: momentDate,
          mainCardAmount: mainCard.amount,
          mainCardId: mainCard._id,
        };
        mutate(newTransaction);
        resetFields();
        setTypeOfAmount("");
      }
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };
  const handleCancel = () => {
    setShowModal(false);
    resetFields();
    setTypeOfAmount("");
  };
  const handleDate: DatePickerProps["onChange"] = (date, dateString) => {
    setMomentDate(dateString);
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
          <Col xxl={4} flex={1}>
            <Box paddingTop={29}>
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
            <PaymentHistory
              payments={payments}
              mainCard={mainCard}
              refetch={refetch}
            />
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
          <Form.Item
            name="category"
            rules={[
              {
                required: true,
                message: "Please select a category",
              },
            ]}
          >
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
            <Form.Item
              name="amount"
              rules={[
                {
                  required: true,
                  message: "Please enter your amount",
                },
              ]}
            >
              <AntInput
                disabled={typeOfAmount !== "" ? false : true}
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
              onChange={handleDate}
              bordered={true}
              format="DD/MM/YYYY HH:MM A"
              defaultValue={moment()}
            />
          </Form.Item>
        </Box>
      </CustomModal>
    </Form>
  );
}
