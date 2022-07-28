import { UserCards } from "./../models/userModel";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
const postCard = async (obj: any) => {
  const { data } = await axios.post("api/postcard", obj);

  return data;
};

export function usePostCard(
  { url, params = {} as UserCards }: { url?: string; params?: UserCards },
  options?: any
) {
  return useMutation(["newCard"], postCard);
}
