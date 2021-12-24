import React from "react";
import { Formik, Form, Field } from "formik";
import {
    Button,
    FormControl,
    Input,
    Center,
    FormErrorMessage,
    Container,
    FormHelperText,
} from "@chakra-ui/react";

function App() {
    function validateEmail(email) {
        let error;
        if (!email) {
            error = "Email is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            error = "Invalid email address";
        }

        return error;
    }
    return (
        <Container mt={"20"}>
            <Formik
                initialValues={{ email: "" }}
                onSubmit={(values, { setSubmitting }) => {
                    // send({ to: values.email }).then(() => {
                    //     setSubmitting(false);
                    //     console.log("success");
                    // });
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field name="email" validate={validateEmail}>
                            {({ field, form }) => (
                                <FormControl
                                    isInvalid={
                                        form.errors.email && form.touched.email
                                    }
                                >
                                    <Input
                                        {...field}
                                        id="email"
                                        placeholder="name@email.com"
                                    />
                                    <FormErrorMessage>
                                        {form.errors.email}
                                    </FormErrorMessage>
                                    <FormHelperText>
                                        Please enter the temp email you creted.
                                        Your test emails will be sent to this
                                        email address.
                                    </FormHelperText>
                                </FormControl>
                            )}
                        </Field>
                        <Center>
                            <Button
                                colorScheme="teal"
                                mt={20}
                                isLoading={isSubmitting}
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Center>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}
export default App;
