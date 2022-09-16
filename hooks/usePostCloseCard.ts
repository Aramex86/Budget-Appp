import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { notification } from "antd";
import { fetchData } from "./useGetUser";

const closeCard = async (payload: Record<string, string>) => {
  const { data } = await axios.post("/api/closeCard", payload);
  return data;
};

export function usePostCloseCard() {
  const { refetch } = useQuery(["cards"], fetchData);
  return useMutation([], closeCard, {
    onSuccess: () => {
      notification.success({
        message: "Card closed with succes",
        duration: 3,
      });
      refetch();
    },
  });
}
