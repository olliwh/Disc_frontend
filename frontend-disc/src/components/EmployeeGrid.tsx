import useEmployees from '../hooks/useEmployees';
import {  SimpleGrid, Text } from "@chakra-ui/react";
import EmployeeCard from './EmployeeCard';




const EmployeeGrid = () => {
    const { data: employees, error, isLoading } = useEmployees();

  return (
    console.log(employees),
    console.log('employeegrid'),
    <div>
      {error && <Text color="red">{error}</Text>}
      {isLoading && <Text>Loading...{isLoading}</Text>}
        <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} spacing={10} padding={10}>
            {employees?.map(employee => (
              <EmployeeCard employee={employee} key={employee.id} />
            ))}
        </SimpleGrid>
      
    </div>
  )
}

export default EmployeeGrid
