import { InfoCircleOutlined } from "@ant-design/icons";
import { Spin, Tooltip } from "antd";
import { Colors } from "../../../helpers/enums/colors";
import { formatedAmount } from "../../../helpers/formatedAmount";
import { UserCards } from "../../../models/userModel";
import { Box } from "../../Box/Box";
import { antIcon } from "../../Icons/SpinerIcon";

interface IMainCard {
  mainCard: UserCards;
  isFetching: boolean;
}
export function MainCard({ mainCard, isFetching }: IMainCard) {
  if (isFetching) {
    return <Spin indicator={antIcon} />;
  }
  return (
    <Box
      background={Colors.White}
      padding="20px 50px"
      display="flex"
      justifyContent="space-between"
      position="relative"
      borderRadius="20px"
      boxShadow="#8080806e 0px 1px 6px 1px"
      flexDirection="column"
    >
      <Box color={Colors.Black}>
        <Box fontSize={16} fontWeight={600}>
          Main Balance
        </Box>
        <Box fontSize={26} fontWeight={700} marginBottom={10} display="flex">
          <Box width="55%">
            {formatedAmount(mainCard?.amount, mainCard?.currency)}
          </Box>
          <Box
            color={Colors.AmethystSmoke}
            fontSize={18}
            alignSelf="center"
            width="45%"
          >
            {mainCard?.currency}
          </Box>
        </Box>
      </Box>
      <Box
        fontWeight={600}
        fontSize={18}
        textAlign="center"
        marginBottom={10}
        color={Colors.AmethystSmoke}
      >
        {mainCard?.cardNumber.replace(/.(?=.{4})/g, "*")}
      </Box>
      <Box display="flex">
        <Box display="flex" justifyContent="center" alignItems="baseline">
          <Box marginRight={35}>
            <Box color={Colors.SilverSand}>Valid Thru</Box>
            <Box fontWeight={600}>{mainCard?.date}</Box>
          </Box>
          <Box>
            <Box color={Colors.SilverSand}>Card Holder</Box>
            <Box fontWeight={600}>{mainCard?.cardHolder}</Box>
          </Box>
        </Box>
      </Box>
      <Box position="absolute" top={10} right={20}>
        <Tooltip
          title="Change main balance in settings"
          color={Colors.VistaBlue}
        >
          <InfoCircleOutlined
            style={{ color: Colors.VistaBlue, cursor: "pointer", fontSize: 16 }}
          />
        </Tooltip>
      </Box>
    </Box>
  );
}
