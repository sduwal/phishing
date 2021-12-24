import yayImage from "../images/yay.gif";
import { Text, Center, Image, VStack, Button } from "@chakra-ui/react";
import determineCost from "../utils/similarity";

import { useDispatch, useSelector } from "react-redux";
import { changeDomain, clearSubDomains } from "../../../store/domain";
import { toast } from "react-toastify";

export default function domainAvailable({ name }) {
    const dispatch = useDispatch();
    const domain = useSelector((state) => state.domain.name);
    const cost = determineCost(name);

    const handleClick = () => {
        dispatch(changeDomain(name));
        dispatch(clearSubDomains());
        toast.success("Domain has been changed successfully");
    };
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
                    <Button
                        background="green"
                        color="white"
                        p="6"
                        onClick={handleClick}
                        isDisabled={domain === name}
                    >
                        <Text fontSize="1.2em">Get It</Text>
                    </Button>
                    <Text opacity={0.5}>{`is available for ${cost}`}</Text>
                </VStack>
            </VStack>
        </Center>
    );
}
