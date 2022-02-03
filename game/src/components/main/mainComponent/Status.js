import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Box, Text, Flex, Center, Divider } from "@chakra-ui/react";

import { toast } from "react-toastify";

import { setCanCurrentlyTrain } from "@store/status";
import { incrementWeek } from "@store/week";
import StatusBar from "./StatusBar";

const canTrain = [
    [], // first week
    ["spelling", "grammar", "links"],
    ["styling", "spoof", "research"],
    [] // placeholder for marketplace
];

function showWeekToast(week, maxEmails, weeklyGoals) {
    const Msg = ({ closeToast, toastProps }) => (
        <Flex justify={"start"} direction={"column"} align={"start"}>
            <Text fontWeight={"bold"}>Week: {week + 1}</Text>
            <Text>Max emails you can send: {maxEmails[week]}</Text>
            <Text>This week goal: $ {weeklyGoals[week]}</Text>
        </Flex>
    );

    if (week == 0) {
        toast(
            "The first week goal is to familiarize with your helper. Review the different emails sent by your helper and try to reach the goal.",
            {
                toastId: "zerothWeek",
                position: "top-left",
                autoClose: 15000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: 0,
                theme: "colored",
                icon: false
            }
        );
    }
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
        delay: 200
    });

    if (week === 1) {
        toast(
            "You have unlocked the attacker tab. You can train your helper in this tab.",
            {
                toastId: "firstweek",
                position: "top-left",
                autoClose: 15000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: 0,
                theme: "colored",
                icon: false,
                delay: 400
            }
        );
    }

    if (week !== 0 && week !== 3) {
        toast.info(`Skills unlocked: ${canTrain[week].join(", ")}`, {
            toastId: "weekSkills",
            position: "top-left",
            autoClose: 15000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: 0,
            theme: "colored",
            icon: false,
            delay: 500
        });
    }

    if (week == 3) {
        toast.info("Marketplace unlocked. You can buy new domains.", {
            toastId: "weekSkills",
            position: "top-left",
            autoClose: 15000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: 0,
            theme: "colored",
            icon: false,
            delay: 500
        });
    }
    // if (week != 0) {
    //     toast.info("Attackers Skills: Spelling, Grammar", {
    //         toastId: "weekSkills",
    //         position: "top-left",
    //         autoClose: 15000,
    //         hideProgressBar: true,
    //         closeOnClick: true,
    //         pauseOnHover: false,
    //         draggable: true,
    //         progress: 0,
    //         theme: "colored",
    //         icon: false,
    //         delay: 2000
    //     });
    // }
}

function Status() {
    const dispatch = useDispatch();
    const history = useHistory();
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
            emailWrote >= maxEmails[currentWeek] &&
            moneyGained < weeklyGoals[currentWeek]
        ) {
            // history.push("/gameover");
            console.log("You have reached your weekly goal!"); // game over
        }

        if (moneyGained > weeklyGoals[currentWeek]) {
            dispatch(incrementWeek());
        }

        // dispatch(incrementTotalEmails(emailWrote));
    }, [emailWrote, moneyGained]);

    useEffect(() => {
        dispatch(setCanCurrentlyTrain(canTrain[currentWeek]));
        showWeekToast(currentWeek, maxEmails, weeklyGoals);
    }, [currentWeek]);

    return (
        <Box>
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
                                    This week ({currentWeek + 1}/4)
                                </Text>
                            </Center>
                            <Box py={2} color={"black"}>
                                <Divider />
                            </Box>
                            <Flex justify={"space-between"}>
                                <Text fontSize={"xl"}>
                                    Number of emails sent:
                                </Text>
                                <Text fontSize={"xl"}>
                                    {emailWrote} / {maxEmails[currentWeek]}
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
                                <Text fontSize={"xl"}>
                                    $ {moneyGained} / {weeklyGoals[currentWeek]}
                                </Text>
                            </Flex>
                        </Box>
                    </Center>
                </Box>
            </Flex>
        </Box>
    );
}

export default Status;
