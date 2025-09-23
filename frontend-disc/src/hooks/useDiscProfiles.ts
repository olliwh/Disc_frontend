
import useData from "./useData";

export interface DiscProfile {
  id: number;
  name: string;
  color: string;
}

const useDepartments = () => useData<DiscProfile>("/disctypes");

export default useDepartments;