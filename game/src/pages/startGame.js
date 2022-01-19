import {
    Center,
    Button,
    Image,
    Text,
    Input,
    Box,
    Flex
} from "@chakra-ui/react";
import start from "../assets/images/start.gif";
import { Link } from "react-router-dom";
import { useState } from "react";
import ParticlesBg from "particles-bg";

function Start() {
    // TODO: handle this logic
    const password = "123456";
    const [secret, setSecret] = useState("");

    return (
        <>
            <Center h="100vh">
                <Flex direction={"column"} alignItems={"center"}>
                    <Box>
                        <Text
                            fontSize={"1.3em"}
                            fontWeight={"300%"}
                            color="white"
                        >
                            You must complete the pre survey to continue. Please
                            enter the secret code.
                        </Text>
                        <Input
                            placeholder="Secret"
                            background={"white"}
                            onChange={(e) => {
                                setSecret(e.target.value);
                            }}
                        ></Input>
                    </Box>
                    <Image
                        src={start}
                        alt="start"
                        opacity={0.8}
                        width="100%"
                        maxH="40vh"
                    />

                    <Link to="/introduction">
                        <Button width="200px" isDisabled={secret !== password}>
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
