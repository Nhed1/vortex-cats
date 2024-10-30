import axios from "axios";

export const catApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CATS_API_ENDPOINT,
  headers: {
    "x-api-key": process.env.NEXT_PUBLIC_CATS_API_KEY,
    "Content-Type": "application/json",
  },
});
