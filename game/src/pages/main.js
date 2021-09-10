import Timer from "../components/timer";
import {
    Box,
    Flex,
    Container,
    Button,
    Center,
    Spacer,
    Text,
    RadioGroup,
    Radio,
    Stack
} from "@chakra-ui/react";

import AttackerCard from "../components/attackers/attackerCard";
import GeneratedEmail from "../components/main/generatedEmail";
import DomainButton from "../components/main/openDomainModel";

import { useSelector } from "react-redux";

function TopBar() {
    return (
        <Container py="20px">
            <Flex direction="row" align="center" justify="space-between">
                <DomainButton />
                <Timer second="60" />
                <Button>Change Landing Page</Button>
            </Flex>
        </Container>
    );
}

function SideBar() {
    const attacker = useSelector((state) => state.attacker.value);
    const money = useSelector((state) => state.money.value);
    const domain = useSelector((state) => state.domain.value);

    return (
        <Flex direction="column" justify="space-between" borderLeft="2px solid">
            <Container>
                <Text>Money: {money}</Text>
            </Container>
            <Container maxW="fit-content">
                <Text>Current Helper:</Text>
                <AttackerCard
                    name={attacker.name}
                    efficiency={attacker.efficiency}
                    technicalSkill={attacker.technicalSkill}
                    cost={attacker.cost}
                    image={attacker.image}
                />
                <Text>{JSON.stringify(domain)}</Text>
            </Container>
            <Spacer />
            <Center>
                <GeneratedEmail />
            </Center>
        </Flex>
    );
}

function EmailType() {
    return (
        <Container>
            <Text>What kind of email do you want to compose?</Text>
            <RadioGroup defaultValue="1">
                <Stack spacing={5} direction="row">
                    <Radio
                        size="md"
                        colorScheme="green"
                        value="1"
                        backgroundColor="red.200"
                    >
                        Helpful
                    </Radio>
                    <Radio
                        size="md"
                        colorScheme="red"
                        value="2"
                        backgroundColor="red.200"
                    >
                        Threatening
                    </Radio>
                </Stack>
            </RadioGroup>
        </Container>
    );
}

function HideLink() {
    return (
        <Container>
            <Text>Hide Links?</Text>
            <RadioGroup defaultValue="1">
                <Stack spacing={5} direction="row">
                    <Radio
                        size="md"
                        colorScheme="green"
                        value="1"
                        backgroundColor="red.200"
                    >
                        No
                    </Radio>
                    <Radio
                        size="md"
                        colorScheme="red"
                        value="2"
                        backgroundColor="red.200"
                    >
                        Url Shortner
                    </Radio>
                    <Radio
                        size="md"
                        colorScheme="red"
                        value="3"
                        backgroundColor="red.200"
                    >
                        &lt;a&gt; tags
                    </Radio>
                    <Radio
                        size="md"
                        colorScheme="red"
                        value="4"
                        backgroundColor="red.200"
                    >
                        Domain Confusion
                    </Radio>
                </Stack>
            </RadioGroup>
        </Container>
    );
}

function MainContent() {
    return (
        <Flex justify="space-around" direction="column">
            <EmailType />
            <HideLink />
        </Flex>
    );
}
function MainPage() {
    return (
        <Flex justify="space-between" direction="row" minH="80vh">
            <MainContent />
            <SideBar />
        </Flex>
    );
}
function Main() {
    return (
        <Box minW="100vw" minH="100vh" overflow="hidden" px="10">
            <TopBar />
            <MainPage />
        </Box>
    );
}

export { Main as default };
