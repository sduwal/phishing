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
} from "@store/attacker";

import { decrementByAmount } from "@store/status";

import AttackerCard from "./attackerCard";
import { language, skills } from "./trainingData";

import { TRAINING_MESSAGE } from "@constants";

function CollapseTrainingOptions({
    display,
    hint,
    cost,
    time,
    type,
    value,
    efficiency,
    trained
}) {
    const attacker = useSelector((state) => state.attacker);
    const money = useSelector((state) => state.status.money);

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

    function handleClick() {
        // dispatch(setIsTraining(true));
        // dispatch(setCurrentTraining(display));
        dispatch(decrementByAmount(cost));
        // setTimeout(() => {
        type === "language"
            ? dispatch(
                  setLanguageSkills({
                      display: display,
                      efficiency: efficiency,
                      value: value
                  })
              )
            : dispatch(
                  setTechSkills({
                      display: display,
                      efficiency: efficiency,
                      value: value
                  })
              );

        // dispatch(setIsTraining(false));
        toast.success(trained, {
            autoClose: 5000,
            pauseOnHover: false,
            position: "top-center",
            hideProgressBar: true,
            transition: "zoom"
        });
        // }, time * 1000);
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
                            {/* <Text fontWeight="bold">Time: {time} sec</Text> */}
                        </Container>
                    </Collapse>
                </Box>
                {
                    <Center>
                        {containsSkill && (
                            <Text fontWeight={"bold"}>Complete</Text>
                        )}
                        {!containsSkill && (
                            <Button
                                disabled={money < cost}
                                onClick={handleClick}
                            >
                                {money < cost ? "Low balance" : "Train"}
                            </Button>
                        )}
                    </Center>
                }
            </Flex>
        </>
    );
}

function TrainLanguage({ canCurrentlyTrain }) {
    if (canCurrentlyTrain.length === 0) {
        return <Box></Box>;
    }

    const required = language.filter((skill) =>
        canCurrentlyTrain.includes(skill.value)
    );

    const data = required.map((skill) => (
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

function TrainTechnical({ canCurrentlyTrain }) {
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

    if (canCurrentlyTrain.length < 2) {
        return (
            <Center py={4}>
                <Text fontWeight={"bold"} opacity={"0.8"} color={"teal.400"}>
                    Send more emails! Will unlock more training skills with more
                    experience.
                </Text>
            </Center>
        );
    }

    return (
        <>
            <Box
                border={"2px solid black"}
                rounded={"2xl"}
                m={2}
                background={"blue.100"}
            >
                {data}
            </Box>
        </>
    );
}

function Attacker() {
    const canCurrentlyTrain = useSelector(
        (state) => state.status.canCurrentlyTrain
    );
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
                    <Text fontSize={"0.9em"} color="blackAlpha.800">
                        {TRAINING_MESSAGE}
                    </Text>
                    <SimpleGrid columns={2} spacing={10}>
                        <TrainLanguage canCurrentlyTrain={canCurrentlyTrain} />
                        <TrainTechnical canCurrentlyTrain={canCurrentlyTrain} />
                    </SimpleGrid>
                </Container>
            </Flex>
            <Center>
                <Text fontWeight={"bold"}>
                    You can click on the option to learn more!
                </Text>
            </Center>
        </>
    );
}

export { Attacker as default };
