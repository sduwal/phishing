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
                fontWeight={"bold"}
                color={"gray.500"}
                py={4}
                fontSize={"1.2em"}
            >
                <Text>
                    {
                        "Before we start sending emails, let us review some emails. We will not send these emails to the user."
                    }
                </Text>
                <Text>
                    {
                        "This will help you assess the skill of the helper and open opportunities to train him further."
                    }
                </Text>
            </Box>
        </Center>
    );
}

export default NoSkillContainer;
