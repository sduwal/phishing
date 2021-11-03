/* eslint-disable operator-linebreak */
import Browser, { Chrome } from "react-browser-ui";
import { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import EmailClient from "./emailClient";

import _ from "lodash";

import { useSelector, useDispatch } from "react-redux";

function BrowserCustom({ showHeader = false }) {
    const { Tab } = Chrome;
    const email = useSelector((state) => state.email.value);
    // const email = {};
    const [body, setBody] = useState("Waiting for changes");

    useEffect(() => {
        setBody(
            _.isEmpty(email) > 0
                ? "This si after the change. I dont see the change yert"
                : "Wating"
        );
        console.log(body);
    }, [email]);

    const [activeTab, setActiveTab] = useState("main");
    const [tabs, setTabs] = useState([
        <Tab
            key={"test"}
            imageUrl={""}
            imageAlt={"green tab image"}
            title={"blue"}
            onClose={() => {
                const newTabs = [...tabs];
                newTabs.splice(0, 1);
                setTabs(newTabs);
            }}
        >
            <Box p="10px" minH="600px" background="green.100" overflowY="auto">
                {body}
            </Box>
        </Tab>
    ]);

    return (
        <Box w="100%">
            <Browser
                type={"chrome"}
                showHeader={showHeader}
                activeTabKey={activeTab}
            >
                {/* {Object.keys(tabs).map((key, value) => tabs[key])} */}
                <Tab
                    key={"main"}
                    imageUrl={""}
                    imageAlt={"green tab image"}
                    title={"Green"}
                    onClose={() => {
                        console.log("cannot close this one");
                    }}
                >
                    {_.isEmpty(email) ? (
                        <Text>Waiting for email</Text>
                    ) : (
                        <EmailClient
                            title={email.subject}
                            name={email.name}
                            from={email.from}
                            to={email.to}
                            body={email.body}
                            linkType={email.linkType}
                        />
                    )}
                </Tab>
                {/* {tabs.map((tab, index) => tab)}; */}
            </Browser>
        </Box>
    );
}

export { BrowserCustom as default };
