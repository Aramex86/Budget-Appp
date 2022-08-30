import { useMutation, useQuery } from "@tanstack/react-query";
import { notification } from "antd";
import axios from "axios";

const getPeriod = async (params: any) => {
  const { data } = await axios.post("/api/transactionsByPeriod", params);
  return data;
};

export function usePostPeriod() {
  const { refetch } = useQuery(["period"], getPeriod);
  return useMutation(["period"], getPeriod, {
    onSuccess: () => {
      refetch();
    },
  });
}
