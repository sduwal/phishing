import { VStack, Center, Text, Image } from "@chakra-ui/react";
import waitingImage from "../images/waiting.jpg";

function waiting() {
    return (
        <Center mt="20">
            <VStack>
                <Image src={waitingImage} />
                <Text fontWeight="bold" fontSize="1.2em" py="4">
                    Please submit the name to see available domains.
                </Text>
            </VStack>
        </Center>
    );
}

export { waiting as default };
