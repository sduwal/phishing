/* eslint-disable operator-linebreak */
import Browser, { Chrome } from "react-browser-ui";
import { useState } from "react";
import { Box, Flex, Button, Spacer, Text, Divider } from "@chakra-ui/react";
import EmailClient from "../shared/emailClient";

import _ from "lodash";

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toast } from "react-toastify";

import {
    incrementTotalEmails,
    updateSuccess,
    incrementByAmount
} from "@store/status";

import { addSentEmail } from "@store/email";
import calculateSuccess from "./utils/calculateSuccess";

import { MONEY_PER_SUCCESSFUL_EMAIL } from "@constants";
import { increaseSent } from "../../../store/email";
import {
    incrementEmailWrote,
    incrementMoneyGained,
    incrementPeopleReached
} from "../../../store/week";

import { updateAnimateNumber } from "../../../store/animate";
// styles
const Dots = styled.span`
    &::after {
        display: inline-block;
        animation: ellipsis 1.25s infinite;
        content: ".";
        width: 1em;
        text-align: left;
    }
    @keyframes ellipsis {
        0% {
            content: ".";
        }
        33% {
            content: "..";
        }
        66% {
            content: "...";
        }
    }
`;

function BrowserCustom({
    onClose,
    email,
    showHeader = false,
    sendDisabled = true
}) {
    const { Tab } = Chrome;

    const isUpdating = useSelector((state) => state.status.isUpdating);
    const activeLink = useSelector((state) => state.domain.activeDomain);
    const languageSkills = useSelector(
        (state) => state.attacker.languageSkills
    );
    const dispatch = useDispatch();

    const [number, setNumber] = useState(0);
    // const [isLoading, setIsLoading] = useState(false);

    // const [value, setValue] = useState(0);

    function send({ totalSend }) {
        const successrate = calculateSuccess(email, number, activeLink);
        const sendNumber = totalSend;

        function SentMessage() {
            return (
                <Box>
                    <Text fontWeight={"bold"}>
                        Email subject: {email.subject}
                    </Text>
                    <Text>Success rate: {Math.round(successrate * 100)}%</Text>
                    <Text>
                        Money earned: ${success * MONEY_PER_SUCCESSFUL_EMAIL}
                    </Text>
                </Box>
            );
        }
        toast.info(<SentMessage />, { icon: false });

        dispatch(
            addSentEmail({
                subject: email.subject,
                successrate: successrate
            })
        );

        const success = Math.ceil(sendNumber * successrate);
        dispatch(
            // The amount is 10 for each successful email
            incrementByAmount(success * MONEY_PER_SUCCESSFUL_EMAIL)
        );
        dispatch(
            updateSuccess({
                successful: success,
                unsuccessful: -success
            })
        );

        dispatch(incrementEmailWrote());
        dispatch(incrementPeopleReached(totalSend));
        dispatch(incrementMoneyGained(success * MONEY_PER_SUCCESSFUL_EMAIL));
        dispatch(
            updateAnimateNumber({
                animateWeeklyPeople: sendNumber,
                animateWeeklyMoney: success * MONEY_PER_SUCCESSFUL_EMAIL,
                animateWeeklyEmails: sendNumber
            })
        );
    }

    function renderMultipleEmails() {
        return (
            <Flex
                justify={"center"}
                alignItems={"center"}
                minW={"100%"}
                direction={"column"}
            >
                {languageSkills.length < 2 && (
                    <Text
                        opacity={"0.8"}
                        letterSpacing={"-0.5px"}
                        fontStyle="italic"
                        maxW={"80%"}
                    >
                        See some problem in the email? Choose a different one.
                    </Text>
                )}
                <Box pt={2}>
                    {email.body.text.length > 1 &&
                        (() => {
                            const elements = [];
                            for (let i = 0; i < email.body.text.length; i++) {
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
        );
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

    function SendEmailButton() {
        return (
            <Flex>
                <Spacer />
                <Button
                    isDisabled={_.isEmpty(email)}
                    onClick={() => {
                        dispatch(incrementTotalEmails(email.totalSend));
                        dispatch(increaseSent());
                        dispatch(
                            updateSuccess({
                                successful: 0,
                                unsuccessful: email.totalSend
                            })
                        );
                        send({ totalSend: email.totalSend });
                        onClose();
                    }}
                >
                    Send Email
                </Button>
            </Flex>
        );
    }
    return (
        <Box w="100%">
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
                                    linkType={email.linkType}
                                />
                                <Divider mt={4} color={"black"} opacity={1} />
                                {renderMultipleEmails()}
                            </>
                        )}
                    </Tab>
                </Browser>
            </Box>

            <SendEmailButton />
        </Box>
    );
}

export { BrowserCustom as default };
