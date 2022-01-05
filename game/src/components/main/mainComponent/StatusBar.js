import { MdEmail, MdPeopleAlt, MdAttachMoney } from "react-icons/md";
import {
    Box,
    Text,
    VStack,
    HStack,
    Center,
    Icon,
    Tooltip
} from "@chakra-ui/react";

import { useSelector } from "react-redux";

export default function StatusBar() {
    const status = useSelector((state) => state.status);
    return (
        <Box
            border="3px solid"
            minW="20vw"
            p="3"
            rounded="10"
            width="fit-content"
        >
            <Center>
                <Text fontStyle={"bold"} fontSize={"1.5em"}>
                    Stats
                </Text>
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
                        <Text>{status.totalEmails}</Text>
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
                        <Text>{status.successEmails}</Text>
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
                        <Text>{status.unsuccessfulEmails}</Text>
                    </VStack>
                    <VStack>
                        <Tooltip
                            shouldWrapChildren
                            hasArrow
                            label="Money"
                            fontSize="md"
                            placement="bottom"
                        >
                            <Icon
                                as={MdAttachMoney}
                                color="green"
                                w={10}
                                h={10}
                            />
                        </Tooltip>
                        <Text>{status.money}</Text>
                    </VStack>
                </HStack>
            </Center>
        </Box>
    );
}
