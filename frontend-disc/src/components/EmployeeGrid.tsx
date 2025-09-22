import useEmployees from '../hooks/useEmployees';
import {  Text } from "@chakra-ui/react";




const EmployeeGrid = () => {
    const { data: employees, error, isLoading } = useEmployees();

  return (
    console.log(employees),
    console.log('employeegrid'),
    <div>
      {error && <Text color="red">{error}</Text>}
      {isLoading && <Text>Loading...{isLoading}</Text>}
        <ul>
            {employees?.map(employee => (
                <li key={employee.id}>{employee.name} - {employee.department?.name || 'No Department'}</li>
            ))}
        </ul>
      
    </div>
  )
}

export default EmployeeGrid
