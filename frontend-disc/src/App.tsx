import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import EmployeeGrid from "./components/EmployeeGrid";


function App() {

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
          {/* <GenreList /> */}
          aside
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <EmployeeGrid />
        main
      </GridItem>
    </Grid>

  )
}

export default App
