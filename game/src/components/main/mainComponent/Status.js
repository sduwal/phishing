import { Box, Text, Flex, Center, Divider, IconButton } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import StatusBar from "./StatusBar";

function showWeekToast(week, maxEmails, weeklyGoals) {
    const Msg = ({ closeToast, toastProps }) => (
        <Flex justify={"start"} direction={"column"} align={"start"}>
            <Text fontWeight={"bold"}>Week: {week}</Text>
            <Text>Number of email to write: {maxEmails[week - 1]}</Text>
            <Text>This week goal: $ {weeklyGoals[week - 1]}</Text>
        </Flex>
    );

    toast.success(<Msg />, {
        toastId: "weekToast",
        position: "top-left",
        autoClose: 15000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: 0,
        theme: "colored",
        icon: false,
        delay: 1000
    });
}

function Status() {
    const {
        currentWeek,
        emailWrote,
        peopleReached,
        moneyGained,
        maxEmails,
        weeklyGoals
    } = useSelector((state) => state.week);

    useEffect(() => {
        if (
            emailWrote == maxEmails[currentWeek - 1] &&
            moneyGained < weeklyGoals[currentWeek - 1]
        ) {
            console.log("You have reached your weekly goal!");
        }
    }, [emailWrote, moneyGained]);

    useEffect(() => {
        showWeekToast(currentWeek, maxEmails, weeklyGoals);
    }, [currentWeek]);

    return (
        <Box background="red.100">
            <Flex
                direction="column"
                justify="space-between"
                height={"100vh"}
                p={"20px"}
            >
                <Center>
                    <StatusBar />
                </Center>
                <Box grow="1" height="100%" alignContent={"center"}>
                    <Center height={"100%"}>
                        <Box
                            border="2px solid black"
                            rounded={"xl"}
                            p={5}
                            minWidth="30vw"
                        >
                            <Center>
                                <Text fontWeight={"bold"} fontSize={"3xl"}>
                                    This week ({currentWeek}/4)
                                </Text>
                            </Center>
                            <Box py={2} color={"black"}>
                                <Divider />
                            </Box>
                            <Flex justify={"space-between"}>
                                <Text fontSize={"xl"}>
                                    Number of email wrote:
                                </Text>
                                <Text fontSize={"xl"}>
                                    {emailWrote} / {maxEmails[currentWeek - 1]}
                                </Text>
                            </Flex>
                            <Flex justify={"space-between"}>
                                <Text fontSize={"xl"}>
                                    Number of people reached:
                                </Text>
                                <Text fontSize={"xl"}> {peopleReached}</Text>
                            </Flex>

                            <Flex justify={"space-between"}>
                                <Text fontSize={"xl"}>Money gained:</Text>
                                <Text fontSize={"xl"}>$ {moneyGained}</Text>
                            </Flex>
                        </Box>
                    </Center>
                </Box>
                {/* <Spacer /> */}
                {/* <Flex
                    justify={"space-around"}
                    fontSize={"1.2em"}
                    fontWeight={"semibold"}
                >
                    <Box textAlign={"center"}>
                        <Text>Remaining emails this week:</Text>
                        <Text>6 / 7</Text>
                    </Box>

                    <Box textAlign={"center"}>
                        <Text>Money target this week:</Text>
                        <Text>$ 4000</Text>
                    </Box>
                </Flex> */}
            </Flex>
        </Box>
    );
}

export default Status;
