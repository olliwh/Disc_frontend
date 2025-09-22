import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react"
import type { Employee } from '../hooks/useEmployees'

interface Props{
    employee: Employee;
}
const EmployeeCard = ({employee}: Props) => {
    console.log('img url: ' + employee.imgUrl)
  return (
    <Card>
        <Image src={employee.imgUrl} alt={employee.name}/>
        
        <HStack justifyContent="space-between" padding={2}>
        </HStack>
       <CardBody>
            <Heading fontSize='2xl'>{employee.name}</Heading>
        </CardBody> 
    </Card>
  )
}

export default EmployeeCard
