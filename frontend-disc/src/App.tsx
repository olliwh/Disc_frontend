import { Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import EmployeeGrid from "./components/EmployeeGrid";
import DepartmentList from "./components/DepartmentList";
import DiscProfileList from "./components/DiscProfileList";
import { useState } from "react";
import type { Department } from "./hooks/useDepartments";


function App() {
  const [slectedDepartment, setSelectedDepartment] = useState<Department | null>(null);
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
          <DepartmentList selectedDepartment={slectedDepartment} onSelectedDepartment={(department) =>setSelectedDepartment(department)} />
          <DiscProfileList />
          </Stack>
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <EmployeeGrid selectedDepartment={slectedDepartment}/>
      </GridItem>
    </Grid>

  )
}

export default App
