import {
  HomeOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { Box } from "..";
import { PartyIcon } from "../Icons";
import { MedicineIcon } from "../Icons/MedicineIcon";

interface IconByCat {
  category: string;
  size?: string | number;
  text?: boolean;
  switchBackground?: boolean;
}

export const SetIconByCategory = ({
  category,
  size,
  text,
  switchBackground,
}: IconByCat) => {
  switch (category) {
    case "Apartament":
      return (
        <Box display="flex">
          <Box
            width={size}
            height={size}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={50}
            background={switchBackground ? "rgb(39 199 182 / 19%)" : ""}
            boxShadow={switchBackground ? "0px 0px 3px 2px #74d2a88c" : ""}
            marginRight={15}
          >
            <HomeOutlined
              style={{ fontSize: "24px", color: `rgb(39 199 182)` }}
            />
          </Box>
          <Box alignSelf="center" fontWeight={500}>
            {text ? null : category}
          </Box>
        </Box>
      );
    case "Grocery":
      return (
        <Box display="flex">
          <Box
            width={size}
            height={size}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={50}
            background={switchBackground ? "rgb(39 199 182 / 19%)" : ""}
            boxShadow={switchBackground ? "0px 0px 3px 2px #74d2a88c" : ""}
            marginRight={15}
          >
            <ShoppingCartOutlined
              style={{ fontSize: "24px", color: "rgb(101 27 206)" }}
            />
          </Box>
          <Box alignSelf="center" fontWeight={500}>
            {text ? null : category}
          </Box>
        </Box>
      );

    case "Party":
      return (
        <Box display="flex">
          <Box
            width={size}
            height={size}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={50}
            background={switchBackground ? "rgb(39 199 182 / 19%)" : ""}
            boxShadow={switchBackground ? "0px 0px 3px 2px #74d2a88c" : ""}
            marginRight={15}
          >
            <PartyIcon style={{ fontSize: "24px", fill: "rgb(60 153 67)" }} />
          </Box>
          <Box alignSelf="center" fontWeight={500}>
            {text ? null : category}
          </Box>
        </Box>
      );
    case "Medicine":
      return (
        <Box display="flex">
          <Box
            width={size}
            height={size}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={50}
            background={switchBackground ? "rgb(39 199 182 / 19%)" : ""}
            boxShadow={switchBackground ? "0px 0px 3px 2px #74d2a88c" : ""}
            marginRight={15}
          >
            <MedicineIcon
              style={{ fontSize: "24px", fill: "rgb(217 51 51)" }}
            />
          </Box>
          <Box alignSelf="center" fontWeight={500}>
            {text ? null : category}
          </Box>
        </Box>
      );
    case "Income":
      return (
        <Box display="flex">
          <Box
            width={size}
            height={size}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={50}
            background={switchBackground ? "rgb(39 199 182 / 19%)" : ""}
            boxShadow={switchBackground ? "0px 0px 3px 2px #74d2a88c" : ""}
            marginRight={15}
          >
            <DollarOutlined
              style={{ fontSize: "24px", color: "rgb(50 170 220)" }}
            />
          </Box>
          <Box alignSelf="center" fontWeight={500}>
            {text ? null : category}
          </Box>
        </Box>
      );
  }
  return <></>;
};
