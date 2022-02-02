import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Text, Center, Box } from "@chakra-ui/react";

import BrowserCustom from "./BrowserCustom";
import data from "./data";
import { getRandomInteger } from "../shared/utils";
import createEmails from "./data/grammar";

function NoSkillContainer({ onClose }) {
    const currentTrainingModule = useSelector(
        (state) => state.status.currentTrainingMode
    );

    const count = useSelector((state) => state.status.count);
    const attacker = useSelector((state) => state.attacker.languageSkills);

    const [email, setEmail] = useState(null);
    useEffect(() => {
        const index = getRandomInteger(data[currentTrainingModule].length);
        if (currentTrainingModule === "spelling") {
            setEmail(data[currentTrainingModule][index]);
        } else {
            const emails = createEmails(attacker.includes("spelling"));
            setEmail(emails[index]);
        }
    }, []);

    return (
        <>
            {count["spelling"] === 0 && renderHelpMessage()}
            {count["spelling"] > 0 && (
                <Center>
                    <Box w="60%" py={2}>
                        <Text>
                            Keep up the good work. Select the best email and
                            access the attacker skills.
                        </Text>
                    </Box>
                </Center>
            )}
            <BrowserCustom
                email={email}
                onClose={onClose}
                currentTrainingModule={currentTrainingModule}
                count={count}
            />
        </>
    );
}

function renderHelpMessage() {
    return (
        <Center>
            <Box
                fontWeight={"500"}
                // color={"gray.500"}
                py={4}
                fontSize={"1em"}
                border={"1px dotted black"}
                my={2}
                p={3}
                rounded={"md"}
                w={"60%"}
            >
                <Text>
                    {
                        "Your helper has drafted a list of emails for you to choose from. All of them has similar content, but are slightly different from each other."
                    }
                </Text>
                <Text>
                    {
                        "Review the different email variation sent to you by the helper and pick the best email."
                    }
                </Text>
            </Box>
        </Center>
    );
}

export default NoSkillContainer;
