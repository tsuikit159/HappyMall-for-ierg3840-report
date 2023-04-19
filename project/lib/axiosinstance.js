import axios from "axios";

export function domain_url() {
  if (process.env.NODE_ENV == "production")
  {
    return "https://real-ierg3840-project-submit.vercel.app/"
  }
  else if (process.env.NODE_ENV == test)
   return "http://localhost:3000"
   else
   {
    return "https://real-ierg3840-project-submit-git-main-tsuikit159.vercel.app/"
  }
    
}

const axiosInstance = axios.create({
  baseURL: domain_url(),

  headers: {
    "Content-Type": "application/json",
  },
  // .. other options
});

export default axiosInstance;