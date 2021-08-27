import { Center, Button, Image, Flex } from "@chakra-ui/react";
import start from "../assets/images/start.png";
import { Link } from "react-router-dom";
function Start() {
    return (
        <>
            <Center h="100vh">
                <Flex direction="column">
                    <Image src={start} alt="start" height="200px" />
                    <Link to="/introduction">
                        <Button width="200px"> Start Game</Button>
                    </Link>
                </Flex>
            </Center>
        </>
    );
}

export { Start as default };
