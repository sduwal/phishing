import { Text, Link, Center } from "@chakra-ui/react";

import createSpellingErrors from "@components/emails/shared/createSpellingErrors";

const start =
    "please be aware that your paypal Account expires in less than 48 H. It is indispensable to perform an audit of your data is present, otherwise your Account will be destroyed. Just click the link below.";

const email = {
    subject: "Login",
    name: "Rosie Curtis",
    from: "leusa@uldacpe.ir",
    to: "vaete@zonkok.sy",
    body: {
        link: {
            normal: (
                <>
                    <Center>
                        <Link>https://xyz.xyz/secure-account</Link>
                    </Center>
                </>
            )
        },
        text: [
            {
                start: (
                    <>
                        <Text>{start}</Text>
                    </>
                ),
                end: <></>,
                properties: ["spelling"]
            },
            {
                start: (
                    <>
                        <Text>
                            {createSpellingErrors({ description: start })}
                        </Text>
                    </>
                ),
                end: <></>,
                properties: []
            },
            {
                start: (
                    <>
                        <Text>
                            {createSpellingErrors({ description: start })}
                        </Text>
                    </>
                ),
                end: <></>,
                properties: []
            }
        ]
    }
};

export default email;
