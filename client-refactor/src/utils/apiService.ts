import axios from "axios";

axios.defaults.withCredentials = true;

const apiService = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export default apiService;
