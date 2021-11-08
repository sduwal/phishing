import invalidImage from "../images/invalid.jpg";
import { Image, Text, VStack, Box, Center } from "@chakra-ui/react";

export default function invalidTop() {
    return (
        <Center>
            <VStack>
                <Image src={invalidImage} height="300" />
                <Text fontWeight="bold" fontSize="1.3em">
                    The top level domain you entered is incorrect. Examples:
                    com, org, gov
                </Text>
            </VStack>
        </Center>
    );
}
