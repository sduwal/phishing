/* eslint-disable operator-linebreak */
import Browser, { Chrome } from "react-browser-ui";
import { useState } from "react";
import { Box, Flex, Button, Spacer } from "@chakra-ui/react";
import EmailClient from "./emailClient";

import _ from "lodash";

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import {
    incrementTotalEmails,
    setIsUpdating,
    updateSuccess
} from "../../store/status";

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
function BrowserCustom({ showHeader = false }) {
    const { Tab } = Chrome;

    const email = useSelector((state) => state.email.value);
    const isUpdating = useSelector((state) => state.status.isUpdating);
    const dispatch = useDispatch();

    const [number, setNumber] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    function send({ totalSend }) {
        const successrate = Math.random();
        let number = totalSend;

        const interval = setInterval(() => {
            if (number < 0) {
                clearInterval(interval);
            }

            if (!isUpdating) {
                dispatch(setIsUpdating(true));
                const victimNumber = Math.floor(Math.random() * (number + 1));

                number -= victimNumber;

                const success = Math.ceil(victimNumber * successrate);
                dispatch(
                    updateSuccess({
                        successful: success,
                        unsuccessful: victimNumber - success
                    })
                );
                dispatch(setIsUpdating(false));
            }
        }, 5000);
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
                        onClose={() => {
                            console.log("cannot close this one");
                        }}
                    >
                        {_.isEmpty(email) || isLoading ? (
                            <Dots>Loading</Dots>
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
                <Button
                    isDisabled={_.isEmpty(email)}
                    onClick={() => {
                        setIsLoading(true);
                        const randomNumber = Math.floor(
                            Math.random() * email.body.text.length
                        );
                        setTimeout(() => {
                            setNumber(randomNumber);
                            setIsLoading(false);
                        }, 5000);
                    }}
                >
                    Revise the email
                </Button>
                <Spacer></Spacer>
                <Button
                    // TODO: Change this later
                    isDisabled={_.isEmpty(email)}
                    onClick={() => {
                        dispatch(incrementTotalEmails(email.totalSend));
                        send({ totalSend: email.totalSend });
                    }}
                >
                    Send Email
                </Button>
            </Flex>
        </Box>
    );
}

export { BrowserCustom as default };
