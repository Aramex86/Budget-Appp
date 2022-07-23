import type { NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
import { BalanceCard } from "../components/Dashboard/BalanceCard/BalanceCard";
import BankCard from "../components/Dashboard/BankCard/BankCard";
import { Box } from "../components/Box/Box";
import LineChart from "../components/Dashboard/Chart/Chart";
import RecentActivity from "../components/Dashboard/RecentActivity/RecentActivity";
import { connectToDatabase } from "../lib/mongoDb";
import { IUser } from "../models/userModel";

interface UserProps {
  users: IUser[];
}

const Home: NextPage<UserProps> = ({ users }: { users: IUser[] }) => {
  const [{ cards }] = users;
  console.log(cards);

  return (
    <>
      <Head>
        <title>users</title>
        <meta name="description" content="Budget App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box padding={50}>
        <Box display="flex" justifyContent="space-between">
          <BalanceCard />
          <BankCard cards={cards} />
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

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  console.log("DB", db);
  const users = await db
    .collection("users")
    .find({})
    .sort({ metacritic: -1 })
    .limit(10)
    .toArray();
  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  };
}
