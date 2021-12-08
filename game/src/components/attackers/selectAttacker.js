import { Flex, Text } from "@chakra-ui/react";
import AttackerCard from "./attackerCard.js";
import attackers from "./attackers";

function SelectAttacker() {
    const data = attackers.map((attacker) => {
        return <AttackerCard attacker={attacker} key={attacker.name} />;
    });

    return (
        <>
            <Text>Click on any card to select attacker</Text>
            <Flex direction="row" alignItems="center" justifyContent="center">
                {data}
            </Flex>
        </>
    );
}

export { SelectAttacker as default };
