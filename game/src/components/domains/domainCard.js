import { Container, Text } from "@chakra-ui/layout";

import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon
} from "@chakra-ui/react";

export default function DomainCard({ name, price, description }) {
    return (
        <AccordionItem>
            <h2>
                <AccordionButton _expanded={{ bg: "red.100", color: "black" }}>
                    <Container flex="1" textAlign="left">
                        {name}
                    </Container>
                    <Text>{price}</Text>
                    {/* <AccordionIcon /> */}
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{description}</AccordionPanel>
        </AccordionItem>
    );
}
