import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";

const SuggestedUsers = () => {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers();

  if (isLoading) return null;
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      {suggestedUsers.length !== 0 && (
        <Flex w={"full"} alignItems={"center"} justifyContent={"space-between"}>
          <Text
            fontSize={12}
            fontWeight={"bold"}
            color={"gray.500"}
            cursor={"pointer"}
          >
            Suggested for you
          </Text>
          <Text
            fontSize={12}
            fontWeight={"bold"}
            color={"gray.500"}
            cursor={"pointer"}
          >
            See All
          </Text>
        </Flex>
      )}

      {suggestedUsers.map((user) => (
        <SuggestedUser user={user} key={user.id} />
      ))}

      <Box alignSelf={"start"} fontSize={12} color={"gray.500"} mt={5}>
        © 2023 Built By{" "}
        <Link
          href="https://www.linkedin.com/in/raj-aryaman-3ab473203/"
          target="_blank"
          color={"blue.400"}
          fontSize={14}
        >
          Raj aryaman
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
