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
    VStack,
    HStack,
    Image
} from "@chakra-ui/react";
import { toast } from "react-toastify";

import questionsData from "./questionsData";
import getRandomEmail from "../emailsData";

import { changeKey, changeLinkType, resetKey, spoofEmail } from "@store/email";
import { changeActiveDomain } from "@store/domain";
import helper from "./images/helper.gif";
const MAX_LEVEL = 4;

const Basket = ({ emails }) => {
    const currentWeek = useSelector((state) => state.week.currentWeek);
    const dispatch = useDispatch();
    const optionDetails = [
        "Hey Boss, Before I create the email, I need you to select what kind the options you want to use. You can drag these options to the basket above and the option to learn more. Let's start with the what kind of email you want?",
        "Nice! Now let's decide on how to hide the links.",
        "Great! You can pretend to be someone else for better performance. Fill the email below and drag the option to the basket!"
    ];
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

    useEffect(() => {
        if (!storeAttacker.techSkills.some((i) => i.value === "research")) {
            setBasket([
                {
                    "display": "Generate a generic email",
                    "hint": "Generate a generic email that might be valid for a large group of individuals.",
                    "displayLevel": 1,
                    "color": "blue.100",
                    "value": "generic",
                    "displayMessage": "Generate a generic email"
                }
            ]);
        }
    }, []);

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
            dispatch(spoofEmail(newEmail));
            setNewEmail("");
        }

        if (level < MAX_LEVEL && basket.length !== 0) {
            setLevel(level + 1);
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

            setBasket([...basket, item]);
        },
        collect: (monitor) => ({
            canDrop: monitor.canDrop()
        })
    });

    return (
        <Box overflow={"auto"} py={2}>
            {level != 1 && (
                <Container mb="5">
                    <Text fontSize={"0.8em"} opacity={"0.7"}>
                        Think a different domain will work better?
                    </Text>
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
                {basket.map((q, index) => (
                    <UnorderedList key={q.display}>
                        {index != 0 &&
                            !attacker?.techSkills?.includes("research") && (
                                <ListItem>
                                    <Text
                                        fontSize={"1.1em"}
                                        fontStyle={"italic"}
                                    >
                                        {q.displayMessage}
                                    </Text>
                                </ListItem>
                            )}
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

            {level === 3 && !attacker.includes("Spoof the sender")
                ? setLevel(level + 1)
                : level < MAX_LEVEL && (
                      <Container
                          border="2px solid"
                          mt="10px"
                          rounded="2xl"
                          p={3}
                          maxH={"40vh"}
                          overflowY="auto"
                      >
                          <Center marginBottom={"10px"}>
                              <HStack>
                                  <Image src={helper} maxH={"60px"} />

                                  <VStack>
                                      <Text
                                          fontSize="1em"
                                          fontWeight={"semibold"}
                                      >
                                          {optionDetails[level - 1]}
                                      </Text>
                                      {level === 2 &&
                                          !attacker.includes("Links") && (
                                              <Text color={"gray.400"}>
                                                  {
                                                      "Don't see options? Train your attacker with links!"
                                                  }
                                              </Text>
                                          )}
                                      {currentWeek === 2 && (
                                          <Text>
                                              Link properties have been disabled
                                              for this week as users are getting
                                              more suspicious of the hidden
                                              link. Use marketplace for better
                                              result.
                                          </Text>
                                      )}
                                  </VStack>
                              </HStack>
                          </Center>

                          {/* <Text fontSize="1em">{optionDetails[level - 1]}</Text> */}

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
                                      Enter valid email address, then drag the
                                      option.
                                  </Text>
                              </Box>
                          )}
                          {currentWeek == 2
                              ? questionsData.map(
                                    (q) =>
                                        level === q.displayLevel &&
                                        !q?.requirement?.includes("Links") && (
                                            <QuestionCard
                                                key={q.display}
                                                display={q.display}
                                                hint={q.hint}
                                                displayLevel={q.displayLevel}
                                                attackerLevel={q.attackerLevel}
                                                value={q.value}
                                                color={q.color}
                                            />
                                        )
                                )
                              : questionsData.map(
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
                                            />
                                        )
                                )}
                      </Container>
                  )}
        </Box>
    );
};

function StartOver({ setLevel, setBasket }) {
    const dispatch = useDispatch();
    return (
        <Container>
            <Button
                mt="5"
                onClick={() => {
                    setLevel(1);
                    setBasket([]);
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

function Loading() {
    return (
        <>
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
