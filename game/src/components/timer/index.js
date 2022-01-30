import { IconButton } from "@chakra-ui/button";
import { Box, Flex, Text, Center } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import { useSelector, useDispatch } from "react-redux";
import { buyTime } from "@store/timer";
import { decrementByAmount } from "@store/status";

function Timer({ second }) {
    const time = useSelector((state) => state.timer.value);
    const cost = useSelector((state) => state.timer.price);
    const money = useSelector((state) => state.status.money);

    const dispatch = useDispatch();

    const addTime = () => {
        dispatch(buyTime());
        dispatch(decrementByAmount(cost));
    };

    return (
        <Box border={"1px solid black"} rounded={"xl"} p={1}>
            <Text zIndex={999} fontSize={"0.7em"} color={"gray.500"}>
                Cost: ${cost} for 120 seconds
            </Text>
            <Center>
                <Box>
                    <Flex direction="row" align="center">
                        <Text
                            fontSize="24"
                            fontWeight="semibold"
                            lineHeight="110%"
                            mr="3"
                        >
                            {formatTime(time)}
                        </Text>
                        <div className="addTime">
                            <IconButton
                                aria-label="add time"
                                icon={<AddIcon />}
                                onClick={addTime}
                                isDisabled={money < cost}
                            />
                        </div>
                    </Flex>
                </Box>
            </Center>
            {/* <Center> */}
            {/* </Center> */}
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
