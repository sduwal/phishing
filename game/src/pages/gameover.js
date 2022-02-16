import { Center, Text, VStack, Link, Button } from "@chakra-ui/react";
import ParticlesBg from "particles-bg";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { resetWeekStats } from "@store/week";
import {
    resetCanCurrentlyTrain,
    resetStatus,
    setCanCurrentlyTrain
} from "../store/status";
import {
    resetAttackerSkills,
    setLanguageSkills,
    setTechSkills
} from "../store/attacker";

function GameNotWon() {
    const history = useHistory();
    const dispatch = useDispatch();
    const currentWeek = useSelector((state) => state.week.currentWeek);
    function resetWeek() {
        function actionCreator() {
            return (dispatch) =>
                Promise.all([
                    dispatch(resetWeekStats()),
                    dispatch(resetStatus()),
                    dispatch(resetAttackerSkills()),
                    dispatch(resetCanCurrentlyTrain())
                ]).then(() => {
                    if (currentWeek >= 1) {
                        Promise.all([
                            dispatch(
                                setCanCurrentlyTrain([
                                    "spelling",
                                    "grammar",
                                    "links"
                                ])
                            )
                        ]).then(() => {
                            if (currentWeek >= 2) {
                                Promise.all([
                                    dispatch(
                                        setLanguageSkills({
                                            "display": "Spellings",
                                            "efficiency": 35,
                                            "value": "spelling"
                                        })
                                    ),
                                    dispatch(
                                        setLanguageSkills({
                                            "display": "Grammar",
                                            "efficiency": 35,
                                            "value": "grammar"
                                        })
                                    ),
                                    dispatch(
                                        setTechSkills({
                                            "efficiency": 20,
                                            "display": "Links",
                                            "value": "links"
                                        })
                                    ),
                                    dispatch(
                                        setCanCurrentlyTrain([
                                            "research",
                                            "styling"
                                        ])
                                    )
                                ]).then(() => {
                                    if (currentWeek >= 3) {
                                        Promise.all([
                                            dispatch(
                                                setTechSkills({
                                                    "efficiency": 20,
                                                    "display": "Styling",
                                                    "value": "styling"
                                                })
                                            ),
                                            dispatch(
                                                setTechSkills({
                                                    "efficiency": 15,
                                                    "display":
                                                        "Research Targeted group",
                                                    "value": "research"
                                                })
                                            ),
                                            dispatch(
                                                setCanCurrentlyTrain(["spoof"])
                                            )
                                        ]).then(() => {
                                            history.push("/main");
                                        });
                                    } else {
                                        history.push("/main");
                                    }
                                });
                            } else {
                                history.push("/main");
                            }
                        });
                    } else {
                        history.push("/main");
                    }
                });
        }
        dispatch(actionCreator());
    }
    return (
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
                You have to win the game to get the post survey link.
            </Text>
            <Button
                background={"green.100"}
                _hover={{ background: "green.400" }}
                onClick={resetWeek}
            >
                Start from the last week
            </Button>
        </>
    );
}
function gameover() {
    const won = useSelector((state) => state.status.gameWon);

    return (
        <>
            <Center pt={"20px"} height="100vh">
                <VStack>
                    {!won && <GameNotWon />}
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
                                <Link
                                    color="blue.100"
                                    href="https://forms.gle/ZU9367SJchk5gvwg6"
                                >
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
