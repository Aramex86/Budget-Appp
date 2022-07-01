import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import { Colors } from "../../helpers/enums/colors";
import Box from "../Box/Box";
import Button from "../Buttons/Button";
import { Divider } from "../Divider/Divider";
import { AntInput } from "../Input/Input";
import { Switch } from "../Switch/Switch";
import { TabsHeading } from "../TabsHeading/TabsHeading";

export function ChangePassword() {
  const [form] = useForm();

  const { setFieldsValue, getFieldsValue, resetFields, validateFields } = form;

  const onSubmit = () => {
    console.log(getFieldsValue());
  };

  return (
    <Form form={form} component={false}>
      <Box background={Colors.White} padding="0 25px">
        <TabsHeading text="Manage your Security Settings" />
        <Box paddingLeft={25} marginBottom={45}>
          Change your password.
        </Box>
        <Box display="flex">
          <Box width={180} fontWeight={600}>
            Username
          </Box>
          <Box width="80%">
            <Form.Item
              name="userName"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <AntInput
                suffix={
                  <UserOutlined
                    style={{
                      color: `${Colors.SilverSand}`,
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  />
                }
                placeholder="userName"
              />
            </Form.Item>
          </Box>
        </Box>
        <Divider />
        <Box display="flex">
          <Box width={180} fontWeight={600}>
            Email address
          </Box>
          <Box width="80%">
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <AntInput
                suffix={
                  <MailOutlined
                    style={{
                      color: `${Colors.SilverSand}`,
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  />
                }
                placeholder=" Email address"
                type="email"
              />
            </Form.Item>
          </Box>
        </Box>
        <Divider />
        <Box display="flex">
          <Box width={180} fontWeight={600}>
            Enter your password
          </Box>
          <Box width="80%">
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <AntInput
                suffix={
                  <LockOutlined
                    style={{
                      color: `${Colors.SilverSand}`,
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  />
                }
                placeholder="Enter your password"
              />
            </Form.Item>
          </Box>
        </Box>
        <Divider />
        <Box display="flex">
          <Box width={180} fontWeight={600}>
            Confirm Password
          </Box>
          <Box width="80%">
            <Form.Item
              name="passwordConfirm"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <AntInput
                suffix={
                  <LockOutlined
                    style={{
                      color: `${Colors.SilverSand}`,
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  />
                }
                placeholder="Confirm Password"
              />
            </Form.Item>
          </Box>
        </Box>
        <Divider />
        <Box display="flex">
          <Box width={180} fontWeight={600}>
            Remember password
          </Box>
          <Box>
            <Form.Item name="rememberPassword">
              <Switch
                borderRadius="0px"
                background={Colors.White}
                border={`1px solid ${Colors.VistaBlue}`}
                checkedChildren="ON"
                unCheckedChildren="OFF"
                color="black"
                defaultChecked={false}
              />
            </Form.Item>
          </Box>
        </Box>
        <Box marginTop={25} paddingBottom={25}>
          <Button
            backgroundColor={Colors.VistaBlue}
            color={Colors.White}
            border="none"
            onClick={onSubmit}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
    </Form>
  );
}
