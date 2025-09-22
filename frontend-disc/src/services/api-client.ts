import axios from "axios";
// http://localhost:7051/api/employees
const apiClient = axios.create({
  baseURL: "http://localhost:5194/api",

});
export default apiClient;