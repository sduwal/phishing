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
} from "@chakra-ui/react";

import React, { useState } from "react";

export default function LinkHiding() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    function closeModal() {
        setIndex(0);
        onClose();
    }

    function insertTemplate() {
        console.log("Insert a template here");
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
            <Image src="https://www.itgovernance.co.uk/blog/wp-content/uploads/2019/06/netflix.jpg"></Image>
        </>,
        <>
            <Text>
                People will generally click on links if they see familiar
                context such as:
            </Text>
            <Image src="https://cloudblogs.microsoft.com/uploads/prod/2018/01/tech-support-scams-from-email-2.png" />
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
