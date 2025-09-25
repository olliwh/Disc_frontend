import { Button, Heading, List, ListItem, Spinner } from "@chakra-ui/react";

import useDepartments, { type Department } from "../hooks/useDepartments";

//   const departmentsArray = [
//   {
//     "id": 1,
//     "name": "HR"
//   },
//   {
//     "id": 2,
//     "name": "IT"
//   },
//   {
//     "id": 3,
//     "name": "Customer Service"
//   },
//   {
//     "id": 4,
//     "name": "Support"
//   }
// ]
interface Props {
  onSelectedDepartment: (department: Department | null) => void;
  selectedDepartment: Department | null;
}

const DepartmentList = ({ onSelectedDepartment, selectedDepartment }: Props) => {
  const { data: departments, error, isLoading } = useDepartments();

  if (isLoading) return <Spinner />;
  // if (error) return <div>{error}</div>;
   if (error) return null;
  return (
    <div>
      <Button variant={"link"} onClick={() => onSelectedDepartment(null)}>
              <Heading fontSize={"2xl"} marginBottom={2}>
        Departments
      </Heading>
        </Button>

      <List>
        {departments.map((department) => (
          <ListItem key={department.id}>
            <Button
            colorScheme={department.id === selectedDepartment?.id ? "blue" : "gray"}
            onClick={() => onSelectedDepartment(department)}
            variant="link"
            fontSize={"lg"}>
              {department.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DepartmentList;
