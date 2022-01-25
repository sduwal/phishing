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
    ModalBody,
    ModalCloseButton,
    Tooltip
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { useRef } from "react";

import MarketPlace from "@components/marketplace/index";
import Attacker from "@components/attackers";
import { EmailClient } from "@components/emails/email";
import Timer from "@components/timer";
import NoSkillEmailClient from "@components/emails/noSkillEmails";

import domainImage from "./images/domain.jpg";
import attackerImage from "./images/attacker.png";
import emailImage from "./images/mail.png";
import sentImage from "./images/sent.gif";
import trainingImage from "./images/training.gif";

import PrevEmails from "../prevEmails";

import { useSelector } from "react-redux";

function SideButtons({
    title,
    desc,
    image,
    color = "red",
    onClick,
    modal,
    id,
    view = true, // only for the email client
    isDisabled = false
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = useRef();
    return (
        <>
            <Box margin={0} padding={0} height={0} ref={finalRef}></Box>

            <Tooltip
                label={
                    isDisabled
                        ? "Can not do this while attacker is training."
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
                        backgroundColor: "black"
                    }}
                    onClick={isDisabled ? () => {} : onOpen}
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
                        <Text py="2" fontWeight="bold" color="white">
                            {title}
                        </Text>
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
                    <ModalHeader>
                        <Center>
                            <Timer />
                        </Center>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {id == 1 && view ? (
                            <NoSkillEmailClient onClose={onClose} />
                        ) : (
                            <EmailClient onClose={onClose} />
                        )}
                        {id == 2 && <MarketPlace onClose={onClose} />}
                        {id == 3 && <Attacker />}
                        {id == 4 && <PrevEmails />}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default function SideBar() {
    const isTraining = useSelector((state) => state.attacker.isTraining);
    const canCurrentlyTrain = useSelector(
        (state) => state.status.canCurrentlyTrain
    );
    const side = [
        {
            title: "Email",
            desc: "Generate new email",
            image: isTraining ? trainingImage : emailImage,
            color: isTraining ? "grey" : "blue.500",
            view: canCurrentlyTrain.length < 3 ? true : false,
            modal: <EmailClient />,
            id: 1,
            isDisabled: isTraining
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
        },
        {
            title: "Prev Emails",
            desc: "Change Attackers",
            image: sentImage,
            color: "purple.200",
            modal: <PrevEmails />,
            id: 4
        }
    ];

    return (
        <Box width="fit-content" px={"10"} overflowY="auto" maxH="90vh">
            <VStack spacing="4">
                {side.map((item, index) => (
                    <SideButtons key={item.title} {...side[index]} />
                ))}
            </VStack>
        </Box>
    );
}
