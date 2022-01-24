import { Center, Text, VStack, Link } from "@chakra-ui/react";
import ParticlesBg from "particles-bg";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeEnd } from "../store/interaction";
import supabase from "../supabase";

function gameover() {
    const won = useSelector((state) => state.status.gameWon);
    const interaction = useSelector((state) => state.interaction);
    const dispatch = useDispatch();

    // TODO: HANDLE SUPABASE LOGIC
    useEffect(() => {
        (async () => {
            const end = Date.now();
            dispatch(changeEnd());

            // TODO: Uncomment this after testing
            // const { data, error } = await supabase.from("interaction").insert([
            //     {
            //         start: 0,
            //         end: end - interaction.start,
            //         spelling: interaction.time.spelling - interaction.start,
            //         grammar: interaction.time.grammar - interaction.start,
            //         email: interaction.time["good email"] - interaction.start,
            //         styling: interaction.time.styling - interaction.start,
            //         spoof: interaction.time.spoof - interaction.start,
            //         links: interaction.time.links - interaction.start,
            //         research: interaction.time.research - interaction.start
            //     }
            // ]);

            // if (error) {
            //     console.log(error);
            // } else {
            //     console.log(data);
            // }
        })();
    }, []);

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
