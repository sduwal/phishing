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
import { setLanguageSkills, setTechSkills } from "@store/attacker";

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
        toast.dismiss();
        dispatch(decrementByAmount(cost));
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

        toast.success(trained, {
            toastId: "trained",
            autoClose: 5000,
            pauseOnHover: false,
            position: "top-center",
            hideProgressBar: true
            // transition: "zoom"
        });
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

    // const [data, setData] = useState([]);

    const required = skills.filter((skill) =>
        canCurrentlyTrain.includes(skill.value)
    );

    if (required.length === 0) {
        return <> </>;
    }

    // required = _.sortBy(required, ["value"]);
    const temp = required.map((skill) => (
        <Box m={2} key={skill.display} margin={2}>
            <CollapseTrainingOptions {...skill} />
        </Box>
    ));

    return (
        <>
            <Box
                border={"2px solid black"}
                rounded={"2xl"}
                m={2}
                background={"blue.100"}
            >
                {temp}
            </Box>
        </>
    );
}

function Attacker() {
    const canCurrentlyTrain = useSelector(
        (state) => state.status.canCurrentlyTrain
    );

    useEffect(() => {
        return () => {
            toast.dismiss();
        };
    }, []);

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
            <Flex align={"center"} direction={"column"}>
                <Text fontWeight={"bold"}>
                    You can click on the option to learn more!
                </Text>
                <Text>
                    More Skills will be unlocked as the game progresses.
                </Text>
            </Flex>
        </>
    );
}

export { Attacker as default };
