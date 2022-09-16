import { UserCards } from "./../models/userModel";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { notification } from "antd";
import { fetchData } from "./useGetUser";

const postMainCard = async (card: UserCards) => {
  const { data } = await axios.post("/api/setMainCard", card);
  return data;
};

export function usePostMainCard() {
  const { refetch } = useQuery(["cards"], fetchData);
  return useMutation(["newCard"], postMainCard, {
    onSuccess: () => {
      refetch();
      notification.success({
        message: "Card set with succes",
        duration: 3,
      });
    },
  });
}
