import axios from "axios";

const apiClient = axios.create({
  
  baseURL: "http://localhost:5194/api",
  params: {
    key: import.meta.env["VITE_COMPANY_DISC_API_KEY"]
  },
    headers: {
    'Content-Type': 'application/json'
  }
  

});
export default apiClient;