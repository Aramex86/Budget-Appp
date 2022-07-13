import { Divider } from "antd";
import { Colors } from "../../helpers/enums/colors";
import { Box, TabsHeading, Switch } from "../../components";

export function NotificationSettings() {
  return (
    <Box background={Colors.White} margin="auto" width="80%">
      {" "}
      <TabsHeading text="Manage your Notifications" />
      <Box paddingLeft={25} marginBottom={45}>
        Below are the notifications you may manage.
      </Box>
      <Box marginTop={50} padding="25px 25px">
        <Box display="flex">
          <Box fontWeight={600} width="50%">
            Email notification
          </Box>
          <Box>
            <Switch
              borderRadius="0px"
              background={Colors.White}
              border={`1px solid ${Colors.VistaBlue}`}
              checkedChildren="ON"
              unCheckedChildren="OFF"
              color="black"
              defaultChecked={false}
            />
          </Box>
        </Box>
        <Divider />
      </Box>
    </Box>
  );
}
