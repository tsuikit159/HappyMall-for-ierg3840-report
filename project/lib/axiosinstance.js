import axios from "axios";

export function domain_url() {
  return "http://localhost:3000"
    
}

const axiosInstance = axios.create({
  baseURL: domain_url(),

  headers: {
    "Content-Type": "application/json",
  },
  // .. other options
});

export default axiosInstance;