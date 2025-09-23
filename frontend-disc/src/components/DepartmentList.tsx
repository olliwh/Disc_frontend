import { Heading, List, ListItem, Text } from "@chakra-ui/react";
import useDepartments from "../hooks/useDepartments";

const DepartmentList = () => {
  const { data: departments, error, isLoading } = useDepartments();

  if (isLoading) return <div>loading</div>;
  if (error) return <div>{error}</div>;
  return (
    <div>
        <Heading fontSize={"2xl"} marginBottom={2}>Departments</Heading>
      <List>
        {departments.map((department) => (
          <ListItem key={department.id}>
            <Text fontSize={"lg"}>{department.name}</Text>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DepartmentList;
