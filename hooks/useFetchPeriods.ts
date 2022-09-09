import { useMutation, useQuery } from "@tanstack/react-query";
import { notification } from "antd";
import axios from "axios";

const postPeriod = async (params: any) => {
  const { data } = await axios.post("/api/transactionsByPeriod", params);
  return data;
};

export function usePostPeriod() {
  const { refetch } = useQuery(["period"], postPeriod);
  return useMutation(["period"], postPeriod, {
    onSuccess: () => {
      refetch();
    },
  });
}
