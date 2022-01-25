import { AddIcon } from "@chakra-ui/icons";
import {
    Text,
    Box,
    Flex,
    Spacer,
    HStack,
    Divider,
    IconButton
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import {
    changeDomain,
    clearSubDomains,
    changeActiveDomain
} from "@store/domain";
import { decrementByAmount } from "@store/status";

export default function domainCard({ link, price, index }) {
    const cost = Math.round(50 * Math.sqrt(10 - index)) * 100;
    const money = useSelector((state) => state.status.money);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(changeDomain(name));
        dispatch(clearSubDomains());
        dispatch(decrementByAmount(cost));
        dispatch(changeActiveDomain(name));
        onClick();
        toast.success("Domain has been changed successfully");
    };

    return (
        <Box
            // border="2px solid black"
            width="70vw"
            rounded="5px"
            p="3"
            backgroundColor="grey.100"
        >
            <Flex direction="row" alignItems="center">
                <Text fontWeight="semibold" fontSize="1.1em">
                    {link}
                </Text>
                <Spacer />

                <HStack spacing={0}>
                    <Text fontWeight="bold" fontSize="1.2em" color="green">
                        $
                    </Text>
                    <Text fontWeight="bold" fontSize="1.1em" pl="1">
                        {cost.toLocaleString()}
                    </Text>
                </HStack>
                <IconButton
                    px={3}
                    mx={3}
                    my={2}
                    icon={<AddIcon />}
                    aria-label="Change Domain"
                    isDisabled={money < cost}
                    onClick={handleClick}
                    _disabled={{
                        backgroundColor: "grey",
                        color: "black",
                        cursor: "not-allowed"
                    }}
                />
            </Flex>
            <Divider />
        </Box>
    );
}
