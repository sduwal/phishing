import { Box, Text, Input, Center, InputGroup } from "@chakra-ui/react";
import { domains } from "./data/topDomains";
import { topLevel } from "./data/toplevel";

import { SearchIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

import Waiting from "./components/waiting";
import DomainTaken from "./components/domainTaken";
import Incomplete from "./components/incomplete";
import Invalid from "./components/invalidTop";
import DomainAvailable from "./components/domainAvailable";

import supabase from "../../supabase";
import { useSelector } from "react-redux";
function Marketplace({ onClose }) {
    // const [data, setData] = useState([]);
    const [userLink, setUserLink] = useState("");

    /**
     * 0 - when the user have not entered anything
     * 1 - when the domain is already present
     * 2 - when the domain is not present
     * 3 - Incomplete Domain name
     * 4 - When the top level domain is not present
     */
    const [userState, setUserState] = useState(0);

    const handleUserLink = (e) => {
        setUserLink(e.target.value);
        setUserState(0);
    };

    const username = useSelector((state) => state.status.username);

    useEffect(() => {
        const writeToLog = async () => {
            try {
                await supabase.from("logs").insert({
                    userId: username,
                    type: "marketplace/open",
                    action: "opened marketplace",
                    date: new Date().toString()
                });
            } catch (err) {}
        };

        writeToLog();
    }, []);

    return (
        <>
            <Center width="100%">
                <Box w="80vw" p="5">
                    <InputGroup>
                        <Input
                            type="text"
                            placeholder="Enter domain name: example.com"
                            onChange={handleUserLink}
                            onKeyDown={(event) => {
                                if (event.key === "Enter") processClick();
                            }}
                        />
                        <Center
                            mx="2"
                            px="4"
                            backgroundColor="red.200"
                            rounded="10"
                            _hover={{ backgroundColor: "green.100" }}
                            onClick={processClick}
                        >
                            <SearchIcon />
                        </Center>
                    </InputGroup>
                </Box>
            </Center>

            <Box px="50px">
                {(() => {
                    switch (userState) {
                        case 0:
                            return <Waiting />;
                            break;
                        case 1:
                            return <DomainTaken domainName={userLink} />;
                            break;
                        case 2:
                            return (
                                <DomainAvailable
                                    name={userLink}
                                    onClick={onClose}
                                />
                            );
                            break;
                        case 3:
                            return <Incomplete />;
                            break;
                        case 4:
                            return <Invalid />;
                            break;
                        default:
                            return (
                                <Text>
                                    {"I don't know what happened here "}
                                </Text>
                            );
                            break;
                    }
                })()}
            </Box>
        </>
    );

    function processClick() {
        if (userLink.includes(" ") || !/^[a-zA-Z0-9-.]*$/.test(userLink)) {
            setUserState(4);
            return;
        }

        if (userLink.split(".").length == 1) {
            setUserState(3);
            return;
        }

        if (!(userLink.split(".")[1] in topLevel)) {
            setUserState(4);
            return;
        }

        if (domains.includes(userLink)) {
            setUserState(1);
        } else {
            setUserState(2);
        }
    }
}

export { Marketplace as default };
