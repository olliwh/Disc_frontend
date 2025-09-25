import type { EmployeeQuery } from '../App';
import useData from './useData';
import type { Department } from './useDepartments';
import type { DiscProfile } from './useDiscProfiles';



export interface Employee{
    id: number;
    name: string;
    email: string;
    imgUrl: string;
    department: Department;
    discType: DiscProfile;
}

const useEmployees = (employeeQuery: EmployeeQuery) => useData<Employee>(
    "/employees",
{params: {departments: employeeQuery.department?.id}},
[employeeQuery]);

export default useEmployees
