import useData from './useData';
import type { Department } from './useDepartments';

export interface Employee{
    id: number;
    name: string;
    email: string;
    imgUrl: string;
    department: Department;
    discType: string;
}

const useEmployees = () => useData<Employee>("/employees");

export default useEmployees
