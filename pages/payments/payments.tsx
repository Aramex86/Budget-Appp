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
import { formatedAmount } from "../../helpers/formatedAmount";
import {
  useFetchIncome,
  useGetCards,
  usePostIncome,
  usePostTransaction,
} from "../../hooks";
import { IUser, UserCards } from "../../models/userModel";

export default function Payments() {
  const {
    status,
    data = [],
    error,
    isFetching,
    refetch,
  } = useGetCards({ enabled: true });
  const { mutate } = usePostTransaction();
  const { data: incomeData, mutate: incomeMutate } = usePostIncome();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [disableCategory, setDisableCategory] = useState<boolean>(false);
  const [showCards, setShowCards] = useState<boolean>(false);

  const [cardIdAndNumber, setCardIdAndNumber] = useState<{
    cardId: string;
    cardNumber: string;
  }>({
    cardId: "",
    cardNumber: "",
  });
  const [typeOfAmount, setTypeOfAmount] = useState<string>("");
  const [momentDate, setMomentDate] = useState<string>(
    moment().format("DD/MM/YYYY HH:mm A")
  );

  const [form] = useForm();
  const [user] = data as IUser[];
  const { getFieldsValue, resetFields, validateFields, setFieldValue } = form;

  const { mainCard, categories, payments, cards } = user || {};

  const { cardId, cardNumber } = cardIdAndNumber;

  const categoryOptions = categories?.map((category) => {
    return { label: category.category, value: category.category };
  });

  useEffect(() => {
    setFieldValue("date", momentDate);
  }, []);

  useEffect(() => {
    refetch();
  }, [incomeData]);

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
        const incomeTransaction = {
          cardId: cardId,
          amount: amount,
          mainCardAmount: mainCard.amount,
          cardNumber: cardNumber,
          date: momentDate,
        };
        typeOfAmount === "-"
          ? mutate(newTransaction)
          : incomeMutate(incomeTransaction);
        resetFields();
        setTypeOfAmount("");
        setDisableCategory(false);
        setShowCards(false);
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

  const handleDate: DatePickerProps["onChange"] = (date) => {
    setMomentDate(moment(date).format("DD/MM/YYYY HH:mm A"));
  };

  const handleIcome = () => {
    setTypeOfAmount("+");
    setDisableCategory(true);
    setShowCards(true);
  };

  const handleExpense = () => {
    setTypeOfAmount("-");
    setDisableCategory(false);
    setShowCards(false);
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
            <Categories
              categories={categories}
              isFetching={isFetching}
              payments={payments}
            />
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
                required: typeOfAmount !== "-" ? false : true,
                message: `${typeOfAmount ? "Please select a category" : ""}`,
              },
            ]}
          >
            <Select
              bordered={false}
              options={categoryOptions}
              dropdownStyle={{ fontWeight: 700 }}
              placeholder={<Box>select a category</Box>}
              disabled={disableCategory}
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
                onClick={handleIcome}
                marginRight={10}
              >
                Income
              </Button>
              <Button
                backgroundColor={Colors.SunsetOrange}
                border="none"
                color={Colors.White}
                onClick={handleExpense}
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
        {showCards && (
          <Box display="flex" gap={10} marginBottom={15} flexWrap="wrap">
            {cards.map(
              ({
                _id,
                amount,
                cardBg,
                paysystem,
                currency,
                cardNumber,
              }: UserCards) => (
                <Box
                  key={_id}
                  background={cardBg}
                  width="30%"
                  color={Colors.White}
                  padding="10px 10px"
                  borderRadius={5}
                  onClick={() =>
                    setCardIdAndNumber({ cardId: _id, cardNumber })
                  }
                  cursor="pointer"
                  boxShadow={
                    _id === cardId ? `rgb(63 74 73 / 75%) 0px 2px 8px 2px` : ""
                  }
                >
                  <Box fontWeight={600} fontSize={18}>
                    {formatedAmount(amount, currency)}
                  </Box>
                  <Box>{paysystem.toUpperCase()}</Box>
                </Box>
              )
            )}
          </Box>
        )}
        <Box fontWeight={600}>
          <Form.Item name="date">
            <Box>Date</Box>
            <DatePicker
              onChange={handleDate}
              bordered={true}
              format="DD/MM/YYYY HH:mm A"
              defaultValue={moment()}
            />
          </Form.Item>
        </Box>
      </CustomModal>
    </Form>
  );
}
