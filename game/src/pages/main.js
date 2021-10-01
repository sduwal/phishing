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
    Stack,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton
} from "@chakra-ui/react";

import AttackerCard from "../components/attackers/attackerCard";
import GeneratedEmail from "../components/main/generatedEmail";
import DomainButton from "../components/main/openDomainModel";

import { useSelector } from "react-redux";
import ChangeAttackerButton from "../components/main/openChangeAttacker";

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
            <Container mx="10px">
                <ChangeAttackerButton />
            </Container>
            <Spacer />
            <Center>
                <GeneratedEmail />
            </Center>
        </Flex>
    );
}

function CreateRadioPopOver(props) {
    return (
        <Popover trigger="hover" matchWidth="true">
            <PopoverTrigger>
                <Box width="max-content">
                    <Radio
                        size="md"
                        colorScheme="green"
                        value={props.value}
                        backgroundColor="red.200"
                    >
                        {props.display}
                    </Radio>
                </Box>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverBody>
                    <Center>
                        <Text>{props.message}</Text>
                    </Center>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
}

function EmailType() {
    return (
        <Container>
            <Text>What kind of email do you want to compose?</Text>
            <RadioGroup defaultValue="1">
                <Stack spacing={5} direction="row">
                    <CreateRadioPopOver
                        display="Helpful"
                        message="Create a email  that sounds helpful"
                        value="1"
                    />
                    <CreateRadioPopOver
                        display="Threatening"
                        message="Create a threatening email"
                        value="2"
                    />
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
                    <CreateRadioPopOver
                        display="No"
                        message="Displays the link as it is"
                        value="1"
                    />
                    <CreateRadioPopOver
                        display="URL Shortner"
                        message="Use a URL shortner to hide the link"
                        value="2"
                    />

                    <CreateRadioPopOver
                        display="Use <a> tag"
                        message="Use the HTML <a> tag to hide the link"
                        value="3"
                    />

                    <CreateRadioPopOver
                        display="Domain Confusion"
                        message="Provide a link that will redirect to our site"
                        value="2"
                    />
                </Stack>
            </RadioGroup>
        </Container>
    );
}

function ResearchOrganization() {
    return (
        <Container>
            <Text>Research and generate email targeted at a group?</Text>
            <RadioGroup defaultValue="1">
                <Stack spacing={5} direction="row">
                    <Radio
                        size="md"
                        colorScheme="red"
                        value="1"
                        backgroundColor="red.200"
                    >
                        Yes
                    </Radio>
                    <Radio
                        size="md"
                        colorScheme="red"
                        value="2"
                        backgroundColor="red.200"
                    >
                        No
                    </Radio>
                </Stack>
            </RadioGroup>
        </Container>
    );
}

function ResearchIndividual() {
    return (
        <Container>
            <Text>Generate a targeted email?</Text>
            <RadioGroup defaultValue="1">
                <Stack spacing={5} direction="row">
                    <Radio
                        size="md"
                        colorScheme="red"
                        value="1"
                        backgroundColor="red.200"
                    >
                        Yes
                    </Radio>
                    <Radio
                        size="md"
                        colorScheme="red"
                        value="2"
                        backgroundColor="red.200"
                    >
                        No
                    </Radio>
                </Stack>
            </RadioGroup>
        </Container>
    );
}

function MainContent() {
    const attacker = useSelector((state) => state.attacker.value);

    return (
        <Flex justify="space-evenly" direction="column">
            <EmailType />
            <HideLink />
            {attacker.level > 1 ? <ResearchOrganization /> : ""}
            {attacker.level > 2 ? <ResearchIndividual /> : ""}
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
