import DomainCard from "./domainCard";
import { Accordion, Container } from "@chakra-ui/react";
import domains from "./domains";
// import { useSelector } from "react-redux";

function ChooseDomain() {
    domains.sort((a, b) => a.price - b.price);

    const data = domains.map((domain) => {
        return (
            <DomainCard
                key={domain.name}
                name={domain.name}
                price={domain.price}
                description={domain.description}
            />
        );
    });
    return (
        <Container minW="xl">
            <Accordion allowToggle>{data}</Accordion>
        </Container>
    );
}

export { ChooseDomain as default };
