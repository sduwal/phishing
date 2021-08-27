import { Flex, Text } from "@chakra-ui/react";
import AttackerCard from "./attackerCard.js";

function SelectAttacker() {
    return (
        <>
            <Text>Click on any card to select attacker</Text>
            <Flex direction="row">
                <AttackerCard
                    name="Name 1"
                    efficiency="50"
                    technicalSkill="30"
                    cost="2"
                />
                <AttackerCard
                    name="Name 1"
                    efficiency="50"
                    technicalSkill="30"
                    cost="2"
                />
                <AttackerCard
                    name="Name 1"
                    efficiency="50"
                    technicalSkill="30"
                    cost="2"
                />
            </Flex>
        </>
    );
}

export { SelectAttacker as default };
