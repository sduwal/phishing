/* eslint-disable indent */
/* eslint-disable operator-linebreak */
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";

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
    Spinner,
    Input,
    Select
} from "@chakra-ui/react";
import { toast } from "react-toastify";

import questionsData from "./questionsData";
import getRandomEmail, { generateLinks } from "../emailsData";
import { changeEmail, changeLinkType, spoofEmail } from "../../../store/email";
import { changeActiveDomain } from "../../../store/domain";

const MAX_LEVEL = 4;

const Basket = () => {
    const dispatch = useDispatch();
    const email = useSelector((state) => state.email.value);

    let domains = useSelector((state) => state.domain);
    domains = [domains.name, ...domains.subdomains];

    const activeDomain = useSelector((state) => state.domain.activeDomain);

    const [basket, setBasket] = useState([]);
    const [level, setLevel] = useState(1);
    const [newEmail, setNewEmail] = useState("");

    let attacker = useSelector((state) => state.attacker.techSkills);
    attacker = Object.keys(attacker).map((key) => attacker[key].display);

    const [researchTime, setResearchTime] = useState(0);

    useEffect(() => {
        const intervalID = setInterval(() => {
            if (researchTime == 0) {
                clearInterval(intervalID);
            } else setResearchTime(researchTime - 1);
        }, 1000);

        return () => clearInterval(intervalID);
    }, [researchTime]);

    useEffect(() => {
        if (basket.length == 1) {
            setTimeout(() => {
                const randomEmail = getRandomEmail(basket, activeDomain);
                dispatch(changeEmail(randomEmail));
            }, researchTime);
        } else if (basket.length == 2) {
            dispatch(changeLinkType(basket[1].value));
        } else if (basket.length == 3 && basket[2].value) {
            dispatch(spoofEmail(newEmail));
            setNewEmail("");
        }
    }, [basket.length]);

    const validate = (email) => {
        return email.match("/^S+@S+.S+$/");
    };

    const [{ canDrop }, dropRef] = useDrop({
        accept: "QUESTION",
        drop: (item) => {
            if (level == 3 && item.value) {
                if (!newEmail || validate(newEmail)) {
                    toast.error("Please enter a valid email address", {
                        pauseOnHover: false,
                        autoClose: 2000,
                        position: "bottom-center",
                        theme: "colored"
                    });
                    return;
                }
            }
            setResearchTime(item.researchTime ? item.researchTime : 0);
            setTimeout(() => {
                _.has(basket, item.displayLevel)
                    ? basket
                    : setBasket([...basket, item]);
            }, item.researchTime * 1000);

            setLevel(level + 1);
        },
        collect: (monitor) => ({
            canDrop: monitor.canDrop()
        })
    });

    return (
        <>
            <Container mb="5">
                <Select
                    defaultValue={domains[0]}
                    variant="filled"
                    onChange={(e) => {
                        dispatch(changeActiveDomain(e.target.value));

                        if (Object.keys(email).length > 0) {
                            const newEmail = generateLinks(
                                email,
                                e.target.value
                            );
                            dispatch(changeEmail(newEmail));
                        }
                    }}
                >
                    {domains.map((domain) => (
                        <option key={domain} value={domain}>
                            {domain}
                        </option>
                    ))}
                </Select>
            </Container>
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
            ) : level === 3 && !attacker.includes("Spoof the sender") ? (
                setLevel(level + 1)
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

                        {level === 3 && (
                            <Box mt="3">
                                <Input
                                    varianty="flushed"
                                    placeholder="spoof@newemail.com"
                                    onChange={(event) =>
                                        setNewEmail(event.target.value)
                                    }
                                />
                                <Text fontSize="0.8em">
                                    Enter valid email address. DEFAULT:
                                    sarose012@gmail.com
                                </Text>
                            </Box>
                        )}
                        {questionsData.map(
                            (q) =>
                                level === q.displayLevel &&
                                (!q.requirement ||
                                    attacker.some((a) =>
                                        q.requirement.includes(a)
                                    )) && (
                                    <QuestionCard
                                        key={q.display}
                                        display={q.display}
                                        hint={q.hint}
                                        displayLevel={q.displayLevel}
                                        attackerLevel={q.attackerLevel}
                                        value={q.value}
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
    const dispatch = useDispatch();
    return (
        <Container>
            <Button
                mt="5"
                onClick={() => {
                    setLevel(1);
                    setBasket([]);
                    setResearchTime(0);
                    dispatch(changeEmail({}));
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
