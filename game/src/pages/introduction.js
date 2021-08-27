/* eslint-disable max-len */
import { Container, Square, Flex, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SelectAttacker from "../components/selectAttacker";
import SelectDomain from "../components/selectDomain";

const details = [
    "You have borrowed money from a loan shark and have to pay it back soon. You have limited time to pay him. You have decided hard work is not enough to pay him back.",
    "You have decided you will try to trick people to get enough money to pay him back. You have limited money and need to invest it carefully. First you have to hire someone to do your dirty work.",
    "Placeholder for select attacker",
    "NICE! Now you have someone to suggest you what to do. Your helper will assist you with generating emails, developing pages and take care of all background work. All you have to do is instruct.",
    `The helper thinks the easiest way to get more money is to trick people into thinking we are PayPal.
    
    Your Helper can design the site but has limited skills and will require some payment. You can upgrade your site later when you hire someone with more technical skills.`,
    "Will replace this part with select site",
    "You need to buy domain for your site. A domain is a link that points to your site. Domains cost money, but there are some free alternatives out there. Domains get blacklisted when other find that you are using it to scam.",
    "Placeholder for select domain"
];

function Introduction() {
    const [index, setIndex] = useState(0);
    const description = details[index];
    return (
        <>
            <Square height="100vh">
                <Container
                    padding="2em"
                    maxW="5xl"
                    border="2px"
                    borderRadius="lg"
                    centerContent
                >
                    <Flex direction="column" alignItems="center">
                        <Text fontSize="2xl">Welcome to the game!!!</Text>
                        {(() => {
                            if (index == 2) {
                                return <SelectAttacker />;
                            } else if (index == 7) {
                                return <SelectDomain />;
                            } else return <Text>{description}</Text>;
                        })()}
                    </Flex>

                    {index != details.length - 1 ? (
                        <Button onClick={() => setIndex(index + 1)}>
                            Next
                        </Button>
                    ) : (
                        <Link to="/main">
                            <Button>Done</Button>
                        </Link>
                    )}
                </Container>
            </Square>
        </>
    );
}

export { Introduction as default };
