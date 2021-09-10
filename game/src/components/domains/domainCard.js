import { Box, Text } from "@chakra-ui/layout";

import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Spacer
} from "@chakra-ui/react";

export default function DomainCard({ name, price, description }) {
    return (
        <AccordionItem>
            <h2>
                <AccordionButton _expanded={{ bg: "red.100", color: "black" }}>
                    <Box flex="1" textAlign="left">
                        {name}
                    </Box>
                    <Spacer></Spacer>
                    <Text>{price}</Text>
                    {/* <AccordionIcon></AccordionIcon> */}
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{description}</AccordionPanel>
        </AccordionItem>
    );
}
