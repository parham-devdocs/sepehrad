import axios from "axios";
const BASE_URL = "https://sepehradmanage.runflare.run/accounts/api";
const axiosConfig = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json", // change according header type accordingly
  },
});

export default axiosConfig