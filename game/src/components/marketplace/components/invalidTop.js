import invalidImage from "../images/invalid.jpg";
import { Image, Text, VStack, Box, Center } from "@chakra-ui/react";

export default function invalidTop() {
    return (
        <Center>
            <VStack>
                <Image src={invalidImage} height="300" />
                <Text fontWeight="bold" fontSize="1.3em">
                    Something went wrong. Either you entered an invalid domain
                    name or invalid top domain (com, org).
                </Text>
            </VStack>
        </Center>
    );
}
