import { Box, HStack, Heading, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useDiscProfiles from "../hooks/useDiscProfiles";

// import useDiscProfiles from "../hooks/useDiscProfiles";

const DiscProfileList = () => {
//   const discProfilesArray = [
//     {
//       id: 1,
//       name: "Dominance",
//       color: "008000",
//     },
//     {
//       id: 2,
//       name: "Influence",
//       color: "FF0000",
//     },
//     {
//       id: 3,
//       name: "Steadiness",
//       color: "0000FF",
//     },
//     {
//       id: 4,
//       name: "Conscientiousness",
//       color: "FFFF00",
//     },
//   ];
  const { data: DiscProfiles, error, isLoading } = useDiscProfiles();

  if (isLoading) return <Spinner />
    if (error) return null;

  return (
    <div>
      <Heading fontSize={"2xl"} marginBottom={2}>
        DiscProfiles
      </Heading>
      <List>
        {DiscProfiles.map((discProfile) => (
          <ListItem key={discProfile.id}>
            <HStack>
              <Box
                width="12px"
                height="12px"
                borderRadius="50%"
                backgroundColor={"#" + discProfile.color}
                flexShrink={0} // Prevents the circle from shrinking
              />
              <Text fontSize={"lg"}>{discProfile.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DiscProfileList;
