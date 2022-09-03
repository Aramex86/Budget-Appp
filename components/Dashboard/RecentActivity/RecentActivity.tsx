import { Colors } from "../../../helpers/enums/colors";
import TransactionButton from "../../Buttons/TransactionButton";
import { Box } from "../..";
import { UserPayments } from "../../../models/userModel";
import { SetIconByCategory } from "../../SetIconByCategory/setIconsByCategory";
import Link from "next/link";

interface IRecent {
  recentActivity: UserPayments[];
}

export default function RecentActivity({ recentActivity }: IRecent) {
  const sortArr = (a?: UserPayments, b?: UserPayments) => {
    return Number(b?.date?.substring(4, 5)) - Number(a?.date?.substring(4, 5));
  };

  const lastFive = recentActivity?.slice(-5).sort(sortArr);

  return (
    <Box width="25%">
      <Box fontWeight={700} fontSize={18} marginBottom={15}>
        Recent Activity
      </Box>
      <Box background={Colors.White} borderRadius="10px" padding="20px 0">
        {lastFive?.map(({ _id, category, amount, date }) => (
          <Box
            key={_id}
            display="flex"
            justifyContent="space-between"
            padding="7px 25px 25px 25px"
            alignItems="center"
          >
            <Box>
              <SetIconByCategory category={category} text size={30} />
            </Box>
            <Box width="60%">
              <Box textTransform="capitalize" fontWeight={700} fontSize={16}>
                {category}
              </Box>
              <Box fontSize={12} color={Colors.SilverSand}>
                {date}
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="end">
              {/* <Box
                fontSize={18}
                fontWeight={900}
                color={Colors.SilverSand}
                cursor="pointer"
              >
                ...
              </Box> */}
              <Box
                color={
                  category === "Income"
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
            <Link href="/payments/payments" passHref>
              New transaction
            </Link>
          </TransactionButton>
          {/* <TransactionButton
            border={`1px solid ${Colors.SilverSand}`}
            borderRadius="7px"
            fontWeight={400}
            onClick={() => console.log("Settings")}
          >
            Settings
          </TransactionButton> */}
        </Box>
      </Box>
    </Box>
  );
}
