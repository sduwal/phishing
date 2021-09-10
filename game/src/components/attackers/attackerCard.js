import {
    Flex,
    Container,
    Center,
    Image,
    Text,
    Progress
} from "@chakra-ui/react";

import { useSelector } from "react-redux";

function AttackerCard({ name, efficiency, technicalSkill, cost, image }) {
    const attackerStore = useSelector((state) => state.attacker.value);

    return (
        <Container
            margin="5"
            padding="5"
            border="2px"
            borderColor="green.200"
            borderRadius="lg"
            minW="250"
            shadow="inner"
            backgroundColor={
                attackerStore.name == name ? "green.200" : "transparent"
            }
        >
            <Center>
                <Image width="100px" src={image} borderRadius="full" />
            </Center>
            <Text width="100%" fontWeight="bold" pt="10px">
                Efficiency
            </Text>
            <Progress hasStripe value={efficiency} size="sm" margin="2px" />

            <Text width="100%" fontWeight="bold" pt="10px">
                Tech Skill
            </Text>
            <Progress hasStripe value={technicalSkill} size="sm" margin="2px" />

            <Flex direction="row" pt="10px">
                <Text width="100%" fontWeight="bold">
                    Cost
                </Text>
                <Text fontWeight="bold">{cost}</Text>
            </Flex>
        </Container>
    );
}

export { AttackerCard as default };
