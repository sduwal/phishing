/* eslint-disable indent */
import {
    Center,
    Container,
    SimpleGrid,
    Text,
    Box,
    Flex,
    Spacer,
    Collapse,
    Button
} from "@chakra-ui/react";

import _ from "lodash";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setLanguageSkills,
    setTechSkills,
    setIsTraining,
    setCurrentTraining
} from "../../store/attacker";

import AttackerCard from "./attackerCard";
import { language, skills } from "./trainingData";

const trainingMessage =
    "Your attacker will create better emails with better training. You can train your attacker to have better email writing skills and create better looking emails. Training your attacker will cost you money and require some time. Your attacker won't be able to create emails while training.";

function CollapseTrainingOptions({
    display,
    hint,
    cost,
    time,
    type,
    efficiency
}) {
    const attacker = useSelector((state) => state.attacker);

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(!show);

    const containsSkill =
        _.find(attacker.languageSkills, {
            display: display
        }) ||
        _.find(attacker.techSkills, {
            display: display
        });

    useEffect(() => {
        const timer = setInterval(() => {
            if (!attacker.isTraining || attacker.currentTraining !== display) {
                dispatch(setCurrentTraining(""));
                clearInterval(timer);
            } else {
                // dispatch(setTrainingProgress(100 / time));
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [attacker.isTraining]);

    function handleClick() {
        dispatch(setIsTraining(true));
        dispatch(setCurrentTraining(display));
        // dispatch(setTrainingEnd(new Date()));
        setTimeout(() => {
            type === "language"
                ? dispatch(
                      setLanguageSkills({
                          display: display,
                          efficiency: efficiency
                      })
                  )
                : dispatch(
                      setTechSkills({
                          display: display,
                          efficiency: efficiency
                      })
                  );

            dispatch(setIsTraining(false));

            toast("Training complete", {
                autoClose: 3000,
                pauseOnHover: false
            });
        }, time * 1000);
    }
    return (
        <>
            <Flex borderBottom={"1px solid black"} paddingBottom={"1"}>
                <Box w="100%">
                    <Box
                        _hover={{ cursor: "pointer" }}
                        onClick={handleToggle}
                        p={1}
                    >
                        <Text fontWeight={show ? "bold" : "normal"}>
                            {display}
                        </Text>
                    </Box>

                    <Collapse in={show}>
                        <Container>
                            <Text>{hint}</Text>
                            <Text fontWeight="bold" pt="2">
                                Cost: ${cost}
                            </Text>
                            <Text fontWeight="bold">Time: {time} </Text>
                        </Container>
                    </Collapse>
                </Box>
                {
                    <Center>
                        <Button
                            disabled={attacker.isTraining || containsSkill}
                            onClick={handleClick}
                        >
                            {containsSkill ? "Complete" : "Train"}
                        </Button>
                    </Center>
                }
            </Flex>
        </>
    );
}
function TrainLanguage() {
    const data = language.map((skill) => (
        <Box m={2} key={skill.display} margin={2}>
            <CollapseTrainingOptions {...skill} type="language" />
        </Box>
    ));
    return (
        <Box
            border={"2px solid black"}
            rounded={"2xl"}
            mx={2}
            my={5}
            background={"green.100"}
            height={"fit-content"}
        >
            {data}
        </Box>
    );
}

function TrainTechnical() {
    const attacker = useSelector((state) => state.attacker);

    const [data, setData] = useState([]);

    useEffect(() => {
        const checker = (arr, target) =>
            target.every((item) => arr.some((el) => el.display === item));

        const temp = skills.map((skill) => (
            <Box m={2} key={skill.display} margin={2}>
                {!skill.requirement ||
                checker(attacker.techSkills, skill.requirement) ? (
                    <CollapseTrainingOptions {...skill} />
                ) : (
                    <> </>
                )}
            </Box>
        ));
        setData(temp);
    }, [attacker.techSkills.length]);

    return (
        <Box
            border={"2px solid black"}
            rounded={"2xl"}
            m={2}
            background={"blue.100"}
        >
            {data}
        </Box>
    );
}

function Attacker() {
    return (
        <>
            <Flex>
                <Center>
                    <AttackerCard />
                </Center>
                <Spacer />
                <Container
                    maxW="80%"
                    minH="40vh"
                    maxHeight="80vh"
                    rounded={"2xl"}
                    m={5}
                    overflowY={"auto"}
                >
                    <Center>
                        <Text fontWeight="bold" fontSize="1.5em" my="15px">
                            Improve Attacker Skills
                        </Text>
                    </Center>
                    <Text fontSize={"0.8em"} color="grey">
                        {trainingMessage}
                    </Text>
                    <SimpleGrid columns={2} spacing={10}>
                        <TrainLanguage />
                        <TrainTechnical />
                    </SimpleGrid>
                </Container>
            </Flex>
        </>
    );
}

export { Attacker as default };
