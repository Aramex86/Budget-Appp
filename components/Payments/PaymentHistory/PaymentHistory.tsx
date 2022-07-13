import { Radio, RadioChangeEvent, Space } from "antd";
import { Colors } from "../../../helpers/enums/colors";
import { Box, RadioBtn, TabsHeading } from "../..";

export function PaymentHistory() {
  const onChange = (e: RadioChangeEvent) => {
    console.log(`radio checked:${e.target.value}`);
  };

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
        <Radio.Group
          onChange={onChange}
          defaultValue="today"
          buttonStyle="solid"
        >
          <Space>
            <RadioBtn value="monthly">Monthly</RadioBtn>
            <RadioBtn value="weekly">Weekly</RadioBtn>
            <RadioBtn value="today">Today</RadioBtn>
          </Space>
        </Radio.Group>
      </Box>
    </Box>
  );
}
