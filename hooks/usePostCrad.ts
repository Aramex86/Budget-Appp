import { UserCards } from "./../models/userModel";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { notification } from "antd";
import { fetchData } from "./useGetCards";

const postCard = async (card: UserCards) => {
  const { data } = await axios.post("/api/postcard", card);
  return data;
};

export function usePostCard() {
  const { refetch } = useQuery(["cards"], fetchData);
  return useMutation(["newCard"], postCard, {
    onSuccess: () => {
      refetch();
      notification.success({
        message: "Card added with succes",
        duration: 3,
      });
    },
  });
}
