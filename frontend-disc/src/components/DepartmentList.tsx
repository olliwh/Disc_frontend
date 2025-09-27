import { Button, Heading, List, ListItem, Spinner } from "@chakra-ui/react";

import useDepartments, { type Department } from "../hooks/useDepartments";
import { useState } from "react";

  const departmentsArray = [{"id":1,"name":"HR"},{"id":2,"name":"IT"},{"id":3,"name":"Customer Service"},{"id":4,"name":"Support"},{"id":5,"name":"Reception"},{"id":6,"name":"Finance"},{"id":7,"name":"Marketing"}]
interface Props {
  onSelectedDepartment: (department: Department | null) => void;
  selectedDepartment: Department | null;
}

const DepartmentList = ({ onSelectedDepartment, selectedDepartment }: Props) => {
  // const { data: departments, error, isLoading } = useDepartments();
  const [isExpanded, setIsExpanded]= useState(false);
  // const displayedDepartments = isExpanded ? departments : departments.slice(0,5);
  const displayedDepartments = isExpanded ? departmentsArray : departmentsArray.slice(0,5);


  // if (isLoading) return <Spinner />;
  // // if (error) return <div>{error}</div>;
  //  if (error) return null;
  return (
    <div>
      <Button variant={"link"} onClick={() => onSelectedDepartment(null)}>
              <Heading fontSize={"2xl"} marginBottom={2}>
        Departments
      </Heading>
        </Button>

      <List>
        {displayedDepartments.map((department) => (
          <ListItem key={department.id}>
            <Button
            colorScheme={department.id === selectedDepartment?.id ? "blue" : "gray"}
            onClick={() => onSelectedDepartment(department)}
            variant="link"
            fontSize={"lg"}
            minWidth="auto"> 
              {department.name}
            </Button>
          </ListItem>
        ))}
                {/* {departments.length > 5 && ( */}
                {departmentsArray.length > 5 && (

            <Button onClick={() => setIsExpanded(!isExpanded)} mt={3}>
                {isExpanded ? "show less": "Show More"}
            </Button>
        )}
      </List>
    </div>
  );
};

export default DepartmentList;
