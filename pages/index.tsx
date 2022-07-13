import type { NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
import { BalanceCard } from "../components/BalanceCard/BalanceCard";
import BankCard from "../components/BankCard/BankCard";
import { Box } from "../components/Box/Box";
import LineChart from "../components/Chart/Chart";
import RecentActivity from "../components/RecentActivity/RecentActivity";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Budget App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box padding={50}>
        <Box display="flex" justifyContent="space-between">
          <BalanceCard />
          <BankCard />
        </Box>
        <Box display="flex" justifyContent="space-between" marginTop={40}>
          <LineChart />
          <RecentActivity />
        </Box>
      </Box>
    </>
  );
};

export default Home;
