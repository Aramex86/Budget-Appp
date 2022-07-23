import { Colors } from "../../../helpers/enums/colors";
import { Box } from "../../Box/Box";

export function BalanceCard() {
  return (
    <Box
      width={315}
      background={Colors.White}
      padding="21px"
      display="flex"
      flexDirection="column"
      borderRadius="19px"
      boxShadow="0px 2px 2px 2px #80808040"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={15}
      >
        <Box fontWeight={900} fontSize={16} color={Colors.SilverSand}>
          4263 9826 4026 9299
        </Box>
        <Box
          fontWeight={900}
          fontSize={20}
          color={Colors.SilverSand}
          position="relative"
        >
          <Box position="absolute" top={-25} right={-1} cursor="pointer">
            ...
          </Box>
        </Box>
      </Box>
      <Box>
        <Box fontSize={30} fontWeight={700} color={Colors.CloudBurst}>
          7,920.00
          <sup
            style={{
              color: `${Colors.SilverSand}`,
              fontSize: 15,
              marginLeft: 10,
            }}
          >
            USD
          </sup>
        </Box>
        <Box color={Colors.SilverSand} fontSize={16}>
          Total Balance
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        flexDirection="column"
        alignItems="end"
      >
        <Box fontWeight={600} color={Colors.VistaBlue} fontSize={18}>
          +40%
        </Box>
        <Box color={Colors.SilverSand}>this week</Box>
      </Box>
    </Box>
  );
}
