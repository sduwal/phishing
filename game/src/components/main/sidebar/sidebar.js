import { VStack, Box, Text, Image, Center } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { useRef } from "react";

import {
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalContent,
    ModalBody,
    ModalCloseButton
} from "@chakra-ui/react";

import MarketPlace from "../../marketplace/index";
import Attacker from "../../attackers";
import { EmailClient } from "../../email";

import domainImage from "./images/domain.jpg";
import attackerImage from "./images/attacker.png";
import emailImage from "./images/mail.png";
import sentImage from "./images/sent.gif";

import PrevEmails from "./prevEmails";

function SideButtons({
    title,
    desc,
    image,
    color = "red",
    onClick,
    modal,
    id
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = useRef();
    return (
        <>
            <Box margin={0} padding={0} height={0} ref={finalRef}></Box>
            <Box
                px="2"
                pt="2"
                m="0"
                background={color}
                rounded="10"
                minW="200px"
                alignContent="center"
                _hover={{
                    cursor: "pointer",
                    backgroundColor: "black"
                }}
                onClick={onOpen}
            >
                <Image
                    src={image}
                    background="transparent"
                    h={130}
                    w={190}
                    objectFit="cover"
                />
                <Center>
                    <Text py="2" fontWeight="bold" color="white">
                        {title}
                    </Text>
                </Center>
            </Box>

            <Modal
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                size="full"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {id == 1 && <EmailClient onClose={onClose} />}
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
    const side = [
        {
            title: "Email",
            desc: "Generate new email",
            image: emailImage,
            color: "blue.500",
            modal: <EmailClient />,
            id: 1
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
            color: "grey",
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
