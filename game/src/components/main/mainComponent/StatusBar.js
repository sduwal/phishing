import { MdEmail, MdPeopleAlt } from "react-icons/md";
import {
    Box,
    Text,
    VStack,
    HStack,
    Center,
    Icon,
    Tooltip
} from "@chakra-ui/react";

export default function StatusBar() {
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
