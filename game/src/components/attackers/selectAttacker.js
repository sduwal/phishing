import { Flex, Text, Box } from "@chakra-ui/react";
import AttackerCard from "./attackerCard.js";
import attackers from "./attackers";

import { useDispatch, useSelector } from "react-redux";
import { changeAttacker } from "../../store/attacker.js";
import { useClickable } from "@chakra-ui/clickable";

function SelectAttacker() {
    const dispatch = useDispatch();
    const money = useSelector((state) => state.money.value);

    const Clickable = (props) => {
        const clickable = useClickable(props);
        return (
            <Box
                display="inline-flex"
                {...clickable}
                _hover={{ bg: "blue", color: "white" }}
                _disabled={{ opacity: 0.4, pointerEvents: "none" }}
            />
        );
    };
    const data = attackers.map((attacker) => {
        return (
            <Clickable
                key={attacker.name}
                as="div"
                onClick={() => {
                    dispatch(changeAttacker(attacker));
                }}
                isDisabled={money < attacker.cost}
            >
                <AttackerCard
                    key={attacker.name}
                    name={attacker.name}
                    efficiency={attacker.efficiency}
                    technicalSkill={attacker.technicalSkill}
                    cost={attacker.cost}
                    image={attacker.image}
                    onClick={() => selectAttacker(attacker)}
                />
            </Clickable>
        );
    });

    return (
        <>
            <Text>Click on any card to select attacker</Text>
            <Flex direction="row">{data}</Flex>
        </>
    );
}

export { SelectAttacker as default };
