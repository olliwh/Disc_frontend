import { SimpleGrid, Text } from "@chakra-ui/react";

import type { Department } from "../hooks/useDepartments";
import useEmployees from "../hooks/useEmployees";
import EmployeeCard from "./EmployeeCard";
import EmployeeCardSkeleton from "./EmpoyeeCardSkeleton";

// const employeeArray = [{"id":1,"name":"Morten Olsen","email":"m@m.dk","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Morten_Olsen_2012_%28cropped%29.jpg/500px-Morten_Olsen_2012_%28cropped%29.jpg","department":{"id":1,"name":"HR"},"discType":{"id":1,"name":"Dominance","color":"008000"}},{"id":2,"name":"Kanye West","email":"K@m.dk","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Kanye_West_Lollapalooza_Chile_2011_2.jpg/500px-Kanye_West_Lollapalooza_Chile_2011_2.jpg","department":{"id":1,"name":"HR"},"discType":{"id":1,"name":"Dominance","color":"008000"}},{"id":3,"name":"Jay Z","email":"J@m.dk","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Jay-Z_%40_Shawn_%27Jay-Z%27_Carter_Foundation_Carnival_%28crop_2%29.jpg/500px-Jay-Z_%40_Shawn_%27Jay-Z%27_Carter_Foundation_Carnival_%28crop_2%29.jpg","department":{"id":1,"name":"HR"},"discType":{"id":4,"name":"Conscientiousness","color":"FFFF00"}},{"id":4,"name":"Venus Williams","email":"J@m.dk","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Williams_V._RG21_%2811%29_%2851376275968%29_%28cropped%29.jpg/330px-Williams_V._RG21_%2811%29_%2851376275968%29_%28cropped%29.jpg","department":{"id":2,"name":"IT"},"discType":{"id":4,"name":"Conscientiousness","color":"FFFF00"}},{"id":5,"name":"Daniel Agger","email":"d@m.dk","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/e/e6/Daniel_Agger_20120613.jpg","department":{"id":2,"name":"IT"},"discType":{"id":3,"name":"Steadiness","color":"0000FF"}},{"id":6,"name":"Nadia Nadim","email":"N@m.dk","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadia_Nadim_20170803_WEURO_DEN_AUT_1716_%28cropped%29.jpg/500px-Nadia_Nadim_20170803_WEURO_DEN_AUT_1716_%28cropped%29.jpg","department":{"id":3,"name":"Customer Service"},"discType":{"id":3,"name":"Steadiness","color":"0000FF"}},{"id":7,"name":"Bob Dylan","email":"B@m.dk","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/DylanYoungKilkenny140719v2_%2850_of_52%29_%2852246124397%29_%28cropped%29.jpg/500px-DylanYoungKilkenny140719v2_%2850_of_52%29_%2852246124397%29_%28cropped%29.jpg","department":{"id":3,"name":"Customer Service"},"discType":{"id":2,"name":"Influence","color":"FF0000"}},{"id":8,"name":"Lionel Messi","email":"L@m.dk","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/500px-Lionel_Messi_20180626.jpg","department":{"id":3,"name":"Customer Service"},"discType":{"id":2,"name":"Influence","color":"FF0000"}}]
interface Props {
  selectedDepartment: Department | null;
}
const EmployeeGrid = ({ selectedDepartment }: Props) => {
  const {
    data: employees,
    error,
    isLoading,
  } = useEmployees(selectedDepartment);
  const skeletons = [...Array(employees.length).keys()];

  return (
    <div>
      {error && <Text color="red">{error}</Text>}
      {isLoading && <Text>Loading...{isLoading}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={10}
      >
        {isLoading
          ? skeletons.map((skeleton) => <EmployeeCardSkeleton key={skeleton} />)
          : employees?.map((employee) => (
              <EmployeeCard employee={employee} key={employee.id} />
            ))}
      </SimpleGrid>
    </div>
  );
};

export default EmployeeGrid;
