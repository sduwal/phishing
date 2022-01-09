// no special properties

import {
    Text,
    Image,
    Divider,
    Box,
    HStack,
    VStack,
    Icon,
    Circle,
    UnorderedList,
    ListItem,
    Link,
    Center
} from "@chakra-ui/react";
import { AiFillBank } from "react-icons/ai";

import paypal from "../../../image/paypal.png";

const email = {
    to: "randomperson123@gmail.com",
    from: "paypal@gmail.com",
    subject: "Welcome to PayPal",
    totalSend: 1000,
    body: {
        text: [
            {
                start: (
                    <>
                        <Image src={paypal} height={50} />
                        <Text fontSize={"2em"} color={"blue.300"} mt={2}>
                            {"You've got cash!"}
                        </Text>
                        <Text>
                            This email confirms that you have received a
                            payment.
                        </Text>

                        <Box
                            width={"100%"}
                            backgroundColor={"yellow.100"}
                            my={"3"}
                        >
                            <Center>
                                <Text>Receipt ID: 21314123</Text>
                            </Center>
                        </Box>
                        <Divider variant={"dashed"} my={2} />
                        <Text>
                            {
                                "The number above is the buyer's receipt ID for this transaction. Please retain it for your records so that you will be able to reference this transaction for customer service."
                            }
                        </Text>
                        <Divider variant={"dashed"} my={2} />
                        <Text fontWeight={"bold"} mb={2}>
                            Payment details
                        </Text>
                        <Box px={10}>
                            <HStack>
                                <VStack align={"start"} spacing={1}>
                                    <Text>Total amount:</Text>
                                    <Text>Currency:</Text>
                                    <Text>Transaction ID:</Text>
                                    <Text>Quantity:</Text>
                                    <Text>Buyer:</Text>
                                </VStack>

                                <VStack align={"start"} spacing={1}>
                                    <Text>$153.00 USD</Text>
                                    <Text>US Dollars</Text>
                                    <Text> #23543451</Text>
                                    <Text>1</Text>
                                    <Text>
                                        See attached file for full details
                                    </Text>
                                </VStack>
                            </HStack>
                        </Box>
                        <Divider variant={"dashed"} my={2} />
                        <Divider variant={"dashed"} my={2} />
                        <Text>Click the link below to view more details:</Text>
                    </>
                ),
                end: (
                    <>
                        <Text>
                            Have you lifted your withdrawal and receiving
                            limits? Just log in to your PayPal account and click
                            View Limits on the Account Overview page.
                        </Text>
                        <Box m={8} />
                    </>
                ),
                properties: ["spelling", "grammar"]
            },
            {
                start: (
                    <>
                        <Image src={paypal} height={50} />
                        <Text fontSize={"2em"} color={"blue.300"} mt={2}>
                            {"You've got cash!"}
                        </Text>
                        <Text>
                            This email confirms that you have received a
                            payment.
                        </Text>

                        <Box
                            width={"100%"}
                            backgroundColor={"yellow.100"}
                            my={"3"}
                        >
                            <Center>
                                <Text>Receipt ID: 21314123</Text>
                            </Center>
                        </Box>
                        <Divider variant={"dashed"} my={2} />
                        <Text>
                            {
                                "The number above are the buyer's receipt ID for this transactions. Please retain it for your records so that you will be able to reference this transaction for customer services."
                            }
                        </Text>
                        <Divider variant={"dashed"} my={2} />
                        <Text fontWeight={"bold"} mb={2}>
                            Payment details
                        </Text>
                        <Box px={10}>
                            <HStack>
                                <VStack align={"start"} spacing={1}>
                                    <Text>Total amount:</Text>
                                    <Text>Currency:</Text>
                                    <Text>Transaction ID:</Text>
                                    <Text>Quantity:</Text>
                                    <Text>Buyer:</Text>
                                </VStack>

                                <VStack align={"start"} spacing={1}>
                                    <Text>$153.00 USD</Text>
                                    <Text>US Dollars</Text>
                                    <Text> #23543451</Text>
                                    <Text>1</Text>
                                    <Text>
                                        See attached file for full details
                                    </Text>
                                </VStack>
                            </HStack>
                        </Box>
                        <Divider variant={"dashed"} my={2} />
                        <Divider variant={"dashed"} my={2} />
                        <Text>Click the link below to view more details:</Text>
                    </>
                ),
                end: (
                    <>
                        <Text>
                            Have you lift your withdrawal and receiving limits?
                            Just log in to your PayPal account and click View
                            Limits on the Account Overview page.
                        </Text>
                        <Box m={8} />
                    </>
                ),
                properties: ["spelling"]
            },
            {
                start: (
                    <>
                        <Image src={paypal} height={50} />
                        <Text fontSize={"2em"} color={"blue.300"} mt={2}>
                            {"You've got cash!"}
                        </Text>
                        <Text>
                            This email confirms that you have received a
                            payment.
                        </Text>

                        <Box
                            width={"100%"}
                            backgroundColor={"yellow.100"}
                            my={"3"}
                        >
                            <Center>
                                <Text>Receipt ID: 21314123</Text>
                            </Center>
                        </Box>
                        <Divider variant={"dashed"} my={2} />
                        <Text>
                            {
                                "The numbr above is the buyer's receipt ID for this transaction. Please retain it for yor records so that you will be able to refrence this transaction for customer service."
                            }
                        </Text>
                        <Divider variant={"dashed"} my={2} />
                        <Text fontWeight={"bold"} mb={2}>
                            Payment details
                        </Text>
                        <Box px={10}>
                            <HStack>
                                <VStack align={"start"} spacing={1}>
                                    <Text>Total amount:</Text>
                                    <Text>Currency:</Text>
                                    <Text>Transaction ID:</Text>
                                    <Text>Quantity:</Text>
                                    <Text>Buyer:</Text>
                                </VStack>

                                <VStack align={"start"} spacing={1}>
                                    <Text>$153.00 USD</Text>
                                    <Text>US Dollars</Text>
                                    <Text> #23543451</Text>
                                    <Text>1</Text>
                                    <Text>
                                        See attached file for full details
                                    </Text>
                                </VStack>
                            </HStack>
                        </Box>
                        <Divider variant={"dashed"} my={2} />
                        <Divider variant={"dashed"} my={2} />
                        <Text>Click the link below to view more details:</Text>
                    </>
                ),
                end: (
                    <>
                        <Text>
                            Hae you lifted your withdrawal and reeiving limits?
                            Just log in to your PayPal account and click View
                            Limits on the Account Overview page.
                        </Text>
                        <Box m={8} />
                    </>
                ),
                properties: ["grammar"]
            }
        ]
    }
};

export default {
    email: email,
    properties: ["spelling", "grammar"],
    targeted: "generic",
    styled: true
};
