import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const queryByMonth = async (param: any) => {
  const { data } = await axios.post("/api/getByMonth", param);
  return data;
};

export function useGetByMonth() {
  return useMutation(["month"], queryByMonth);
}
