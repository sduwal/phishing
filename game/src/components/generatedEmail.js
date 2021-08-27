/* eslint-disable max-len */
/* eslint-disable react/no-children-prop */
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Container,
    Flex,
    Text,
    Input,
    Popover,
    Box,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverArrow,
    PopoverCloseButton,
    PopoverBody
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/hooks";

function Header() {
    return <ModalHeader>Generated Email</ModalHeader>;
}

function Footer({ onClose }) {
    return (
        <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
            </Button>
        </ModalFooter>
    );
}

function EmailTop() {
    return (
        <>
            <Flex direction="row" alignContent="center" alignItems="center">
                <Text fontWeight="bold">To:&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                <Input value="sarose012@gmail.com" mx="15px" isReadOnly />
            </Flex>
            <Flex
                direction="row"
                alignContent="center"
                alignItems="center"
                my="10px"
            >
                <Text fontWeight="bold">From:</Text>
                <Input value="sarose012@gmail.com" mx="15px" isReadOnly />
            </Flex>
            <Flex
                direction="row"
                alignContent="center"
                alignItems="center"
                my="10px"
            >
                <Text fontWeight="bold">Subject:</Text>
                <Input
                    value="RE:IMMEDIATE CONTRACT/INHERITANCE PAYMENT"
                    mx="15px"
                    isReadOnly
                />
            </Flex>
        </>
    );
}
function Content({ onClose }) {
    return (
        <ModalContent minW="70vw">
            <Header />
            <ModalCloseButton />
            <ModalBody>
                Here is what your helper has sent. Hover over the boxes to see
                what he did.
                <Container
                    border="2px solid"
                    px="15px"
                    py="10px"
                    my="10px"
                    minW="60vw"
                >
                    <EmailTop />
                    <Flex
                        direction="column"
                        alignContent="center"
                        alignItems="start"
                        my="10px"
                    >
                        <Text fontWeight="bold">Body:</Text>
                        <Box>
                            <CreatePopUp
                                display={`South Africa Reserve Bank
                    370 Helen Joseph Street,
                    Pretoria, 002, Sourth Africa`}
                            />
                        </Box>
                    </Flex>
                </Container>
            </ModalBody>
            <Footer onClose={onClose} />
        </ModalContent>
    );
}

function CreatePopUp({ display, explain }) {
    return (
        <Popover trigger="click">
            <PopoverTrigger>
                {/* <Text color="red.400">display.split('\n").map</Text> */}
            </PopoverTrigger>
            <PopoverContent bg="tomato" color="white">
                <PopoverHeader fontWeight="semibold">Address</PopoverHeader>
                <PopoverArrow bg="pink.500" />
                <PopoverCloseButton bg="purple.500" />
                <PopoverBody>
                    Providing a random address, so that the email looks
                    official. Official emails usually have their address to
                    start the email.
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
}

function GeneratedEmail() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <Content onClose={onClose} />
            </Modal>
        </>
    );
}

export { GeneratedEmail as default };
