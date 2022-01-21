/* eslint-disable operator-linebreak */
import Browser, { Chrome } from "react-browser-ui";
import { useState } from "react";
import { Box, Flex, Button, Spacer, Progress, Tooltip } from "@chakra-ui/react";
import EmailClient from "./emailClient";

import _ from "lodash";

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toast } from "react-toastify";

import {
    incrementTotalEmails,
    setIsUpdating,
    updateSuccess,
    incrementByAmount
} from "../../store/status";

import { addSentEmail } from "../../store/email";
import calculateSuccess from "./utils/calculateSuccess";

import {
    MONEY_PER_SUCCESSFUL_EMAIL,
    TOTAL_EMAIL_REVISE_TIME
} from "../../constants";

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

function BrowserCustom({ onClose, email, showHeader = false }) {
    const { Tab } = Chrome;

    const isUpdating = useSelector((state) => state.status.isUpdating);
    const dispatch = useDispatch();

    const [number, setNumber] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const [value, setValue] = useState(0);

    function send({ totalSend }) {
        const successrate = calculateSuccess(email, number);
        let sendNumber = totalSend;

        const interval = setInterval(() => {
            if (sendNumber <= 0) {
                clearInterval(interval);
                toast.info(
                    `Email: ${
                        email.subject
                    } has stopped receiving traction. 🎉 Success rate: ${Math.round(
                        successrate * 100
                    )}%`
                );

                dispatch(
                    addSentEmail({
                        subject: email.subject,
                        successrate: successrate
                    })
                );
                return;
            }

            if (!isUpdating) {
                dispatch(setIsUpdating(true));
                const victimNumber = Math.floor(
                    Math.random() * (sendNumber + 1)
                );

                sendNumber -= victimNumber;

                const success = Math.ceil(victimNumber * successrate);
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
                dispatch(setIsUpdating(false));
            }
        }, (1 + Math.round(Math.random() * 10)) * 1000);
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
                        ) : isLoading ? (
                            <Box px={10} py={20}>
                                <Dots>Loading</Dots>
                                <Progress
                                    value={value}
                                    max={TOTAL_EMAIL_REVISE_TIME * 1000}
                                    isAnimated={true}
                                    hasStripe={true}
                                    colorScheme={"green"}
                                />
                            </Box>
                        ) : (
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
                        )}
                    </Tab>
                </Browser>
            </Box>
            <Flex>
                <Tooltip
                    label={
                        "Not satisfied with this email? Click here to generate a modified email."
                    }
                >
                    <Button
                        isDisabled={_.isEmpty(email)}
                        onClick={() => {
                            setIsLoading(true);

                            const randomNumber = Math.floor(
                                Math.random() * email.body.text.length
                            );

                            const interval = setInterval(() => {
                                setValue((value) => value + 50);
                            }, 50);

                            setTimeout(() => {
                                setNumber(randomNumber);
                                setIsLoading(false);
                                clearInterval(interval);
                                setValue(0);
                            }, TOTAL_EMAIL_REVISE_TIME * 1000);
                        }}
                    >
                        Revise the email
                    </Button>
                </Tooltip>
                <Spacer></Spacer>
                <Button
                    // TODO: Change this later
                    isDisabled={_.isEmpty(email)}
                    onClick={() => {
                        dispatch(incrementTotalEmails(email.totalSend));
                        dispatch(
                            updateSuccess({
                                successful: 0,
                                unsuccessful: email.totalSend
                            })
                        );
                        send({ totalSend: email.totalSend });
                        onClose();
                        toast.success(
                            "Email sent. Your stats will be updated when the users open them.",
                            { autoClose: 2000 }
                        );
                    }}
                >
                    Send Email
                </Button>
            </Flex>
        </Box>
    );
}

export { BrowserCustom as default };
