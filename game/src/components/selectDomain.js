import { Text } from "@chakra-ui/react";
import DomainCard from "./domainCard";

function SelectDomain() {
    return (
        <>
            <DomainCard></DomainCard>
            <Text>
                {" "}
                The closer your domain looks to the actual thing, the more
                efficient it will be.
            </Text>
        </>
    );
}

export { SelectDomain as default };
