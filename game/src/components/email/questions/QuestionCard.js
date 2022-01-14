/* eslint-disable operator-linebreak */
import React, { useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import { Container, Collapse, Text } from "@chakra-ui/react";

export const QuestionCard = ({
    display,
    hint,
    displayLevel,
    attackerLevel,
    color,
    researchTime,
    value
}) => {
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(!show);

    const [{ isDragging, opacity }, dragRef] = useDrag(
        {
            type: "QUESTION",
            item: {
                display,
                hint,
                displayLevel,
                attackerLevel,
                color,
                value,
                researchTime,
                displayMessage:
                    (displayLevel == 2 ? "Linked Displayed using: " : "") +
                    display
            }
            // collect: (monitor) => ({
            //     opacity: monitor.isDragging() ? 0.2 : 1,
            //     isDragging: monitor.isDragging()
            // })
        },
        []
    );

    // useEffect(() => {
    //     if (isDragging) {
    //         setShow(false);
    //     }
    // }, [isDragging]);

    return (
        <>
            <Container
                border="2px solid"
                ref={dragRef}
                my="2"
                rounded="2xl"
                background={color}
                opacity={opacity}
                p={3}
                onClick={handleToggle}
                _hover={{
                    cursor: "pointer"
                }}
            >
                <Text fontWeight="bold">{display}</Text>

                <Collapse mt="2" in={show}>
                    <Container mt={4}>
                        <Text>{hint}</Text>
                    </Container>
                </Collapse>
            </Container>
        </>
    );
};
