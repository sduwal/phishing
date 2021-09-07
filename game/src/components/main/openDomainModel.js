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
import ChooseDomain from "../domains/chooseDomain";

export default function DomainButton() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal
                isOpen={isOpen}
                size="xl"
                scrollBehavior="inside"
                onClose={onClose}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Domain</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <ChooseDomain />
                    </ModalBody>

                    <ModalFooter>
                        <Text color="grey" fontSize="12">
                            Click on the domains to read more
                        </Text>
                        <Spacer></Spacer>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
