import incompleteImage from "../images/incomplete.jpg";
import { Image, Text, Center, VStack } from "@chakra-ui/react";

export default function incomplete() {
    return (
        <Center>
            <VStack>
                <Image src={incompleteImage} height="250" />
                <Text fontWeight="bold" fontSize="2em">
                    Enter a complete domain name
                </Text>
            </VStack>
        </Center>
    );
}
