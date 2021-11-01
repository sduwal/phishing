import { Text, Image, Center, VStack } from "@chakra-ui/react";
import { topLevel } from "../data/toplevel";
import { domains } from "../data/topDomains";

import notAvailable from "../images/notAvailable.png";
import DomainCard from "./domainCard";

function domainTaken({ domainName }) {
    console.log(domainName);
    const alternatives = getAlternateDomain(domainName.split(".")[0]);

    return (
        <>
            <Center>
                <VStack>
                    <Image src={notAvailable} height="100" />
                    <Text fontWeight="bold" fontSize="1.5em">
                        {domainName} is already taken
                    </Text>

                    <Text fontSize="1.2em">
                        Consider the following alternatives with different
                        endings
                    </Text>
                    {alternatives.map((alternative) => (
                        <DomainCard key={alternative} link={alternative} />
                    ))}
                </VStack>
            </Center>
        </>
    );
}

function getAlternateDomain(name) {
    let index = 0;
    const alternatives = [];

    for (const [level, count] of Object.entries(topLevel)) {
        if (index >= 10) break;

        const tempDomain = `${name}.${level}`;
        if (!domains.includes(tempDomain)) {
            alternatives.push(tempDomain);
            index++;
        }
    }
    return alternatives;
}

export { domainTaken as default };
