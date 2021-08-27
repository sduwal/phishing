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

function GeneratedEmail() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent minW="70vw">
                    <ModalHeader>GeneratedEmail</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Here is what your helper has sent. Hover over the boxes
                        to see what he did.
                        <Container
                            border="2px solid"
                            px="15px"
                            py="10px"
                            my="10px"
                            minW="60vw"
                        >
                            <Flex
                                direction="row"
                                alignContent="center"
                                alignItems="center"
                            >
                                <Text fontWeight="bold">
                                    To:&nbsp;&nbsp;&nbsp;&nbsp;
                                </Text>
                                <Input
                                    value="sarose012@gmail.com"
                                    mx="15px"
                                    isReadOnly
                                />
                            </Flex>
                            <Flex
                                direction="row"
                                alignContent="center"
                                alignItems="center"
                                my="10px"
                            >
                                <Text fontWeight="bold">From:</Text>
                                <Input
                                    value="sarose012@gmail.com"
                                    mx="15px"
                                    isReadOnly
                                />
                            </Flex>
                            <Flex
                                direction="column"
                                alignContent="center"
                                alignItems="start"
                                my="10px"
                            >
                                <Text fontWeight="bold">Body:</Text>
                                <Box>
                                    <Popover trigger="click">
                                        <PopoverTrigger>
                                            <Box
                                                tabIndex="0"
                                                role="button"
                                                aria-label="Some box"
                                                p={5}
                                                w="120px"
                                                bg="gray.300"
                                                children="Hover"
                                            />
                                        </PopoverTrigger>
                                        <PopoverContent
                                            bg="tomato"
                                            color="white"
                                        >
                                            <PopoverHeader fontWeight="semibold">
                                                Customization
                                            </PopoverHeader>
                                            <PopoverArrow bg="pink.500" />
                                            <PopoverCloseButton bg="purple.500" />
                                            <PopoverBody>
                                                Tadaa!! The arrow color and
                                                background color is customized.
                                                Check the props for each
                                                component.
                                            </PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                    <Popover trigger="click">
                                        <PopoverTrigger>
                                            <Box
                                                tabIndex="0"
                                                role="button"
                                                aria-label="Some box"
                                                p={5}
                                                w="120px"
                                                bg="gray.300"
                                                children="Hover"
                                            />
                                        </PopoverTrigger>
                                        <PopoverContent
                                            bg="tomato"
                                            color="white"
                                        >
                                            <PopoverHeader fontWeight="semibold">
                                                Customization
                                            </PopoverHeader>
                                            <PopoverArrow bg="pink.500" />
                                            <PopoverCloseButton bg="purple.500" />
                                            <PopoverBody>
                                                Tadaa!! The arrow color and
                                                background color is customized.
                                                Check the props for each
                                                component.
                                            </PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                </Box>
                            </Flex>
                        </Container>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export { GeneratedEmail as default };
