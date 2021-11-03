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
        <ModalContent>
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
                    minW="90%"
                >
                    <EmailTop />
                    <Flex direction="column">
                        <Text fontWeight="bold">Body:</Text>
                        <Box>
                            <CreatePopUp
                                title="Address"
                                display={
                                    "South Africa Reserve Bank\n370 Helen Joseph Street,\nPretoria, 002, Sourth Africa"
                                }
                                explain={
                                    "Providing a random address, so that the email looks official. Official emails usually have their address to start the email."
                                }
                            />
                            <CreatePopUp
                                display={`Dear Customer,\n
As part of our security measures, we regularly screen activity in the PayPal system. We are contacting you after noticing an issue on your account.

We requested information from you for the following reason:

Our system detected unusual activity on your PayPal account.

Case ID Number: PP-316-510-658

Please click the link below and log in as soon as possible:

https://www.paypal.com/cgi-bin/webscr?cmd=_login-run

Once you log in, you will be provided with steps to restore your account access. We appreciate your understanding as we work to ensure account safety.

In accordance with PayPal's User Agreement, your account access will remain limited until the issue has been resolved. Unfortunately, if access to your account remains limited for an extended period of time, it may result in further limitations or eventual account closure. We encourage you to log in to your PayPal account as soon as possible to help avoid this.

We thank you for your prompt attention to this matter. Please understand that this is a security measure intended to help protect you and your account. We apologize for any inconvenience.

Sincerely,

PayPal Account Review Department

----------------------------------------------------------------

PayPal Email ID PP658`}
                            ></CreatePopUp>
                        </Box>
                    </Flex>
                </Container>
            </ModalBody>
            <Footer onClose={onClose} />
        </ModalContent>
    );
}

function CreatePopUp({ title, display, explain }) {
    return (
        <Popover trigger="click">
            <PopoverTrigger>
                <Box>
                    {display.split("\n").map((item, index) => (
                        <Text key={index}>{item}</Text>
                    ))}
                </Box>
            </PopoverTrigger>
            <PopoverContent bg="tomato" color="white">
                <PopoverHeader fontWeight="semibold">{title}</PopoverHeader>
                <PopoverArrow bg="pink.500" />
                <PopoverCloseButton bg="purple.500" />
                <PopoverBody>{explain}</PopoverBody>
            </PopoverContent>
        </Popover>
    );
}

function GeneratedEmail() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button onClick={onOpen}>Generate Email`</Button>

            <Modal
                isOpen={isOpen}
                size="full"
                scrollBehavior="inside"
                onClose={onClose}
                isCentered
            >
                <ModalOverlay />
                <Content onClose={onClose} />
            </Modal>
        </>
    );
}

export { GeneratedEmail as default };
