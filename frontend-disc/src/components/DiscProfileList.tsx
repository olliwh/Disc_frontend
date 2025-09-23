import { Heading, HStack, List, ListItem, Text, Box } from "@chakra-ui/react";
import useDiscProfiles from "../hooks/useDiscProfiles";

const DiscProfileList = () => {
  const { data: DiscProfiles, error, isLoading } = useDiscProfiles();

  if (isLoading) return <div>loading</div>;
  if (error) return <div>{error}</div>;
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
                backgroundColor={'#' +  discProfile.color}
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
