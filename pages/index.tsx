import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { BalanceCard } from "../components/Dashboard/BalanceCard/BalanceCard";
import BankCard from "../components/Dashboard/BankCard/BankCard";
import { Box } from "../components/Box/Box";
import LineChart from "../components/Dashboard/Chart/Chart";
import RecentActivity from "../components/Dashboard/RecentActivity/RecentActivity";
import { useGetCards } from "../hooks";
import { IUser, UserCards } from "../models/userModel";

const Home: NextPage = () => {
  const {
    status,
    data: cards = [],
    error,
    isFetching,
  } = useGetCards({ enabled: false });

  // const cards: UserCards[] = card[0]?.cards;
  const [user] = cards as IUser[];

  return (
    <>
      <Head>
        <title>users</title>
        <meta name="description" content="Budget App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box padding={50}>
        <Box display="flex" justifyContent="space-between">
          <BalanceCard cards={user?.cards} />
          <BankCard cards={user?.cards} isFetching={isFetching} />
        </Box>
        <Box display="flex" justifyContent="space-between" marginTop={40}>
          <LineChart />
          <RecentActivity recentActivity={user?.payments} />
        </Box>
      </Box>
    </>
  );
};

export default Home;
