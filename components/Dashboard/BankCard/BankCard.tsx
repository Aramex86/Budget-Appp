import { PlusOutlined, WifiOutlined } from "@ant-design/icons";
import { Colors } from "../../../helpers/enums/colors";
import Image from "next/image";
import { AntInput, AntTabs, Box, Button, CustomModal, RadioBtn } from "../..";
import { UserCards } from "../../../models/userModel";
import { useState } from "react";
import { useForm } from "antd/lib/form/Form";
import {
  Col,
  DatePicker,
  DatePickerProps,
  Radio,
  RadioChangeEvent,
  Row,
  Select,
} from "antd";

export default function BankCard({ cards }: { cards: UserCards[] }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [value, setValue] = useState("visa");
  const [bg, setBg] = useState("#484ef4");

  const [form] = useForm();

  console.log(cards.map((e) => e._id));

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const onChangeRadio = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBg(e.target.value);
  };

  console.log(bg);
  return (
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
            onClick={handleCancel}
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
            <AntInput placeholder="Jhon Doe" borderColor={Colors.VistaBlue} />
          </Col>
          <Col span={8}>
            Amount
            <AntInput placeholder="ex:1000.00" borderColor={Colors.VistaBlue} />
          </Col>
          <Col span={8}>
            Currency
            <Select
              defaultValue="$"
              style={{ width: 100 }}
              bordered={false}
              onChange={handleChange}
            >
              <Select.Option value="€">€</Select.Option>
              <Select.Option value="$">$</Select.Option>
              <Select.Option value="lei">Lei</Select.Option>
            </Select>
          </Col>
        </Row>
        <Box marginTop={20}>
          <Row>
            <Col span={8}>
              Date
              <DatePicker onChange={onChange} bordered={false} />
            </Col>
            <Col span={12}>
              Pay System
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
            </Col>
          </Row>
          <Box marginTop={10}>
            <Row>
              <Col span={12}>
                Select background of card
                <AntInput
                  type="color"
                  value={bg}
                  bordered={false}
                  width="50%"
                  onChange={handleColorChange}
                />
              </Col>
            </Row>
          </Box>
        </Box>
      </CustomModal>
      <Box display="flex">
        {cards.map(({ _id, date, paySystem, amount, background }) => (
          <Box
            key={_id}
            background={background}
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
                style={{ color: `${Colors.White}`, transform: "rotate(90deg)" }}
              />
              <Box color={Colors.White}>{date}</Box>
            </Box>
            <Box>
              {paySystem === "visa" ? (
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
                  >{`${paySystem.toUpperCase()} Card`}</Box>
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
                  >{`${paySystem.toUpperCase()}`}</Box>
                </>
              )}
            </Box>
            <Box>
              <Box
                color={Colors.White}
                paddingLeft={10}
                fontSize={25}
                fontWeight={700}
              >{`$${amount}`}</Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
