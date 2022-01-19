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
import start from "../assets/images/start.gif";
import { Link } from "react-router-dom";
import { useState } from "react";
import ParticlesBg from "particles-bg";
import { useMediaQuery } from "@chakra-ui/react";

function Start() {
    // TODO: handle this logic
    const password = "123456";
    const [secret, setSecret] = useState("");

    const [isAtleast600] = useMediaQuery("(min-width: 1080px)");

    return (
        <>
            {isAtleast600 && (
                <>
                    <Center pt={"20px"} height="100vh">
                        <Flex direction={"column"} alignItems={"center"}>
                            <Box p={4}>
                                <Text
                                    fontSize={"1.3em"}
                                    fontWeight={"300%"}
                                    color="white"
                                >
                                    You must complete the pre survey to
                                    continue. The secret code will be provided
                                    after the survey.
                                </Text>

                                <Text color="white">
                                    Click{" "}
                                    <ChakraLink
                                        href="https://google.com"
                                        color="blue.400"
                                        isExternal
                                    >
                                        here
                                    </ChakraLink>{" "}
                                    for the pre survey
                                </Text>

                                <Center>
                                    <Input
                                        placeholder="Secret"
                                        background={"white"}
                                        onChange={(e) => {
                                            setSecret(e.target.value);
                                        }}
                                        width="80%"
                                    />
                                </Center>
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
                                    isDisabled={secret !== password}
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
            )}

            {!isAtleast600 && (
                <Center height={"100vh"}>
                    <Text>Please use larger screen.</Text>
                </Center>
            )}
        </>
    );
}

export { Start as default };
