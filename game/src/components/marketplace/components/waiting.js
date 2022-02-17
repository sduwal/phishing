import { VStack, Center, Text, Image, Box } from "@chakra-ui/react";
import waitingImage from "../images/waiting.jpg";

function waiting() {
    return (
        <Center mt="20">
            <VStack>
                <Image src={waitingImage} />
                <Text fontWeight="bold" fontSize="1.2em" py="4">
                    Please submit the name to see available domains.
                </Text>
                <Box fontStyle="italic" opacity={0.7} color={"grey"}>
                    <Text>
                        HINT: Domain that look similar to your target site will
                        perform better, but might cost more.
                    </Text>
                    <Text>REMEMBER: We are impersonating PayPal.</Text>
                    {/* <Text>
                        REMEMBER: Subdomains are free and might perform really
                        well if used properly. You can add any text as subdomain
                        (Sub domains can be added through the main page).
                    </Text> */}
                </Box>
            </VStack>
        </Center>
    );
}

export { waiting as default };
