import { Box, Center, Image, Text, VStack } from "@chakra-ui/react";
import logo from "../../../image/logo.png";

const first = {
    "start": (
        <Box
            rounded={"xl"}
            p={2}
            backgroundImage={
                "linear-gradient(rgba(24, 79, 234, 0.8),rgba(237, 238, 242, 0.8),white)"
            }
        >
            <Center>
                <Box
                    maxW={"90%"}
                    backgroundColor={"white"}
                    pt={4}
                    px={3}
                    rounded={"xl"}
                >
                    <Center>
                        <Text fontWeight="bold" py={2} fontSize={"2em"}>
                            Finish getting access to buy crypto on PayPal
                        </Text>
                    </Center>
                    <VStack spacing={5} align={"start"}>
                        <Text>
                            {
                                " Looks like you started getting access to buy crypto but didn't finish."
                            }
                        </Text>
                        <Text>
                            {
                                "To get access, all you need to do is confirm some account info if you have a Cash or Cash Plus account. This lets us know it's ok to enable the ability to buy, sell, and hold crypto with your account."
                            }
                        </Text>
                        <Text>
                            {
                                "If you don't have a Cash or Cash Plus account, you'll be able to sign up for one during your first purchase. Finish setting up:"
                            }
                        </Text>
                    </VStack>
                </Box>
            </Center>
        </Box>
    ),
    "end": (
        <Box
            rounded={"xl"}
            p={3}
            paddingBottom={"10"}
            mt={"10px"}
            backgroundImage={"linear-gradient(white,rgba(172, 189, 236, 0.4))"}
        >
            <Center mt={5}>
                <Image src={logo} height={50} />
            </Center>
        </Box>
    ),
    "properties": ["spelling", "grammar", "good email"]
};

const second = {
    "start": (
        <Box
            rounded={"xl"}
            p={2}
            backgroundImage={
                "linear-gradient(rgba(24, 79, 234, 0.8),rgba(237, 238, 242, 0.8),white)"
            }
        >
            <Center>
                <Box
                    maxW={"90%"}
                    backgroundColor={"white"}
                    pt={4}
                    px={3}
                    rounded={"xl"}
                >
                    <Center>
                        <Text fontWeight="bold" py={2} fontSize={"1.6em"}>
                            FINISH GETTING ACCESS TO BUY CRYPTO ON PAYPAL
                        </Text>
                    </Center>
                    <VStack spacing={5} align={"start"}>
                        <Text>
                            {
                                "Look like you started gettng access to buy crypto but didn't finish."
                            }
                        </Text>
                        <Text>
                            {
                                "To get access, ll you need to do is confirm some account info if you have a Cash or Cash Plus account. This lets us know it's ok to enable the ability to buy, sell, and hold crypto with your account."
                            }
                        </Text>
                        <Text>
                            {
                                "If you don't have a Cash or Cash Plus account, you'll be able to sign up for one during your first purchase. Finish setting up:"
                            }
                        </Text>
                    </VStack>
                </Box>
            </Center>
        </Box>
    ),
    "end": (
        <Box
            rounded={"xl"}
            p={3}
            paddingBottom={"10"}
            mt={"10px"}
            backgroundImage={"linear-gradient(white,rgba(172, 189, 236, 0.4))"}
        >
            <Center mt={5}>
                <Image src={logo} height={50} />
            </Center>
        </Box>
    ),
    "properties": ["good email"]
};

const third = {
    "start": (
        <Box>
            <Center>
                <Box
                    maxW={"90%"}
                    backgroundColor={"white"}
                    pt={4}
                    px={3}
                    rounded={"xl"}
                >
                    <Center>
                        <Text fontWeight="bold" py={2} fontSize={"2em"}>
                            Finish getting access to buy crypto on PayPal
                        </Text>
                    </Center>
                    <VStack spacing={5} align={"start"}>
                        <Text>
                            {
                                " Looks like you started getting access to buy crypto but didn't finish."
                            }
                        </Text>
                        <Text>
                            {
                                "To get access, all you need to do is confirm some account info if you have a Cash or Cash Plus account. This lets us know it's ok to enable the ability to buy, sell, and hold crypto with your account."
                            }
                        </Text>
                        <Text>
                            {
                                "If you don't have a Cash or Cash Plus account, you'll be able to sign up for one during your first purchase. Finish setting up:"
                            }
                        </Text>
                    </VStack>
                </Box>
            </Center>
        </Box>
    ),
    "end": (
        <Box>
            <Center mt={5}></Center>
        </Box>
    ),
    "properties": ["spelling", "grammar"]
};

const email = {
    to: "randomperson123@gmail.com",
    from: "paypal@gmail.com",
    subject: "Finish getting access to buy crypto",
    totalSend: 1000,
    body: {
        text: [first, second, third]
    }
};

export default {
    ...email,
    properties: ["spelling", "grammar", "good email"],
    targeted: "generic",
    styled: true
};
