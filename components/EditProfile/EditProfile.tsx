import { CheckOutlined, EditOutlined } from "@ant-design/icons";
import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useEffect, useState } from "react";
import { Colors } from "../../helpers/enums/colors";
import { Divider } from "../Divider/Divider";
import { AntInput } from "../Input/Input";
import { TabsHeading } from "../TabsHeading/TabsHeading";
import { Box, Button } from "../../components";

interface IUser {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}

export function EditProfile() {
  const [activateName, setActivateName] = useState<boolean>(false);
  const [activateLastName, setActivateLastName] = useState<boolean>(false);
  const [activateEmail, setActivateEmail] = useState<boolean>(false);
  const [activatePhone, setActivatePhone] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({
    firstName: "Jhon",
    lastName: "Doe",
    email: "JhonDoe@gmail.com",
    phone: "(304) 33-2867-499",
  });

  const [form] = useForm();

  const { setFieldsValue, getFieldsValue, resetFields, validateFields } = form;

  useEffect(() => {
    setFieldsValue({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
    });
  }, []);

  const editUser = async () => {
    const { firstName, lastName, email, phone } = await validateFields([
      "email",
      "lastName",
      "firstName",
      "phone",
    ]);
    setUser({
      firstName: firstName ? firstName : user.firstName,
      lastName: lastName ? lastName : user.lastName,
      email: email ? email : user.email,
      phone: phone ? phone : user.phone,
    });
    firstName && setActivateName(false);
    lastName && setActivateLastName(false);
    email && setActivateEmail(false);
    phone && setActivatePhone(false);
  };

  const onSubmit = () => {
    console.log("send User", user);
  };

  return (
    <Form form={form} component={false}>
      <Box background={Colors.White}>
        <TabsHeading text="Manage your Profile Details" />
        <Box paddingLeft={25} marginBottom={45}>
          Bellow are name email and phone for your account.
        </Box>
        <Box margin=" 25px 0  0 0 " padding="0 25px">
          <Box display="flex">
            <Box width={150} fontWeight={600}>
              First Name
            </Box>
            <Box>
              {activateName ? (
                <Form.Item
                  name="firstName"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <AntInput borderColor={Colors.VistaBlue} />
                </Form.Item>
              ) : (
                <Box width={183}>{user.firstName} </Box>
              )}
            </Box>
            <Box marginLeft={15}>
              <Button
                icon={
                  !activateName ? (
                    <EditOutlined onClick={() => setActivateName(true)} />
                  ) : (
                    <CheckOutlined onClick={editUser} />
                  )
                }
                border="none"
                color={Colors.SilverSand}
              />
            </Box>
          </Box>
          <Divider />
          <Box display="flex">
            <Box width={150} fontWeight={600}>
              Last Name
            </Box>
            <Box>
              {activateLastName ? (
                <Form.Item
                  name="lastName"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <AntInput borderColor={Colors.VistaBlue} />
                </Form.Item>
              ) : (
                <Box width={183}>{user.lastName} </Box>
              )}
            </Box>
            <Box marginLeft={15}>
              <Button
                icon={
                  !activateLastName ? (
                    <EditOutlined onClick={() => setActivateLastName(true)} />
                  ) : (
                    <CheckOutlined onClick={editUser} />
                  )
                }
                border="none"
                color={Colors.SilverSand}
              />
            </Box>
          </Box>
          <Divider />
          <Box display="flex">
            <Box width={150} fontWeight={600}>
              Email Address
            </Box>
            <Box>
              {activateEmail ? (
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                    },
                  ]}
                >
                  <AntInput type="email" borderColor={Colors.VistaBlue} />
                </Form.Item>
              ) : (
                <Box width={183}>{user.email}</Box>
              )}
            </Box>
            <Box marginLeft={15}>
              <Button
                icon={
                  !activateEmail ? (
                    <EditOutlined onClick={() => setActivateEmail(true)} />
                  ) : (
                    <CheckOutlined onClick={editUser} />
                  )
                }
                border="none"
                color={Colors.SilverSand}
              />
            </Box>
          </Box>
          <Divider />
          <Box display="flex">
            <Box width={150} fontWeight={600}>
              Phone Number
            </Box>
            <Box>
              {activatePhone ? (
                <Form.Item name="phone">
                  <AntInput borderColor={Colors.VistaBlue} />
                </Form.Item>
              ) : (
                <Box width={183}>{user.phone}</Box>
              )}
            </Box>
            <Box marginLeft={15}>
              <Button
                icon={
                  !activatePhone ? (
                    <EditOutlined onClick={() => setActivatePhone(true)} />
                  ) : (
                    <CheckOutlined onClick={editUser} />
                  )
                }
                border="none"
                color={Colors.SilverSand}
              />
            </Box>
          </Box>
          <Divider />
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
      </Box>
    </Form>
  );
}
