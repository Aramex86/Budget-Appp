import { IUser } from "./../models/userModel";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async () => {
  const { data } = await axios.get("api/users");
  const cards = data?.map((d: IUser) => d.cards).flat();
  return cards;
};

export function useGetCards() {
  return useQuery(["cards"], fetchData);
}
