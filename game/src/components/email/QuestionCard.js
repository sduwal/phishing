import React from "react";
import { useDrag } from "react-dnd";
import { Box } from "@chakra-ui/react";

export const QuestionCard = (question) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: "QUESTION",
        item: question,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    return (
        <Box ref={dragRef}>
            {name}
            {isDragging && "😱"}
        </Box>
    );
};
