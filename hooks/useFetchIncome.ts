import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const postIncomeOnCard = async () => {
  const { data } = await axios.get("/api/getIncome");
  return data;
};

export function useFetchIncome() {
  return useQuery(["income"], postIncomeOnCard);
}
