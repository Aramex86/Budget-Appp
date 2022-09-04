import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const postIncomeOnCard = async (incomeAmount: any) => {
  const { data } = await axios.post("/api/postIncome", incomeAmount);
  return data;
};

export function usePostIncome() {
  const { refetch } = useQuery(["income"], postIncomeOnCard);
  return useMutation(["income"], postIncomeOnCard, {
    onSuccess: () => {
      refetch();
    },
  });
}
