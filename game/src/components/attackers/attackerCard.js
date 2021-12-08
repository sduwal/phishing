/* eslint-disable operator-linebreak */
import {
    Flex,
    Container,
    Center,
    Image,
    Text,
    Spacer,
    Button,
    Progress,
    CircularProgress,
    CircularProgressLabel
} from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";
import { changeAttacker } from "../../store/attacker.js";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

function AttackerCard({ attacker }) {
    const [hiring, setHiring] = useState(false);
    const [value, setValue] = useState(0);

    const attackerStore = useSelector((state) => state.attacker.value);
    const money = useSelector((state) => state.money.value);
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setInterval(() => {
            setValue((value) => {
                if (value === 100) {
                    setHiring(false);
                    clearInterval(timer);
                    return 0;
                }
                return value + 1;
            });
        }, 10);
        return () => clearInterval(timer);
    }, [hiring]);

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
            backgroundColor={
                attackerStore.name == attacker.name
                    ? "green.200"
                    : "transparent"
            }
            _hover={{
                bg: "blue.100",
                rounded: "lg"
            }}
        >
            <Center>
                <Image width="100px" src={attacker.image} borderRadius="full" />
            </Center>

            <Center mt="6">
                <Flex direction="row">
                    {[...Array(attacker.level)].map((x, i) => (
                        <StarIcon key={i * -1} color="gold" h={6} w={6} m={1} />
                    ))}
                </Flex>
            </Center>
            <Text width="100%" fontWeight="bold" pt="10px">
                Efficiency
            </Text>
            <Progress
                hasStripe
                value={attacker.efficiency}
                size="sm"
                margin="2px"
            />

            <Text width="100%" fontWeight="bold" pt="10px">
                Tech Skill
            </Text>
            <Progress
                hasStripe
                value={attacker.technicalSkill}
                size="sm"
                margin="2px"
            />

            <Flex direction="row" pt="10px">
                <Text width="100%" fontWeight="bold">
                    Cost
                </Text>
                <Text fontWeight="bold">{attacker.cost}</Text>
            </Flex>
            <Flex>
                <Spacer></Spacer>
                {hiring ? (
                    <CircularProgress mt={3}>
                        <CircularProgressLabel>{value}%</CircularProgressLabel>
                    </CircularProgress>
                ) : (
                    <Button
                        onClick={() => {
                            dispatch(changeAttacker());
                            setHiring(true);
                            dispatch(changeAttacker(attacker));
                        }}
                        mt="3"
                        isDisabled={
                            attackerStore.name == attacker.name ||
                            money < attacker.cost
                        }
                    >
                        <Text>
                            {attackerStore.name == attacker.name
                                ? "Selected"
                                : "Hire"}
                        </Text>
                    </Button>
                )}
            </Flex>
        </Container>
    );
}

export { AttackerCard as default };
