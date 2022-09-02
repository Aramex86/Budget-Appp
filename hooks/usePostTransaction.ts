import { useMutation, useQuery } from "@tanstack/react-query";
import { notification } from "antd";
import axios from "axios";
import { UserPayments } from "./../models/userModel";
import { fetchData } from "./useGetCards";

const postTransaction = async (transaction: UserPayments) => {
  const { data } = await axios.post("/api/posttransaction", transaction);
  return data;
};

export function usePostTransaction() {
  const { refetch } = useQuery(["cards"], fetchData);
  return useMutation(["newTransaction"], postTransaction, {
    onSuccess: () => {
      refetch();
      notification.success({
        message: "Transaction added with succes",
        duration: 3,
      });
      refetch();
    },
  });
}
