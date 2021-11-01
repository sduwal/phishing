import yayImage from "../images/yay.gif";
import { Text, Center, Image, VStack, Button } from "@chakra-ui/react";
import determineCost from "../utils/similarity";

export default function domainAvailable({ name }) {
    const cost = determineCost(name);
    return (
        <Center>
            <VStack>
                <Image src={yayImage} />
                <Text fontWeight="semibold" fontStyle="italic">
                    Your domain is available
                </Text>
                <Text fontStyle="bold" fontSize="2em">
                    {name}
                </Text>

                <VStack spacing={0}>
                    <Button background="green" color="white" p="6">
                        <Text fontSize="1.2em">Get It</Text>
                    </Button>
                    <Text opacity={0.5}>{`is available for ${cost}`}</Text>
                </VStack>
            </VStack>
        </Center>
    );
}
