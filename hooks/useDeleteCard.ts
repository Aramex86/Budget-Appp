import { UserCards } from "./../models/userModel";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { notification } from "antd";
import { fetchData } from "./useGetUser";

const deleteCard = async (payload: Record<string, string | UserCards>) => {
  const { data } = await axios.post("/api/deleteCard", payload);
  return data;
};

export function useDeleteCard() {
  const { refetch } = useQuery(["cards"], fetchData);
  return useMutation([], deleteCard, {
    onSuccess: () => {
      refetch();
      notification.success({
        message: "Card deleted with succes",
        duration: 3,
      });
    },
  });
}
