import { Colors } from "../../../helpers/enums/colors";
import TransactionButton from "../../Buttons/TransactionButton";
import { Box, Button, AntAvatar } from "../..";

const mockData = [
  {
    id: 1,
    category: "expences",
    title: "rent house pay",
    amount: "-2500 USD",
    date: "29 March 2022, 19:00 PM",
  },
  {
    id: 2,
    category: "income",
    title: "salary",
    amount: "+4500 USD",
    date: "29 March 2022, 19:00 PM",
  },
  {
    id: 3,
    category: "expences",
    title: "chill party",
    amount: "-150 USD",
    date: "29 March 2022, 19:00 PM",
  },
  {
    id: 4,
    category: "income",
    title: "extra time",
    amount: "+1000 USD",
    date: "29 March 2022, 19:00 PM",
  },
  {
    id: 5,
    category: "expences",
    title: "buy groceries",
    amount: "-300 USD",
    date: "29 March 2022, 19:00 PM",
  },
];

export default function RecentActivity() {
  return (
    <Box width="25%">
      <Box fontWeight={700} fontSize={18} marginBottom={15}>
        Recent Activity
      </Box>
      <Box background={Colors.White} borderRadius="10px" padding="20px 0">
        {mockData.map(({ id, category, title, amount, date }) => (
          <Box
            key={id}
            display="flex"
            justifyContent="space-between"
            padding="7px 25px 25px 25px"
            alignItems="center"
          >
            <Box width="10%">
              <AntAvatar
                background={
                  category === "income"
                    ? `${Colors.VistaBlue}`
                    : `${Colors.CoralPink}`
                }
                icon={
                  <Box fontWeight={700}>
                    {category.slice(0, 1).toLocaleUpperCase()}
                  </Box>
                }
              />
            </Box>
            <Box width="60%">
              <Box textTransform="capitalize" fontWeight={700} fontSize={16}>
                {title}
              </Box>
              <Box fontSize={12} color={Colors.SilverSand}>
                {date}
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="end">
              <Box
                fontSize={18}
                fontWeight={900}
                color={Colors.SilverSand}
                cursor="pointer"
              >
                ...
              </Box>
              <Box
                color={
                  category === "income"
                    ? `${Colors.VistaBlue}`
                    : `${Colors.CoralPink}`
                }
                fontWeight={700}
              >
                {amount}
              </Box>
            </Box>
          </Box>
        ))}
        <Box display="flex" justifyContent="center">
          <TransactionButton
            marginRight={25}
            border="none"
            borderRadius="7px"
            backgroundColor={Colors.CloudBurst}
            color={Colors.VistaBlue}
            onClick={() => console.log("New transaction")}
            fontWeight={400}
          >
            New transaction
          </TransactionButton>
          <TransactionButton
            border={`1px solid ${Colors.SilverSand}`}
            borderRadius="7px"
            fontWeight={400}
            onClick={() => console.log("Settings")}
          >
            Settings
          </TransactionButton>
        </Box>
      </Box>
    </Box>
  );
}
