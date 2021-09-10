import { Box, Flex, Text } from "@chakra-ui/layout";

import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Spacer,
    Button,
    Container
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { changeDomain } from "../../store/domain";
export default function DomainCard({ name, price, description }) {
    const money = useSelector((state) => state.money.value);
    const dispatch = useDispatch();
    const current = useSelector((state) => state.domain.value);

    const selected = current.name === name;

    return (
        <AccordionItem
            isDisabled={money < price}
            backgroundColor={selected ? "green.200" : "transparent"}
        >
            <h2>
                <AccordionButton _expanded={{ bg: "blue.100", color: "black" }}>
                    <Box flex="1" textAlign="left">
                        {name}
                    </Box>
                    <Spacer />
                    <Text> {price}</Text>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Flex direction="column">
                    <Container>{description}</Container>
                    {current.name === name ? (
                        <Button isDisabled>Selected</Button>
                    ) : (
                        <Button
                            onClick={() => {
                                dispatch(
                                    changeDomain({ name, price, description })
                                );
                            }}
                        >
                            Select
                        </Button>
                    )}
                </Flex>
            </AccordionPanel>
        </AccordionItem>
    );
}
