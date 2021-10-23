import { Text, Container, Stack, Radio, RadioGroup } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeEmail, spoofEmail } from "../../store/email";

import getRandomEmail from "../../model/emailData";

function Questions() {
    const email = useSelector((state) => state.email.value);
    const dispatch = useDispatch();

    const [displayQuestion, setDisplayQuestion] = useState({
        targeted: true,
        group: false,
        general: false,
        link: false,
        spoof: false
    });
    return (
        <>
            <Text>Questions</Text>
            <Container>
                <Stack spacing={5}>
                    {displayQuestion.targeted ? (
                        <TargetIndividual
                            displayQuestion={displayQuestion}
                            setDisplayQuestion={setDisplayQuestion}
                        />
                    ) : (
                        <></>
                    )}
                    {displayQuestion.group ? <TargetAnOrganization /> : <></>}
                    {displayQuestion.link ? (
                        <LinkHiding
                            displayQuestion={displayQuestion}
                            setDisplayQuestion={setDisplayQuestion}
                        />
                    ) : (
                        <></>
                    )}
                    {displayQuestion.spoof ? <SpoofSender /> : <></>}
                </Stack>
            </Container>
        </>
    );
}

function SpoofSender(props) {
    const [value, setValue] = useState("normal");
    const email = useSelector((state) => state.email.value);
    const dispatch = useDispatch();

    const current = email.from;

    function change(value) {
        if (value === "true") {
            dispatch(spoofEmail({ ...email, from: "saroj12231@gmail.com" }));
        } else dispatch(spoofEmail({ ...email, from: "saroj12231@gmail.com" }));

        setValue(value);
        // props.setDisplayQuestion({
        //     ...props.displayQuestion,
        //     spoof: false
        // });
    }

    return (
        <>
            <Text>Spoof?</Text>
            <RadioGroup value={value} onChange={(e) => change(e)}>
                <Stack>
                    <Radio value="true">Yes</Radio>
                    <Radio value="false">No</Radio>
                </Stack>
            </RadioGroup>
        </>
    );
}

function LinkHiding(props) {
    const [value, setValue] = useState("normal");
    const email = useSelector((state) => state.email.value);
    const dispatch = useDispatch();

    function change(value) {
        setValue(value);
        dispatch(changeEmail({ ...email, linkType: value }));
        props.setDisplayQuestion({
            ...props.displayQuestion,
            link: true,
            spoof: false
        });
    }
    return (
        <>
            <Text>Hide the link</Text>
            <RadioGroup value={value} onChange={(e) => change(e)}>
                <Stack>
                    <Radio value="normal">No link hiding</Radio>
                    <Radio value="shortner">Shortner</Radio>
                    <Radio value="confused">Confusion</Radio>
                    <Radio value="hidden">Hidden</Radio>
                </Stack>
            </RadioGroup>
        </>
    );
}
function TargetAnOrganization() {
    const [value, setValue] = useState("");
    function change(value) {
        setValue(value);
        console.log("this is just here");
        if (value) {
            console.log("THis is value");
        } else {
            console.log("this is no");
        }
    }
    return (
        <>
            <Text>Research and generate email targeted at a group?</Text>
            <RadioGroup onChange={(e) => change(e.target.value)} value={value}>
                <Stack spacing={5} direction="row">
                    <Radio
                        size="md"
                        colorScheme="red"
                        value="true"
                        backgroundColor="red.200"
                    >
                        Yes
                    </Radio>
                    <Radio
                        size="md"
                        colorScheme="red"
                        value="false"
                        backgroundColor="red.200"
                    >
                        No
                    </Radio>
                </Stack>
            </RadioGroup>
        </>
    );
}

function TargetIndividual(props) {
    const dispatch = useDispatch();

    function change(value) {
        if (value === "1") {
            dispatch(
                changeEmail({ ...getRandomEmail(true), linkType: "normal" })
            );
            props.setDisplayQuestion({
                ...props.displayQuestion,
                targeted: false,
                link: true
            });
        } else {
            console.log("this is no");
        }
    }
    return (
        <>
            <Text>Research and generate email targeted at a individual?</Text>
            <RadioGroup onChange={(e) => change(e)}>
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
        </>
    );
}

export { Questions as default };
