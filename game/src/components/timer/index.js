import { IconButton } from "@chakra-ui/button";
import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import { useEffect } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { buyTime, decrement } from "../../store/timer";
import { decrementByAmount } from "../../store/status";

function Timer({ second }) {
    const time = useSelector((state) => state.timer.value);
    const cost = useSelector((state) => state.timer.price);
    const money = useSelector((state) => state.status.money);
    const stepsEnabled = useSelector((state) => state.steps.stepsEnabled);
    const history = useHistory();
    const dispatch = useDispatch();

    const tick = () => {
        if (time <= 0) history.push("/gameover");
        if (time > 0 && !stepsEnabled) dispatch(decrement());
    };

    const addTime = () => {
        dispatch(buyTime());
        dispatch(decrementByAmount(cost));
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
                <div className="addTime">
                    <Tooltip label={`Cost: \$${cost} for 120 sec`}>
                        <IconButton
                            aria-label="add time"
                            icon={<AddIcon />}
                            onClick={addTime}
                            isDisabled={money < cost}
                        />
                    </Tooltip>
                </div>
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
