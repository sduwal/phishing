import { Box, Wrap, Text, Divider } from "@chakra-ui/react";

import WebsiteTag from "./components/tags";

export default function LandingPage() {
    return (
        <Box
            overflowY="scroll"
            p={5}
            border={"2px solid black"}
            m={2}
            rounded={10}
            sx={{
                "::-webkit-scrollbar": {
                    width: "0",
                    background: "transparent"
                }
            }}
        >
            <Text fontWeight="bold" fontSize="2em">
                Domain and Web pages
            </Text>
            <Divider borderColor="black" size="4" />
            <Box border="1px solid black" width="100%" px={5} py={3} mt={3}>
                <Text fontStyle="italic">www.google.com</Text>
                <Wrap spacing={2} mt="4" maxW="100%">
                    <WebsiteTag />
                </Wrap>
            </Box>
            <Box border="1px solid black" width="100%" px={5} py={3} mt={3}>
                <Text fontStyle="italic">www.facebook.com</Text>
                <Wrap spacing={2} mt="4" maxW="100%">
                    <WebsiteTag />
                </Wrap>
            </Box>
            <Box border="1px solid black" width="100%" px={5} py={3} mt={3}>
                <Text fontStyle="italic">www.microsoft.com</Text>
                <Wrap spacing={2} mt="4" maxW="100%">
                    <WebsiteTag />
                </Wrap>
            </Box>
            <Box border="1px solid black" width="100%" px={5} py={3} mt={3}>
                <Text fontStyle="italic">www.google.com</Text>
                <Wrap spacing={2} mt="4" maxW="100%">
                    <WebsiteTag />
                </Wrap>
            </Box>
            <Box border="1px solid black" width="100%" px={5} py={3} mt={3}>
                <Text fontStyle="italic">www.google.com</Text>
                <Wrap spacing={2} mt="4" maxW="100%">
                    <WebsiteTag />
                </Wrap>
            </Box>
            <Box border="1px solid black" width="100%" px={5} py={3} mt={3}>
                <Text fontStyle="italic">www.google.com</Text>
                <Wrap spacing={2} mt="4" maxW="100%">
                    <WebsiteTag />
                </Wrap>
            </Box>
            <Box border="1px solid black" width="100%" px={5} py={3} mt={3}>
                <Text fontStyle="italic">www.google.com</Text>
                <Wrap spacing={2} mt="4" maxW="100%">
                    <WebsiteTag />
                </Wrap>
            </Box>
            <Box border="1px solid black" width="100%" px={5} py={3} mt={3}>
                <Text fontStyle="italic">www.google.com</Text>
                <Wrap spacing={2} mt="4" maxW="100%">
                    <WebsiteTag />
                </Wrap>
            </Box>
            <Box border="1px solid black" width="100%" px={5} py={3} mt={3}>
                <Text fontStyle="italic">www.google.com</Text>
                <Wrap spacing={2} mt="4" maxW="100%">
                    <WebsiteTag />
                </Wrap>
            </Box>
            <Box border="1px solid black" width="100%" px={5} py={3} mt={3}>
                <Text fontStyle="italic">www.google.com</Text>
                <Wrap spacing={2} mt="4" maxW="100%">
                    <WebsiteTag />
                </Wrap>
            </Box>
        </Box>
    );
}
