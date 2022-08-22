import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const getPeriod = async (params: any) => {
  console.log(params);
  const { data } = await axios.post("/api/transactionsByPeriod", params);
  return data;
};

export function usePostPeriod() {
  return useMutation(["period"], getPeriod);
}
