import { IUser } from "./../../models/userModel";
import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchData(
  endpoit: string,
  method?: string,
  query?: string,
  postObj?: Record<string, any>,
  id?: string
) {
  const [data, setData] = useState<any>();
  const [response, setResponse] = useState<any>();

  useEffect(() => {
    if (method === "GET") {
      axios.get(`${endpoit}`).then((res) => {
        if (query) {
          res.data.find((el: any) => {
            // console.log(el[`${query}`]);
            setData(el[`${query}`]);
          });
        } else {
          setData(res.data);
        }
      });
    }

    if (method === "POST") {
      console.log("POST");
    }
  }, []);

  return [data, response];
}
