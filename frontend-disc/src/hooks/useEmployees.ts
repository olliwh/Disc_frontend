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

const useEmployees = (selectedDepartment: Department | null) => useData<Employee>(
    "/employees",
{params: {departments: selectedDepartment?.id}},
[selectedDepartment?.id]);

export default useEmployees
