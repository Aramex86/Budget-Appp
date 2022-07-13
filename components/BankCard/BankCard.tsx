import { PlusOutlined, WifiOutlined } from "@ant-design/icons";
import { Colors } from "../../helpers/enums/colors";
import Image from "next/image";
import { Box, Button } from "../../components";

interface ICards {
  id: number;
  date: string;
  paySystem: string;
  amount: string;
}

const cards = [
  {
    id: 1,
    date: "12/24",
    paySystem: "mastercard",
    amount: "3,920",
    backgound: "#4D53E0",
    cardHolder: "Jhon Doe",
  },
  {
    id: 2,
    date: "09/24",
    paySystem: "visa",
    amount: "2,500",
    backgound: "#FF8C00",
    cardHolder: "Jhon Doe",
  },
  {
    id: 3,
    date: "08/24",
    paySystem: "mastercard",
    amount: "1,500",
    backgound: "#202041",
    cardHolder: "Jhon Doe",
  },
];

export default function BankCard() {
  return (
    <Box width="70%" display="flex" justifyContent="flex-end">
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
        />
      </Box>
      <Box display="flex">
        {cards.map(({ id, backgound, date, paySystem, amount }) => (
          <Box
            key={id}
            background={backgound}
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
