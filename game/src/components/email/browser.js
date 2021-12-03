/* eslint-disable operator-linebreak */
import Browser, { Chrome } from "react-browser-ui";
import { useState } from "react";
import { Box, Flex, Button, Spacer, Text } from "@chakra-ui/react";
import EmailClient from "./emailClient";

import _ from "lodash";

import { useSelector } from "react-redux";
import styled from "styled-components";

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
    const [number, setNumber] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Box w="100%">
            {console.log(email)}
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
                            // <Text> {"Waiting..."}</Text>
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
                    isDisabled={_.isEmpty(email) || true}
                    onClick={() => console.log("Sent clicked")}
                >
                    Send Email
                </Button>
            </Flex>
        </Box>
    );
}

export { BrowserCustom as default };
