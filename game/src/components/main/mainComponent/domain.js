import {
    Box,
    Text,
    Center,
    Heading,
    Divider,
    HStack,
    Button,
    Input,
    FormControl,
    FormErrorMessage,
    InputGroup,
    InputRightAddon
} from "@chakra-ui/react";

import { Formik, Field, Form } from "formik";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSubDomain } from "../../../store/domain";

const description =
    "Regular domains are your standard URLs like splashthat.com or splashthat.events. Subdomains are a unique URL that lives on your purchased domain as an extension in front of your regular domain like support.splashthat.com or blockparty.splashthat.com. Subdomains can be used to navaigate to different sections of the website.";

function SubDomainAdd({ domain }) {
    const subdomains = useSelector((state) => state.domain.subdomains);
    const dispatch = useDispatch();

    const ref = useRef(null);

    const validate = (value) => {
        if (value.split(" ").length > 1) {
            return "Subdomain cannot contain spaces";
        }

        if (!/^[a-zA-Z0-9-\.]*$/.test(value)) {
            return "Domain can only contain letters, numbers and dashes";
        }

        const subDomain = value + "." + domain;
        let error;

        if (subdomains.includes(subDomain)) {
            return "Subdomain already exists";
        }

        return error;
    };

    return (
        <Formik
            innerRef={ref}
            initialValues={{ subdomain: "" }}
            onSubmit={(values, actions) => {
                actions.setSubmitting(false);
                dispatch(addSubDomain(values.subdomain + "." + domain));
                ref.current.resetForm();
            }}
        >
            {(props) => (
                <Form>
                    <Center>
                        <HStack spacing={10} align={"top"} maxW="60%">
                            <Field name="subdomain" validate={validate}>
                                {({ field, form }) => (
                                    <FormControl
                                        isInvalid={
                                            form.errors.subdomain &&
                                            form.touched.subdomain
                                        }
                                    >
                                        <InputGroup>
                                            <Input
                                                {...field}
                                                id="subdomain"
                                                type="text"
                                                placeholder="xyz"
                                                minW="70%"
                                                background={"white"}
                                            />
                                            <InputRightAddon
                                                pointerEvents="none"
                                                color="gray.400"
                                                fontSize="1.2em"
                                            >
                                                {domain}
                                            </InputRightAddon>
                                        </InputGroup>
                                        <FormErrorMessage>
                                            {form.errors.subdomain}
                                        </FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Button
                                colorScheme="teal"
                                isLoading={props.isSubmitting}
                                type="submit"
                                isDisabled={
                                    !ref.current ||
                                    ref.current.values.subdomain === ""
                                }
                                px={10}
                            >
                                Add Sub Domain
                            </Button>
                        </HStack>
                    </Center>
                </Form>
            )}
        </Formik>
    );
}

function Domain() {
    const domain = useSelector((state) => state.domain);
    const subdomains = useSelector((state) => state.domain.subdomains);

    return (
        <Box
            m={5}
            p={5}
            border="2px solid black"
            rounded="2xl"
            // width="90%"
            minH="40vh"
        >
            <Center>
                <Heading>Domain</Heading>
            </Center>
            <Text fontSize={"0.9em"} opacity={"0.8"}>
                {description}
            </Text>
            <Divider my={"3"} />
            <HStack>
                <Text fontSize="1.4em">Primary Domain:</Text>
                <Text fontSize={"1.4em"} fontStyle={"bold"} color={"blue"}>
                    {domain.name}
                </Text>
            </HStack>
            <Text fontSize={"0.8em"} opacity={0.8}>
                Go to the marketplace to purchase a new domain.
            </Text>
            <Divider marginY={5} />
            <Heading mt={5}>Sub Domain</Heading>

            <SubDomainAdd domain={domain.name} />
            {subdomains.map((subdomain) => (
                <Text fontSize={"0.8em"} opacity={0.8} key={subdomain}>
                    {subdomain}
                </Text>
            ))}
        </Box>
    );
}

export { Domain as default };
