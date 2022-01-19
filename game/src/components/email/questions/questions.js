/* eslint-disable indent */
/* eslint-disable operator-linebreak */
import React, { useEffect, useState } from "react";
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
    Select,
    VStack
} from "@chakra-ui/react";
import { toast } from "react-toastify";

import questionsData from "./questionsData";
import getRandomEmail from "../emailsData";

import {
    changeKey,
    changeLinkType,
    resetKey,
    spoofEmail
} from "../../../store/email";
import { changeActiveDomain } from "../../../store/domain";

const MAX_LEVEL = 4;

const Basket = ({ emails }) => {
    const dispatch = useDispatch();

    let domains = useSelector((state) => state.domain);
    domains = [domains.name, ...domains.subdomains];

    const activeDomain = useSelector((state) => state.domain.activeDomain);

    const [basket, setBasket] = useState([]);
    const [level, setLevel] = useState(1);
    const [newEmail, setNewEmail] = useState("");

    const storeAttacker = useSelector((state) => state.attacker);
    const attacker = Object.keys(storeAttacker.techSkills).map(
        (key) => storeAttacker.techSkills[key].display
    );

    const [researchTime, setResearchTime] = useState(0);

    useEffect(() => {
        if (basket.length == 1) {
            const randomKey = getRandomEmail({
                emails: emails,
                properties: basket,
                link: activeDomain,
                attacker: storeAttacker
            });

            dispatch(changeKey(randomKey));
        } else if (basket.length == 2) {
            dispatch(changeLinkType(basket[1].value));
        } else if (basket.length == 3 && basket[2].value) {
            console.log(newEmail);
            dispatch(spoofEmail(newEmail));
            setNewEmail("");
        }
        if (basket.length != 0) {
            setResearchTime(0);
            setLevel(level + 1);
        }
    }, [basket.length, dispatch]);

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

            if (level == 1) {
                setResearchTime(item.researchTime ? item.researchTime : 0);
                setTimeout(() => {
                    setBasket([...basket, item]);
                }, item.researchTime * 1000);
            } else {
                setBasket([...basket, item]);
            }
        },
        collect: (monitor) => ({
            canDrop: monitor.canDrop()
        })
    });

    return (
        <>
            {level != 1 && (
                <Container mb="5">
                    <Select
                        defaultValue={activeDomain}
                        variant="filled"
                        onChange={(e) => {
                            dispatch(changeActiveDomain(e.target.value));
                        }}
                    >
                        {domains.map((domain) => (
                            <option key={domain} value={domain}>
                                {domain}
                            </option>
                        ))}
                    </Select>
                </Container>
            )}
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
                    // setResearchTime(0);
                    dispatch(resetKey());
                    dispatch(changeLinkType("normal"));
                    dispatch(spoofEmail(""));
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
            {/* <Center mt="3">
                <Spinner size="xl" />
            </Center>
            <Center mt="3">Email will be ready in {researchTime}</Center> */}
            <Center mt="3">
                <VStack>
                    <Spinner size={"xl"} />
                    <Text>Generating email..</Text>
                </VStack>
            </Center>
        </>
    );
}

export { Basket as default };
