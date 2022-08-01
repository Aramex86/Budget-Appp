import {
  PlusOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import { Colors } from "../../../helpers/enums/colors";
import { Box, Button } from "../..";
import { PartyIcon, MedicineIcon } from "../../Icons";

export function Categories() {
  return (
    <Box
      background={Colors.White}
      padding="35px 25px"
      display="flex"
      flexDirection="column"
      borderRadius="20px"
      boxShadow="#8080806e 0px 1px 6px 1px"
    >
      <Box
        fontWeight={700}
        fontSize={18}
        display="flex"
        justifyContent="space-between"
      >
        Categories
        <Button
          borderRadius={50}
          width={30}
          height={30}
          display="flex"
          justifyContent="center"
          alignItems="center"
          border={`1px solid ${Colors.BlueDiamond}`}
        >
          <Tooltip title="Add Category" color={Colors.VistaBlue}>
            <PlusOutlined
              style={{ fontSize: "16px", color: `${Colors.BlueDiamond}` }}
            />
          </Tooltip>
        </Button>
      </Box>
      <Box
        marginTop={25}
        background={Colors.White}
        display="flex"
        justifyContent="space-around"
      >
        <Box
          padding="10px 10px"
          background="rgb(89 221 207 / 44%)"
          borderRadius={12}
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          fontWeight={700}
          boxShadow="0px 2px 4px 2px #8a8a8a4f"
          marginBottom={10}
          width="20%"
        >
          <Box>
            <HomeOutlined
              style={{ fontSize: "24px", color: `rgb(39 199 182)` }}
            />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Box>Apartament</Box>
            <Box>1,500$</Box>
          </Box>
        </Box>
        <Box
          padding="10px 10px"
          background="rgb(144 89 221 / 44%)"
          borderRadius={12}
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          fontWeight={700}
          boxShadow="0px 2px 4px 2px #8a8a8a4f"
          marginBottom={10}
          width="20%"
        >
          <Box>
            <ShoppingCartOutlined
              style={{ fontSize: "24px", color: "rgb(101 27 206)" }}
            />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Box>Grocery</Box>
            <Box>3000$</Box>
          </Box>
        </Box>
        <Box
          padding="10px 10px"
          background="rgb(89 221 98 / 44%)"
          borderRadius={12}
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          fontWeight={700}
          boxShadow="0px 2px 4px 2px #8a8a8a4f"
          marginBottom={10}
          width="20%"
        >
          <Box>
            <PartyIcon style={{ fontSize: "24px", fill: "rgb(60 153 67)" }} />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Box>Party</Box>
            <Box>5,300$</Box>
          </Box>
        </Box>
        <Box
          padding="10px 10px"
          background="rgb(221 89 89 / 44%)"
          borderRadius={12}
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          fontWeight={700}
          boxShadow="0px 2px 4px 2px #8a8a8a4f"
          marginBottom={10}
          width="20%"
        >
          <Box>
            <MedicineIcon
              style={{ fontSize: "24px", fill: "rgb(217 51 51)" }}
            />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Box>Medicine</Box>
            <Box>1000$</Box>
          </Box>
        </Box>
        <Box
          fontWeight={700}
          display="flex"
          alignItems="end"
          cursor="pointer"
          marginBottom={10}
        >
          See all category...
        </Box>
      </Box>
    </Box>
  );
}
