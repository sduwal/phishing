/* eslint-disable operator-linebreak */
import React, { useEffect, useState } from "react";
import _ from "lodash";

import { useDrop } from "react-dnd";
import { QuestionCard } from "./QuestionCard";

import {
    Container,
    Box,
    UnorderedList,
    ListItem,
    Center,
    Text,
    Heading,
    Button,
    Spinner
} from "@chakra-ui/react";
import questionsData from "./questionsData";

const MAX_LEVEL = 4;

const Basket = () => {
    const [basket, setBasket] = useState([]);
    const [level, setLevel] = useState(1);

    const [researchTime, setResearchTime] = useState(0);

    useEffect(() => {
        const intervalID = setInterval(() => {
            if (researchTime == 0) {
                clearInterval(intervalID);
            } else setResearchTime(researchTime - 1);
        }, 1000);

        return () => clearInterval(intervalID);
    }, [researchTime]);

    const [{ canDrop }, dropRef] = useDrop({
        accept: "QUESTION",
        drop: (item) => {
            _.has(basket, item.displayLevel)
                ? basket
                : setBasket([...basket, item]);

            setResearchTime(item.researchTime ? item.researchTime : 0);
            setLevel(level + 1);
        },
        collect: (monitor) => ({
            canDrop: monitor.canDrop()
        })
    });

    return (
        <>
            <Container
                border="2px solid"
                width="100%"
                rounded="2xl"
                minHeight="50%"
                maxH="40vh"
                ref={dropRef}
                padding={"10px"}
                background={canDrop ? "yellow.100" : "transparent"}
            >
                {level !== 1 && <Heading>You want to: </Heading>}
                {basket.map((q) => (
                    <UnorderedList key={q.display}>
                        <ListItem>
                            <Text fontSize={"1.1em"} fontStyle={"italic"}>
                                {q.displayMessage}
                            </Text>
                        </ListItem>
                    </UnorderedList>
                ))}

                <Center mt="100px">
                    {level < MAX_LEVEL && (
                        <Box p="5" background="goldenrod" rounded="2xl">
                            <Text>
                                {canDrop
                                    ? "Release here to drop"
                                    : "Drop Here!"}
                            </Text>
                        </Box>
                    )}
                </Center>
            </Container>

            {researchTime > 0 ? (
                <Loading researchTime={researchTime} />
            ) : (
                level < MAX_LEVEL && (
                    <Container
                        border="2px solid"
                        mt="10px"
                        rounded="2xl"
                        p={3}
                        maxH={"40vh"}
                        overflowY="auto"
                    >
                        <Center marginBottom={"10px"}>
                            <Text fontSize="1.5em">
                                Drag option from below.
                            </Text>
                        </Center>

                        <Text fontSize="0.8em">
                            If you want to learn more, click on the options!!
                        </Text>

                        {questionsData.map(
                            (q) =>
                                level === q.displayLevel && (
                                    <QuestionCard
                                        key={q.display}
                                        display={q.display}
                                        hint={q.hint}
                                        displayLevel={q.displayLevel}
                                        attackerLevel={q.attackerLevel}
                                        color={q.color}
                                        researchTime={
                                            q.researchTime ? q.researchTime : 0
                                        }
                                    />
                                )
                        )}
                    </Container>
                )
            )}

            <StartOver
                setLevel={setLevel}
                setBasket={setBasket}
                setResearchTime={setResearchTime}
            />
        </>
    );
};

function StartOver({ setLevel, setBasket, setResearchTime }) {
    return (
        <Container>
            <Button
                mt="5"
                onClick={() => {
                    setLevel(1);
                    setBasket([]);
                    setResearchTime(0);
                }}
            >
                Start Over
            </Button>
        </Container>
    );
}
function Loading({ researchTime }) {
    return (
        <>
            <Center mt="3">
                <Spinner size="xl" />
            </Center>
            <Center mt="3">Email will be ready in {researchTime}</Center>
        </>
    );
}

export { Basket as default };
