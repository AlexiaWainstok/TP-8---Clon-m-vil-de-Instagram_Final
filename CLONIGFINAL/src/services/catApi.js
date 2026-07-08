import axios from "axios";

const api = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
});

export const getCats = async () => {
  const response = await api.get("/images/search?limit=10");
  return response.data;
};