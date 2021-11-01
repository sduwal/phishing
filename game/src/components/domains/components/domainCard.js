import { AddIcon } from "@chakra-ui/icons";
import { Text, Box, Flex, Spacer, HStack, Divider } from "@chakra-ui/react";

export default function domainCard({ link, price }) {
    return (
        <Box
            // border="2px solid black"
            width="70vw"
            rounded="5px"
            p="3"
            backgroundColor="grey.100"
        >
            <Flex direction="row" alignItems="center">
                <Text fontWeight="semibold" fontSize="1.1em">
                    {link}
                </Text>
                <Spacer />

                <HStack spacing={0}>
                    <Text fontWeight="bold" fontSize="1.2em" color="green">
                        $
                    </Text>
                    <Text fontWeight="bold" fontSize="1.1em" pl="1">
                        599.99
                    </Text>
                </HStack>
                <Box
                    ml={5}
                    px={3}
                    py={2}
                    backgroundColor="red.100"
                    rounded="8px"
                    _hover={{ backgroundColor: "green.100" }}
                >
                    <AddIcon />
                </Box>
            </Flex>
            <Divider />
        </Box>
    );
}
