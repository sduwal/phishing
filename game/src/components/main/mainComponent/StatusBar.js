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
                    <VStack alignContent={"center"}>
                        <Tooltip
                            shouldWrapChildren
                            hasArrow
                            label="Number of people reached"
                            fontSize="md"
                            placement="bottom"
                        >
                            <div className="total">
                                <Icon
                                    as={MdPeopleAlt}
                                    color="red"
                                    w={10}
                                    h={10}
                                />
                            </div>
                        </Tooltip>
                        <Text>{status.totalEmails}</Text>
                    </VStack>
                    <VStack>
                        <Tooltip
                            shouldWrapChildren
                            hasArrow
                            label="Number of failed email"
                            fontSize="md"
                            placement="bottom"
                        >
                            <div className="failed">
                                <Icon as={MdEmail} color="red" w={10} h={10} />{" "}
                            </div>
                        </Tooltip>
                        <Text>{status.unsuccessfulEmails}</Text>
                    </VStack>
                    <VStack>
                        <Tooltip
                            shouldWrapChildren
                            hasArrow
                            label="Number of email successful"
                            fontSize="md"
                            placement="bottom"
                        >
                            <div className="success">
                                <Icon
                                    as={MdEmail}
                                    color="green"
                                    w={10}
                                    h={10}
                                />
                            </div>
                        </Tooltip>
                        <Text>{status.successEmails}</Text>
                    </VStack>
                    <VStack>
                        <Tooltip
                            shouldWrapChildren
                            hasArrow
                            label="Money"
                            fontSize="md"
                            placement="bottom"
                        >
                            <div className="money">
                                <Icon
                                    as={MdAttachMoney}
                                    color="green"
                                    w={10}
                                    h={10}
                                />{" "}
                            </div>
                        </Tooltip>
                        <Text>{status.money}</Text>
                    </VStack>
                </HStack>
            </Center>
        </Box>
    );
}
