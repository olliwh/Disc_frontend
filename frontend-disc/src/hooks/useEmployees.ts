import useData from './useData';
import type { Department } from './useDepartments';

export interface Employee{
    id: number;
    name: string;
    email: string;
    department: Department;
    discType: string;
    image_url: string;
}

const useEmployees = () => useData<Employee>("/employees");

export default useEmployees
