/* eslint-disable max-len */
import {
    Box,
    Modal,
    Button,
    HStack,
    Text,
    ModalOverlay,
    Icon,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { useState } from "react";

import { features } from "../data/features";

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function WebsiteTag() {
    const [active, setActive] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            {Object.keys(features).map((name) => (
                <>
                    <Box
                        width="fit-content"
                        height="fit-content"
                        background={active ? features[name]["color"] : "grey"}
                        px={2}
                        py={1}
                        m={0}
                        rounded={10}
                        onClick={onOpen}
                        _hover={{
                            cursor: "pointer"
                        }}
                        alignContent="center"
                    >
                        <HStack>
                            <Text>{name}</Text>
                            <Icon as={features[name]["icon"]} />
                        </HStack>
                    </Box>
                    <Modal isOpen={isOpen} onClose={onClose} isCentered>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>{capitalize(name)}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>{features[name]["tip"]}</ModalBody>

                            <ModalFooter>
                                <Button
                                    colorScheme="blue"
                                    mr={3}
                                    onClick={() => {
                                        setActive(true);
                                        onClose();
                                    }}
                                >
                                    Add to page
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </>
            ))}
        </>
    );
}

export { WebsiteTag as default };
