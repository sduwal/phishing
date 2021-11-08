import {
    Box,
    Text,
    VStack,
    HStack,
    Center,
    Icon,
    Tooltip,
    Grid,
    GridItem
} from "@chakra-ui/react";

import { MdEmail, MdPeopleAlt } from "react-icons/md";
import Website from "../../websites/index";

function StatusBar() {
    return (
        <Box
            border="3px solid"
            minW="20vw"
            p="3"
            rounded="10"
            width="fit-content"
        >
            <Center>
                <Text>Stats</Text>
            </Center>
            <Center>
                <HStack spacing={10}>
                    <VStack>
                        <Tooltip
                            shouldWrapChildren
                            hasArrow
                            label="Number of people reached"
                            fontSize="md"
                            placement="bottom"
                        >
                            <Icon as={MdPeopleAlt} color="red" w={10} h={10} />
                        </Tooltip>
                        <Text>1</Text>
                    </VStack>
                    <VStack>
                        <Tooltip
                            shouldWrapChildren
                            hasArrow
                            label="Number of email sent"
                            fontSize="md"
                            placement="bottom"
                        >
                            <Icon as={MdEmail} color="red" w={10} h={10} />
                        </Tooltip>
                        <Text>1</Text>
                    </VStack>
                    <VStack>
                        <Tooltip
                            shouldWrapChildren
                            hasArrow
                            label="Number of email successful"
                            fontSize="md"
                            placement="bottom"
                        >
                            <Icon as={MdEmail} color="green" w={10} h={10} />
                        </Tooltip>
                        <Text>1</Text>
                    </VStack>
                </HStack>
            </Center>
        </Box>
    );
}
export default function mainComponent(props) {
    return (
        <Box width="85vw" height="100%" p="5">
            <Center mb="10">
                <StatusBar />
            </Center>

            <Grid templateColumns="repeat(2, 1fr)" gap={6} height="100%">
                <Box w="100%" h="10" bg="blue.500">
                    This is for the attacker
                </Box>
                <Box w="100%" h="10" bg="blue.500">
                    This is for the landing
                </Box>
                <GridItem colSpan={2}>
                    <Website />
                </GridItem>
            </Grid>
        </Box>
    );
}
