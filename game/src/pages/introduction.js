/* eslint-disable max-len */
import {
    Button,
    Text,
    Box,
    Center,
    Flex,
    Spacer,
    IconButton,
    VStack,
    Circle,
    Image,
    keyframes
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { VscCircleFilled } from "react-icons/vsc";

import money from "../assets/images/intro/money.gif";
import clock from "../assets/images/intro/clock.gif";
import thief from "../assets/images/intro/thief.gif";
import stopTime from "../assets/images/intro/stop_time.gif";
import work from "../assets/images/intro/work.gif";
import paypal from "../assets/images/intro/paypal.jpeg";
import trick from "../assets/images/intro/trick.gif";

const animation = keyframes`
    0%{background-position:0% 65%}
    50%{background-position:100% 36%}
    100%{background-position:0% 65%}
    `;

function Introduction() {
    const [index, setIndex] = useState(0);
    function move(step) {
        setIndex(index + step);
    }

    const start = [
        {
            "image": money,
            "description":
                "You love spending! Run out of money? Get load, spend more!"
        },
        {
            "image": clock,
            "description":
                "Your spending habit has got you in trouble and you need to pay it off soon."
        },
        {
            "image": work,
            "description":
                "Earning all you owe through hard work is difficult. Some might say impossible!"
        },

        {
            "image": thief,
            "description":
                "That's why you have hired your helper to help you create phishing emails. He has some skills, but should be trained to create better emails."
        },
        {
            "image": paypal,
            "description":
                "Your goal is to impersonate PayPal and try to trick people into clicking your links."
        },
        {
            "image": trick,
            "description":
                "Send emails! Trick people! Spend the money you earn to train your attacker or buy a different domain name!"
        },
        {
            "image": stopTime,
            "description": "Reach the weekly goals and pay off your debt!"
        }
    ];

    function StepButtons({ right }) {
        const isDisabled = right ? index === start.length - 1 : index === 0;
        return (
            <Circle
                background={isDisabled ? "transparent" : "red.200"}
                size={"50px"}
            >
                <IconButton
                    icon={right ? <MdChevronRight /> : <MdChevronLeft />}
                    fontSize={"3em"}
                    background={"transparent"}
                    onClick={() => move(right ? 1 : -1)}
                    isDisabled={isDisabled}
                    _disabled={{
                        opacity: 0
                    }}
                    _hover={{
                        color: "red.500"
                    }}
                    _active={{}}
                    _focus={{}}
                />
            </Circle>
        );
    }

    return (
        <Center
            height={"100vh"}
            sx={{
                "background":
                    "linear-gradient(270deg, #b0f2b4, #baf2e9, #bad7f2, #f2bac9, #f2e2ba)",
                "backgroundSize": "1000% 1000%",
                "animation": `${animation} 25s ease infinite`
            }}
        >
            <Box width="90%" p={6}>
                <Box minH="40vh">
                    <Center>
                        <VStack>
                            <Image
                                src={start[index].image}
                                boxSize="300px"
                                fit={"cover"}
                                filter={"grayscale(100%)"}
                                p={5}
                                backgroundColor={"red"}
                            />

                            <Box py={"5"} />
                            <Text textStyle={"intro"}>
                                {start[index].description}
                            </Text>
                        </VStack>
                    </Center>
                </Box>

                <Center pt={"20px"}>
                    <Flex alignItems={"center"} width="40%">
                        <StepButtons right={false} />
                        <Spacer />
                        {[...Array(start.length)].map((_, i) => (
                            <VscCircleFilled
                                key={i}
                                opacity={i <= index ? 1 : 0.2}
                                size={"20px"}
                            />
                        ))}
                        <Spacer />
                        <StepButtons right={true} />
                    </Flex>
                </Center>
                <Center pt={4}>
                    {index == start.length - 1 && (
                        <Link to="/main">
                            <Button colorScheme={"teal"} variant={"outline"}>
                                Start Game
                            </Button>
                        </Link>
                    )}
                </Center>
            </Box>
        </Center>
    );
}

export { Introduction as default };
