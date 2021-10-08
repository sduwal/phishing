import { Button, useDisclosure, Spacer, Text } from "@chakra-ui/react";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
} from "@chakra-ui/react";
import SelectAttacker from "../attackers/selectAttacker";

export default function changeAttackerButton() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button onClick={onOpen}>Change Attacker</Button>

            <Modal
                isOpen={isOpen}
                size="5xl"
                scrollBehavior="inside"
                onClose={onClose}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Attackers</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <SelectAttacker />
                    </ModalBody>

                    <ModalFooter>
                        {/* <Text color="grey" fontSize="12">
                            Click on the domains to read more
                        </Text>
                        <Spacer></Spacer> */}
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
