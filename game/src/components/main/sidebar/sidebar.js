import { VStack, Box, Text, Tooltip, Image, Center } from "@chakra-ui/react";
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
import SelectAttacker from "../../attackers/selectAttacker";
import { EmailClient } from "../../email";

import domainImage from "./images/domain.jpg";
import attackerImage from "./images/attacker.png";
import emailImage from "./images/mail.png";

function SideButtons({ title, desc, image, color = "red", onClick, modal }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = useRef();
    return (
        <>
            <Box margin={0} padding={0} height={0} ref={finalRef}></Box>
            <Tooltip shouldWrapChildren label={desc} openDelay={300}>
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
            </Tooltip>

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
                    <ModalBody>{modal}</ModalBody>

                    {/* <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter> */}
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
            modal: <EmailClient />
        },
        {
            title: "Domain",
            desc: "Open Domain Marketplace",
            image: domainImage,
            color: "green.400",
            modal: <MarketPlace />
        },
        {
            title: "Attackers",
            desc: "Change Attackers",
            image: attackerImage,
            color: "red.500",
            modal: <SelectAttacker />
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
