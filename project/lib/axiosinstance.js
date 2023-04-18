import axios from "axios";

export function domain_url() {
  return "http://localhost:3000"||"https://real-ierg3840-project-submit.vercel.app/"||"https://real-ierg3840-project-submit-4ybt2wlt7-tsuikit159.vercel.app/"
    
}

const axiosInstance = axios.create({
  baseURL: domain_url(),

  headers: {
    "Content-Type": "application/json",
  },
  // .. other options
});

export default axiosInstance;