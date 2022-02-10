import { useDispatch } from "react-redux";
import { useState } from "react";

import {
    Center,
    Button,
    Image,
    Text,
    Input,
    Box,
    Flex,
    Link as ChakraLink
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import ParticlesBg from "particles-bg";
import { useMediaQuery } from "@chakra-ui/react";
import start from "../assets/images/start.gif";
import { changeUsername } from "@store/status";

function Start() {
    // TODO: handle this logic
    const password = "123456";
    const [secret, setSecret] = useState("");
    const [email, setEmail] = useState("");

    const [isAtleast600] = useMediaQuery("(min-width: 1080px)");
    const dispatch = useDispatch();

    if (!isAtleast600) {
        return (
            <Center height={"100vh"}>
                <Text>Please use larger screen.</Text>
            </Center>
        );
    }

    const handleClick = () => {
        dispatch(changeUsername(email));
    };
    return (
        <>
            <Center pt={"20px"} height="100vh">
                <Flex direction={"column"} alignItems={"center"}>
                    <Box p={4}>
                        <Text
                            fontSize={"1.3em"}
                            fontWeight={"300%"}
                            color="white"
                        >
                            You must complete the pre survey to continue. The
                            secret code will be provided after the survey.
                        </Text>

                        <Text color="white">
                            Click{" "}
                            <ChakraLink
                                href="https://docs.google.com/forms/d/e/1FAIpQLSfP5F_r9z12VfJfl-rqq8BpGoCXAtVQjB2o7b22HJPR9ETv_A/viewform?usp=sf_link"
                                color="blue.400"
                                isExternal
                            >
                                here
                            </ChakraLink>{" "}
                            for the pre survey
                        </Text>

                        <Flex sx={{ gap: "14px" }}>
                            <Input
                                placeholder="Secret"
                                background={"white"}
                                onChange={(e) => {
                                    setSecret(e.target.value);
                                }}
                                width="80%"
                            />

                            <Input
                                placeholder="Please enter your email"
                                background={"white"}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                width="80%"
                            />
                        </Flex>
                    </Box>
                    <Image
                        src={start}
                        alt="start"
                        opacity={0.8}
                        // maxW="80%%"
                        maxH="60vh"
                        objectFit={"scale-down"}
                        p={4}
                    />

                    <Link to="/introduction">
                        <Button
                            width="200px"
                            isDisabled={
                                secret.trim() !== password || email === ""
                            }
                            onClick={handleClick}
                        >
                            Start Game
                        </Button>
                    </Link>
                </Flex>
            </Center>
            {/* "color" "ball" "lines" "thick" "circle" "cobweb" "polygon" "square"
            "tadpole" "fountain" "random" "custom" */}
            <ParticlesBg type="lines" bg={true} />
        </>
    );
}

export { Start as default };
