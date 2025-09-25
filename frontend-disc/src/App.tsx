import { useState } from "react";

import { Grid, GridItem, Show, Stack } from "@chakra-ui/react";

import DepartmentList from "./components/DepartmentList";
import DiscProfileList from "./components/DiscProfileList";
import EmployeeGrid from "./components/EmployeeGrid";
import { NavBar } from "./components/NavBar";
import type { Department } from "./hooks/useDepartments";
import type { DiscProfile } from "./hooks/useDiscProfiles";

export interface EmployeeQuery {
  department: Department | null;
  discProfile: DiscProfile | null;
}

function App() {

  const [employeeQuery, setEmployeeQuery] = useState<EmployeeQuery>(
    {} as EmployeeQuery,
  );
   const handleSelectDepartment = (department: Department | null) => {
    setEmployeeQuery((prev) => ({ ...prev, department }));
  };
  //    const handleSelect = (key: keyof EmployeeQuery, value: Department | DiscProfile) => {
  //   setEmployeeQuery({...employeeQuery, [key]: value});
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem pl="2" area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={"aside"}>
          <Stack padding={5} spacing={10}>
            <DepartmentList
              selectedDepartment={employeeQuery.department}
              onSelectedDepartment={ handleSelectDepartment }
            />
            <DiscProfileList />
          </Stack>
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <EmployeeGrid employeeQuery={employeeQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
