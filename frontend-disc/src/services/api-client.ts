import axios from "axios";
// http://localhost:7051/api/employees
  
  

const apiClient = axios.create({
  
  baseURL: "http://localhost:5194/api",
  // headers: {
  //   'X-API-Key': import.meta.env.VITE_COMPANY_DISC_API_KEY,
  //   'Content-Type': 'application/json'
  // }
  

});
export default apiClient;