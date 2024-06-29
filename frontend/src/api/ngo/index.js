import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const AuthAPI = () => {
  if (typeof window !== "undefined") {
    return axios.create({
      baseURL: `http://localhost:5000/v1`,
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
  } else {
    return axios.create({
      baseURL: `http://localhost:5000/v1`,
      headers: {
        authorization: `Bearer`,
        "Content-Type": "application/json",
      },
    });
  }
};

const api = AuthAPI();

export const createEvent = async (eventinfo) => {
  const { data } = await AuthAPI().post("/create-event", eventinfo);
  console.log("ngo index.js", data);
  return response.data;
};
