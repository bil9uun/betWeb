import axios from "axios";

const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:9090";

const instanceAxios = axios.create({
  baseURL: BASE_API_URL,
  timeout: 10000,
});

export default instanceAxios;
