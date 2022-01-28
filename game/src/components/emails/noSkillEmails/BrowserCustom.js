import { useState } from "react";
import { useDispatch } from "react-redux";
import Browser, { Chrome } from "react-browser-ui";

import _ from "lodash";

import { toast } from "react-toastify";
import {
    Box,
    Flex,
    Button,
    Spacer,
    Text,
    Divider,
    Center
} from "@chakra-ui/react";

import EmailClient from "../shared/emailClient";
import Dots from "../shared/dots";

import {
    increamentTrainingCount,
    setCanCurrentlyTrain,
    changeCurrentTrainingMode
} from "@store/status";

function BrowserCustom({
    onClose,
    email,
    showHeader = false,
    sendDisabled = true,
    currentTrainingModule,
    count
}) {
    const { Tab } = Chrome;

    const dispatch = useDispatch();

    const [number, setNumber] = useState(0);

    function send() {
        toast.dismiss();
        const props = email.body.text[number].properties;
        let required = 2 - count[currentTrainingModule];
        if (
            props.length > 0 &&
            currentTrainingModule &&
            props.includes(currentTrainingModule)
        ) {
            dispatch(increamentTrainingCount(currentTrainingModule));
            const message =
                --required <= 0
                    ? `Nice! You can now train your attacker with "${currentTrainingModule}" skills. Check it out in the attacker page.`
                    : "Woah! Great catch! Keep up the good work!";
            toast.info(message, {
                position: "top-center"
            });

            if (required <= 0) {
                dispatch(setCanCurrentlyTrain(currentTrainingModule));
                const next =
                    currentTrainingModule === "spelling"
                        ? "grammar"
                        : "good email";
                dispatch(changeCurrentTrainingMode(next));
            }
        } else {
            toast.error("That email had some problems. Let's try this again!", {
                position: "top-center"
            });
        }
    }

    function numberButton({ index }) {
        return (
            <Button
                color="white"
                background={"blue.300"}
                mx={2}
                my={2}
                key={index}
                onClick={() => setNumber(index)}
            >
                {index + 1}
            </Button>
        );
    }

    return (
        <Center>
            <Box w="80%">
                <Box minH={"50vh"}>
                    <Browser
                        type={"chrome"}
                        showHeader={showHeader}
                        activeTabKey={"main"}
                    >
                        <Tab
                            key={"main"}
                            imageUrl={""}
                            imageAlt={"green tab image"}
                            title={"Email"}
                            onClose={() => {}}
                        >
                            {_.isEmpty(email) ? (
                                <Box px={10} py={20}>
                                    <Dots>Waiting for input</Dots>
                                </Box>
                            ) : (
                                <>
                                    <EmailClient
                                        title={email.subject}
                                        name={email.name}
                                        from={email.from}
                                        to={email.to}
                                        body={{
                                            ...email.body.text[number],
                                            link: email.body.link
                                        }}
                                    />
                                    <Divider
                                        mt={4}
                                        color={"black"}
                                        opacity={1}
                                    />
                                    <Flex
                                        justify={"center"}
                                        alignItems={"center"}
                                        minW={"100%"}
                                        direction={"column"}
                                    >
                                        <Text
                                            opacity={"0.8"}
                                            letterSpacing={"-0.5px"}
                                            fontStyle="italic"
                                            maxW={"80%"}
                                        >
                                            Choose the best email.
                                        </Text>
                                        <Box>
                                            {(() => {
                                                const elements = [];
                                                for (
                                                    let i = 0;
                                                    i < email.body.text.length;
                                                    i++
                                                ) {
                                                    elements.push(
                                                        numberButton({
                                                            index: i
                                                        })
                                                    );
                                                }
                                                return elements;
                                            })()}
                                        </Box>
                                    </Flex>
                                </>
                            )}
                        </Tab>
                    </Browser>
                </Box>

                <Flex>
                    <Spacer />
                    <Button
                        isDisabled={_.isEmpty(email)}
                        onClick={() => {
                            send();
                            onClose();
                        }}
                    >
                        Review
                    </Button>
                </Flex>
            </Box>
        </Center>
    );
}

export { BrowserCustom as default };
