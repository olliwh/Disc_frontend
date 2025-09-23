import { Card, CardBody, Heading,  HStack,  Image, Text, Box } from "@chakra-ui/react"
import type { Employee } from '../hooks/useEmployees'
import '../App.css'

interface Props{
    employee: Employee;
}
const EmployeeCard = ({employee}: Props) => {
  const color = '#' +  employee.discType.color;
  return (
    <Card>
        <Image 
          src={employee.imgUrl} 
          alt={employee.name}
          width="100%"
          height="250px"
          objectFit="cover"
          objectPosition="center top" 
        />

       <CardBody>
        <HStack spacing={4}>
            <Heading fontSize='2xl'>{employee.name}</Heading>
            <Box
                width="15px"
                height="15px"
                borderRadius="50%"
                backgroundColor={color}
                flexShrink={0} // Prevents the circle from shrinking
              />
              </HStack>
            <Text paddingTop={1} fontSize='md'>{employee.department.name}</Text>
            <Text paddingTop={1} fontSize='md'>{employee.discType.name}</Text>
            
        </CardBody> 
    </Card>
  )
}

export default EmployeeCard
