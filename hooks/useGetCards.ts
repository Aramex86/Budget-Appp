import { IUser } from "./../models/userModel";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async () => {
  const { data } = await axios.get("/api/users");

  return data;
};

function useGetCards({ enabled }: { enabled: boolean }) {
  return useQuery(["cards"], fetchData, {
    enabled: enabled,
  });
}

export { fetchData, useGetCards };
