import DomainCard from "./domainCard";
import { Accordion } from "@chakra-ui/react";

function ChooseDomain() {
    return (
        <Accordion defaultIndex={[0]} allowToggle>
            <DomainCard
                name="paypal.com"
                price="10"
                description="This is a place holder. we love placeholders"
            />
        </Accordion>
    );
}

export { ChooseDomain as default };
