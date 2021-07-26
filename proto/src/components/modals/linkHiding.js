import {
    Button,
    Modal,
    ModalFooter,
    ModalHeader,
    ModalContent,
    ModalOverlay,
    ModalCloseButton,
    ModalBody,
    useDisclosure,
    Text,
    Link,
    Spacer,
    Image,
    Box,
    Heading,
} from "@chakra-ui/react";

import React, { useContext, useState } from "react";
import { EmailContext } from "../../AppState";

export default function LinkHiding() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [email, dispatch] = useContext(EmailContext);
    function closeModal() {
        setIndex(0);
        onClose();
    }

    function insertTemplate() {
        dispatch({
            type: "CHANGE",
            email: {
                subject: "Scheduled Home Delivery Problems",
                email: `
                        <p>
                            Unfortunately, the delivery of your order <a>COS-0077945599</a> was canceled since thespecified address of the recipient was not correct. You are recommended to complete <a href="https://google.com">this form</a> and send it back with yourreply to us.
                        </p>

                        <p>
                            Please do this within the period of one week - if wedon't get your timely reply you will be paid your money back less 21% since your order was booked for Christmas.
                        </p>
                    `,
            },
        });
        closeModal();
    }

    const [index, setIndex] = useState(0);
    const description = [
        <>
            <Text>
                Hiding links behind text are common approaches to get users to
                click on it. Here is an example of link being hidden behind the
                text.{" "}
                <Link href="https://google.com" color="blue.500">
                    The link is hidden behind this text.{" "}
                </Link>
                People might click on the link without knowing where it leads.
            </Text>
        </>,
        <>
            <Text>
                Here is an example of some creative ways of hiding link. You can
                hide links behind images, buttons, or even text.
            </Text>
            <Image
                maxH="500px"
                src="https://www.itgovernance.co.uk/blog/wp-content/uploads/2019/06/netflix.jpg"
            ></Image>
        </>,
        <>
            <Text>
                People will generally click on links if they see familiar
                context such as:
            </Text>
            <Image
                maxH="500px"
                src="https://cloudblogs.microsoft.com/uploads/prod/2018/01/tech-support-scams-from-email-2.png"
            />
        </>,
        <>
            <Box border="1px" borderRadius="10" padding="2">
                <>
                    <Heading as="h6">Template</Heading>

                    <Box
                        border="1px"
                        borderRadius="10"
                        marginBottom="10"
                        padding="5"
                    >
                        <Text>
                            Unfortunately, the delivery of your order{" "}
                            <Link color="blue">COS-0077945599</Link> was
                            canceled since the specified address of the
                            recipient was not correct. You are recommended to
                            complete{" "}
                            <Link href="https://google.com" color="blue">
                                this form
                            </Link>{" "}
                            and send it back with your reply to us.
                        </Text>
                        <Text>
                            Please do this within the period of one week - if we
                            don't get your timely reply you will be paid your
                            money back less 21% since your order was booked for
                            Christmas.
                        </Text>
                    </Box>
                </>
                <Text
                    border="1px"
                    borderRadius="10"
                    background="blue.100"
                    padding="2"
                >
                    Unfortunately, the delivery of your order{" "}
                    <Link color="blue">COS-0077945599</Link> was canceled since
                    the specified address of the recipient was not correct. You
                    are recommended to complete{" "}
                    <Link href="https://google.com" color="blue">
                        this form
                    </Link>{" "}
                    and send it back with your reply to us.
                </Text>
                <Heading as="h5">What this does?</Heading>
                <Text marginBottom="2">
                    This make it seems like the user delivery was cancelled. If
                    the user had an actual delivery the user might have clicked
                    this link.{" "}
                </Text>
                <Text
                    border="1px"
                    borderRadius="10"
                    background="red.100"
                    padding="2"
                >
                    Please do this within the period of one week - if we don't
                    get your timely reply you will be paid your money back less
                    21% since your order was booked for Christmas.
                </Text>
                <Heading as="h6">What this does?</Heading>
                <Text marginBottom="2">
                    Create a sense of urgency and danger.
                </Text>
            </Box>
        </>,
    ];
    return (
        <>
            <Button
                onClick={onOpen}
                variant="outline"
                colorScheme="teal"
                my="4px"
                size="sm"
            >
                Link Hiding
            </Button>

            <Modal
                isOpen={isOpen}
                onClose={closeModal}
                isCentered
                motionPreset="scale"
                width="500px"
                // maxWidth="60%"
                scrollBehavior="inside"
            >
                <ModalOverlay />
                <ModalContent height="70vh" maxWidth="60%" overflow="auto">
                    <ModalHeader>Hiding Links</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{description[index]}</ModalBody>

                    <ModalFooter>
                        <Text>
                            {index + 1}/{description.length}
                        </Text>
                        <Spacer />
                        {index === description.length - 1 ? (
                            <>
                                <Button
                                    colorScheme="blackAlpha"
                                    mx={"3px"}
                                    onClick={insertTemplate}
                                >
                                    {" "}
                                    Insert a template
                                </Button>

                                <Button
                                    colorScheme="blue"
                                    mx={3}
                                    onClick={closeModal}
                                >
                                    Close
                                </Button>
                            </>
                        ) : (
                            <Button
                                colorScheme="blue"
                                onClick={() => setIndex(index + 1)}
                            >
                                See more
                            </Button>
                        )}
                        {/* <Button variant="ghost">Secondary Action</Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
