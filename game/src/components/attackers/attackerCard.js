import { Container, Center, Image, Text, Progress } from "@chakra-ui/react";

import { useSelector } from "react-redux";
import helper from "./helper.png";

function AttackerCard() {
    const attacker = useSelector((state) => state.attacker);
    return (
        <Container
            margin="5"
            padding="5"
            border="2px"
            borderColor="red.100"
            borderRadius="lg"
            minW="250"
            maxW="300"
            shadow="inner"
            _hover={{
                bg: "blue.100",
                rounded: "lg"
            }}
        >
            <Center>
                <Image height="150px" src={helper} borderRadius="full" />
            </Center>
            {/* <Center mt="6">
                <Text>Cost: {attacker.totalAmount}</Text>
            </Center>
            <Center>
                <Text>Time: {attacker.trainingTime}</Text>
            </Center> */}
            <Text width="100%" fontWeight="bold" pt="10px">
                Efficiency
            </Text>
            <Progress
                hasStripe
                value={calculateEfficiency(attacker)}
                size="sm"
                margin="2px"
            />
            {attacker.isTraining && (
                <>
                    <Center mt={4}>
                        <Text>Training...</Text>
                    </Center>
                    <Progress
                        hasStripe
                        value={attacker.trainingProgress}
                        size={"sm"}
                    />
                </>
            )}
        </Container>
    );
}

function calculateEfficiency(attacker) {
    let languageEfficiency = attacker.languageSkills.reduce(
        (acc, curr) => acc + curr.efficiency,
        0
    );

    let techEfficiency = attacker.techSkills.reduce(
        (acc, curr) => acc + curr.efficiency,
        0
    );

    if (isNaN(languageEfficiency)) languageEfficiency = 0;
    if (isNaN(techEfficiency)) techEfficiency = 0;

    return Math.max(5, 0.4 * languageEfficiency + 0.6 * techEfficiency);
}

export { AttackerCard as default };
