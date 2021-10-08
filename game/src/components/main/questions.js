import { Text, Container, Stack, Radio, RadioGroup } from "@chakra-ui/react";
import { useState } from "react";

function Questions() {
    const [email, setEmail] = useState("");
    return (
        <>
            <Text>{JSON.stringify(email)}</Text>
            <Text>Questions</Text>
            <Container>
                <Text>Research and generate email targeted at a group?</Text>
                <RadioGroup onChange={() => setEmail({ weqw: "email" })}>
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
        </>
    );
}

export { Questions as default };
