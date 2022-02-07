/* eslint-disable indent */
import {
    VStack,
    Box,
    Text,
    Image,
    Center,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalContent,
    Flex,
    ModalBody,
    ModalCloseButton,
    Tooltip,
    Circle,
    HStack
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { useRef } from "react";

import MarketPlace from "@components/marketplace/index";
import Attacker from "@components/attackers";
import { EmailClient } from "@components/emails/email";
import NoSkillEmailClient from "@components/emails/noSkillEmails";

import domainImage from "./images/domain.jpg";
import attackerImage from "./images/attacker.png";
import emailImage from "./images/mail.png";
import sentImage from "./images/sent.gif";
import trainingImage from "./images/training.gif";

import PrevEmails from "../prevEmails";

import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
function SideButtons({
    title,
    desc,
    image,
    color = "red",
    onClick,
    modal,
    id,
    view = true, // only for the email client
    isDisabled = false,
    canTrain = 0
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const finalRef = useRef();

    return (
        <>
            <Box margin={0} padding={0} height={0} ref={finalRef}></Box>

            <Tooltip
                label={
                    isDisabled
                        ? "Unlock spelling and grammar skills first."
                        : ""
                }
            >
                <Box
                    px="2"
                    pt="2"
                    m="0"
                    background={color}
                    rounded="10"
                    minW="200px"
                    alignContent="center"
                    _hover={{
                        cursor: isDisabled ? "wait" : "pointer",
                        backgroundColor: isDisabled ? "transparent" : "black"
                    }}
                    onClick={() => {
                        toast.dismiss();
                        onOpen();
                    }}
                >
                    <div className={title.split(" ")[0].toLowerCase()}>
                        <Image
                            src={image}
                            background="transparent"
                            h={130}
                            w={190}
                            objectFit="cover"
                            color={"white"}
                        />
                    </div>
                    <Center>
                        <HStack align={"center"} justify="center">
                            <Text py="2" fontWeight="bold" color="white">
                                {title}
                            </Text>
                            {title === "Attackers" && canTrain > 0 && (
                                <Circle
                                    // position={"absolute"}
                                    m="1"
                                    background={"green"}
                                    size="25px"
                                    shadow={"0px 0px 5px green"}
                                >
                                    <Text fontWeight={"bold"} color={"white"}>
                                        {canTrain}
                                    </Text>
                                </Circle>
                            )}
                        </HStack>
                    </Center>
                </Box>
            </Tooltip>

            <Modal
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                size="full"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        {id == 1 &&
                            (view ? (
                                <NoSkillEmailClient onClose={onClose} />
                            ) : (
                                <EmailClient onClose={onClose} />
                            ))}
                        {/* ))} */}
                        {id == 2 && <MarketPlace onClose={onClose} />}
                        {id == 3 && <Attacker />}
                        {/* {id == 4 && <PrevEmails />} */}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default function SideBar() {
    const currentWeek = useSelector((state) => state.week.currentWeek);
    const canCurrentlyTrain = useSelector(
        (state) => state.status.canCurrentlyTrain
    );

    const { languageSkills, techSkills } = useSelector(
        (state) => state.attacker
    );

    const canTrain =
        canCurrentlyTrain.length - languageSkills.length - techSkills.length;
    const side = [
        {
            title: "Email",
            desc: "Generate new email",
            image: emailImage,
            color: "blue.500",
            view: currentWeek == 0 ? true : false,
            modal: <EmailClient />,
            id: 1,
            isDisabled: false // TODO: if training, disable
        },
        {
            title: "Marketplace",
            desc: "Open Domain Marketplace",
            image: domainImage,
            color: "green.400",
            modal: <MarketPlace />,
            id: 2
        },
        {
            title: "Attackers",
            desc: "Change Attackers",
            image: attackerImage,
            color: "red.500",
            modal: <Attacker />,
            id: 3
        }
        // {
        //     title: "Prev Emails",
        //     desc: "Change Attackers",
        //     image: sentImage,
        //     color: "purple.200",
        //     modal: <PrevEmails />,
        //     id: 4
        // }
    ];

    return (
        <Center>
            <Box width="fit-content" px={"10"} overflowY="auto" maxH="90vh">
                <VStack spacing="4" align={"center"}>
                    {side.map((item, index) => {
                        if (item.title === "Marketplace" && currentWeek != 2) {
                            return;
                        }

                        if (item.title === "Attackers" && currentWeek < 1) {
                            return;
                        }
                        return (
                            <motion.div
                                key={item.title}
                                animate={{
                                    x: 0,
                                    // backgroundColor: "#000",
                                    opacity: [0, 1]
                                    // position: "fixed"
                                    // transitionEnd: {
                                    //     display: "none"
                                    // }
                                }}
                            >
                                <SideButtons
                                    key={item.title}
                                    {...side[index]}
                                    canTrain={canTrain}
                                />
                            </motion.div>
                        );
                    })}
                </VStack>
            </Box>
        </Center>
    );
}
