import { Editor } from "@tinymce/tinymce-react";
import React, { useRef } from "react";
import "../css/emailClient.css";
import {
    Box,
    Input,
    InputLeftAddon,
    InputGroup,
    Flex,
    Button,
    Spacer,
} from "@chakra-ui/react";

import { Send } from "react-feather";
export default function EmailClient() {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    return (
        <Box>
            <InputGroup>
                <InputLeftAddon children="To" background="blue.100" />
                <Input
                    _placeholder={{ color: "black" }}
                    type="email"
                    placeholder="students@uno.edu"
                    mb="20px"
                    variant="filled"
                    disabled
                />
            </InputGroup>

            <InputGroup>
                <InputLeftAddon children="Cc" background="blue.100" />
                <Input
                    _placeholder={{ color: "black" }}
                    type="email"
                    mb="20px"
                    variant="filled"
                    disabled
                />
            </InputGroup>

            <Input
                onClick={log}
                _placeholder={{ color: "black.200" }}
                placeholder="Enter a subject"
                type="email"
                mb="20px"
                variant="filled"
            />

            <Editor
                apiKey={process.env.REACT_APP_TINY_API}
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue=""
                init={{
                    height: 350,
                    branding: false,
                    menubar: false,
                    statusbar: false,
                    placeholder:
                        "Click on any phishing techniques to generate a template or start writing your own emails",
                    plugins: [
                        "advlist autolink lists link image charmap print preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table paste code help",
                    ],
                    toolbar:
                        "undo redo | formatselect | " +
                        "bold italic backcolor | fontsizeselect | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat |image| help",
                    content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
            />
            <Flex
                direction="row"
                mt="10px"
                py="10px"
                // background="blue.100"
                alignItems="right"
            >
                <Spacer />
                <Button mx="10px" background="blue.400">
                    Send
                    <Send size="1em" />
                </Button>
                <Button mx="10px" background="red.300">
                    Discard
                </Button>
            </Flex>
        </Box>
    );
}
