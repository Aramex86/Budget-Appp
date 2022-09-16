import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { BalanceCard } from "../components/Dashboard/BalanceCard/BalanceCard";
import BankCard from "../components/Dashboard/BankCard/BankCard";
import { Box } from "../components/Box/Box";
import LineChart from "../components/Dashboard/Chart/Chart";
import RecentActivity from "../components/Dashboard/RecentActivity/RecentActivity";
import { useGetUser } from "../hooks";
import { IUser, UserCards } from "../models/userModel";

const Home: NextPage = () => {
  const {
    status,
    data = [],
    error,
    isFetching,
  } = useGetUser({ enabled: false });

  const [user] = data as IUser[];
  const { cards } = user || {};

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Budget App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box padding={50}>
        <Box display="flex" justifyContent="space-between">
          <BalanceCard cards={cards} />
          <BankCard cards={cards} isFetching={isFetching} />
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
