import { Center, Text, VStack, Link } from "@chakra-ui/react";
import ParticlesBg from "particles-bg";
import { useSelector } from "react-redux";

function gameover() {
    const won = useSelector((state) => state.status.gameWon);

    return (
        <>
            <Center pt={"20px"} height="100vh">
                <VStack>
                    {!won && (
                        <>
                            <Text
                                transform={"uppercase"}
                                color="white"
                                fontSize={"4em"}
                                casing={"uppercase"}
                            >
                                GameOver!!
                            </Text>
                            <Text color="white">
                                You have to win the game to get the post survey
                                link.
                            </Text>
                        </>
                    )}
                    {won && (
                        <>
                            <Text
                                transform={"uppercase"}
                                color="white"
                                fontSize={"4em"}
                                casing={"uppercase"}
                            >
                                Thank you for playing!
                            </Text>
                            <Text color="white" fontSize={"2em"}>
                                Click{" "}
                                <Link color="blue.100" href="www.google.com">
                                    here
                                </Link>{" "}
                                to finish the post survey.
                            </Text>
                        </>
                    )}
                </VStack>
            </Center>
            <ParticlesBg type="lines" bg={true} />
        </>
    );
}

export { gameover as default };
