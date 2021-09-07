import { IconButton } from "@chakra-ui/button";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Spacer } from "@chakra-ui/react";

function Timer({ second }) {
    const [time, setTime] = useState(second);

    const tick = () => {
        if (time != 0) setTime(time - 1);
    };
    useEffect(() => {
        const timer = setInterval(() => tick(), 1000);
        return () => clearInterval(timer);
    });
    return (
        <Box border="1px solid" pl="2">
            <Flex direction="row" align="center">
                <Text
                    fontSize="24"
                    fontWeight="semibold"
                    lineHeight="110%"
                    mr="3"
                >
                    {formatTime(time)}
                </Text>
                <IconButton aria-label="add time" icon={<AddIcon />} />
            </Flex>
        </Box>
    );
}

function formatTime(seconds) {
    if (seconds === 0) return "00:00";

    if (seconds > 3600) seconds = 3600;

    const minute = Math.floor(seconds / 60);
    seconds = seconds - minute * 60;

    return `${minute.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
}

export { Timer as default };
