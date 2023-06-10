import axios from "axios";

const api = axios.create({
  baseURL: "https://3plus.world",
  withCredentials: true,
});

export default api;
