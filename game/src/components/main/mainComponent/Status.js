import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Box, Text, Flex, Center, Divider, HStack } from "@chakra-ui/react";

import { toast } from "react-toastify";

import { setCanCurrentlyTrain } from "@store/status";
import { incrementWeek } from "@store/week";
import StatusBar from "./StatusBar";
import { setGameWon, resetStatus } from "@store/status";
import { changeDomain } from "@store/domain";
import { motion, useAnimation } from "framer-motion";

const canTrain = [
    [], // first week
    ["spelling", "grammar", "links"],
    ["styling", "research"], // placeholder for marketplace
    ["spoof"]
];

function showWeekToast(week, maxEmails, weeklyGoals) {
    const Msg = ({ closeToast, toastProps }) => (
        <Flex justify={"start"} direction={"column"} align={"start"}>
            <Text fontWeight={"bold"}>Week: {week + 1}</Text>
            <Text>Max emails attacker will create: {maxEmails[week]}</Text>
            <Text>This week goal: $ {weeklyGoals[week].toLocaleString()}</Text>
        </Flex>
    );
    if (week == 0) {
        toast.info(
            "You can click on these notifications to dismiss them. Notifications on the left stay open until you click on them or navigate to new page.",
            {
                toastId: "info",
                position: "top-left",
                autoClose: false,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: 0,
                theme: "colored",
                icon: false
            }
        );

        toast.info(
            "New skills will be unlocked as you progress through the game. Your attacker will only draft limited number of emails per week.",
            {
                toastId: "info_2",
                position: "top-left",
                autoClose: false,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: 0,
                theme: "colored",
                icon: false,
                delay: 200
            }
        );
        // toast(
        //     "The first week goal is to familiarize with your helper. Review the different emails sent by your helper and try to reach the goal.",
        //     {
        //         toastId: "zerothWeek",
        //         position: "top-left",
        //         autoClose: false,
        //         hideProgressBar: true,
        //         closeOnClick: true,
        //         pauseOnHover: false,
        //         draggable: true,
        //         progress: 0,
        //         theme: "colored",
        //         icon: false
        //     }
        // );
    }
    toast.success(<Msg />, {
        toastId: "weekToast",
        position: "top-left",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: 1,
        theme: "colored",
        icon: false,
        delay: 1000
    });

    if (week === 1) {
        toast(
            "You have unlocked the attacker tab. You can train your helper in this tab.",
            {
                toastId: "firstweek",
                position: "top-left",
                autoClose: false,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: 0,
                theme: "colored",
                icon: false,
                delay: 1500
            }
        );
    }

    if (week !== 0 && week !== 3) {
        toast.info(`Skills unlocked: ${canTrain[week].join(", ")}`, {
            toastId: "weekSkills",
            position: "top-left",
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: 0,
            theme: "colored",
            icon: false,
            delay: 2000
        });
    }
    if (week == 3) {
        toast.info(
            "Victim are paying closer attention to the domain names. Marketplace has been disabled as its effectiveness has decreased. New skill unlocked: Spoofing.",
            {
                toastId: "marketplace",
                position: "top-left",
                autoClose: false,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: 0,
                theme: "colored",
                icon: false,
                delay: 2000
            }
        );
    }

    if (week == 2) {
        toast.info("Marketplace unlocked. You can buy new domains.", {
            toastId: "marketplace",
            position: "top-left",
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: 0,
            theme: "colored",
            icon: false,
            delay: 2000
        });
    }
}

function Status() {
    const dispatch = useDispatch();
    const history = useHistory();
    const {
        currentWeek,
        emailWrote,
        // peopleReached,
        // moneyGained,
        maxEmails,
        weeklyGoals
    } = useSelector((state) => state.week);

    const money = useSelector((state) => state.status.money);

    useEffect(() => {
        if (
            emailWrote >= maxEmails[currentWeek] &&
            money < weeklyGoals[currentWeek]
        ) {
            history.push("/gameover");
        }

        if (money >= weeklyGoals[currentWeek]) {
            dispatch(incrementWeek());
            dispatch(resetStatus());
            if (currentWeek == 3) {
                dispatch(setGameWon(true));
                history.push("/gameover");
            }
        }
    }, [emailWrote]);

    useEffect(() => {
        dispatch(setCanCurrentlyTrain(canTrain[currentWeek]));
        dispatch(changeDomain("xyz.xyz"));

        if (currentWeek != 0) {
            // dispatch(decrementByAmount(weeklyGoals[currentWeek - 1]));
            toast.warn(
                `Week ${currentWeek} payment has been made: \$${weeklyGoals[
                    currentWeek - 1
                ].toLocaleString()}. Goals reset!`,
                {
                    toastId: "payment",
                    position: "top-left",
                    autoClose: false,
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
        showWeekToast(currentWeek, maxEmails, weeklyGoals);
    }, [currentWeek]);

    const controls = useAnimation();
    const weekAnimationControls = useAnimation();

    const animateParams = useSelector((state) => state.animate);
    useEffect(() => {
        controls.start((i) => ({
            opacity: [1, 0.8, 0.5, 0.3, 0.1, 0],
            // color: "yellow",
            scale: [1, 1.2, 1],
            transition: { delay: i * 0.3, duration: 3 }
        }));

        return controls.stop;
    });

    useEffect(() => {
        weekAnimationControls.start((i) => ({
            opacity: [0, 1],
            transition: { duration: 3 }
        }));

        return weekAnimationControls.stop;
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
                            background={"red.500"}
                            minWidth="50vw"
                        >
                            <Center>
                                <HStack fontWeight={"bold"} fontSize={"3xl"}>
                                    <Text>This week (</Text>
                                    <motion.div
                                        custom={0}
                                        animate={weekAnimationControls}
                                        style={{ color: "yellow" }}
                                    >
                                        {currentWeek + 1}
                                    </motion.div>
                                    <Text> / 4)</Text>
                                </HStack>
                            </Center>
                            <Box py={2} color={"black"}>
                                <Divider />
                            </Box>
                            <Flex justify={"space-between"}>
                                <Flex
                                    direction={"column"}
                                    fontSize={"xl"}
                                    align={"start"}
                                >
                                    <Text>Number of emails drafted:</Text>
                                    {/* <Text>Number of people reached:</Text> */}
                                    <Text>Weekly Goals:</Text>
                                </Flex>
                                <Flex
                                    direction="column"
                                    fontSize={"xl"}
                                    align="center"
                                >
                                    <motion.div
                                        custom={0}
                                        animate={controls}
                                        style={{ color: "yellow" }}
                                    >
                                        +{animateParams.animateWeeklyEmails}
                                    </motion.div>
                                    {/* <motion.div custom={1} animate={controls}>
                                        +{animateParams.animateWeeklyPeople}
                                    </motion.div> */}
                                    <motion.div
                                        custom={2}
                                        animate={controls}
                                        style={{ color: "yellow" }}
                                    >
                                        +{animateParams.animateWeeklyMoney}
                                    </motion.div>
                                </Flex>{" "}
                                <Flex
                                    direction="column"
                                    fontSize={"xl"}
                                    align="end"
                                >
                                    <Text>
                                        {emailWrote} / {maxEmails[currentWeek]}
                                    </Text>
                                    {/* <Text> {peopleReached}</Text> */}
                                    <Text>
                                        $ {money} / {weeklyGoals[currentWeek]}
                                    </Text>
                                </Flex>
                            </Flex>
                        </Box>
                    </Center>
                </Box>
            </Flex>
        </Box>
    );
}

export default Status;
