import yayImage from "../images/yay.gif";
import { Text, Center, Image, VStack, Button } from "@chakra-ui/react";
import determineCost from "../utils/similarity";

import { useDispatch, useSelector } from "react-redux";
import {
    changeDomain,
    clearSubDomains,
    changeActiveDomain
} from "../../../store/domain";
import { toast } from "react-toastify";
import { decrementByAmount } from "../../../store/status";

export default function domainAvailable({ name, onClick }) {
    const dispatch = useDispatch();
    const domain = useSelector((state) => state.domain.name);
    const money = useSelector((state) => state.status.money);
    const cost = determineCost(name);

    const handleClick = () => {
        dispatch(changeDomain(name));
        dispatch(changeActiveDomain(name));
        dispatch(clearSubDomains());
        dispatch(decrementByAmount(cost));
        onClick();
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
                        _disabled={{
                            background: "grey",
                            color: "black",
                            cursor: "not-allowed"
                        }}
                        isDisabled={domain === name || money < cost}
                    >
                        <Text fontSize="1.2em">Get It</Text>
                    </Button>
                    <Text opacity={0.5}>{`is available for ${cost}`}</Text>
                </VStack>
            </VStack>
        </Center>
    );
}
