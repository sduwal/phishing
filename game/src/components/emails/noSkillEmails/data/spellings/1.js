import { Text, Link, Center } from "@chakra-ui/react";

import createSpellingErrors from "@components/emails/shared/createSpellingErrors";

const desc =
    "recently we have limited your account access due to suspected and illegal uses. Please Check you account as soon as possible by Clicking the button below";

const email = {
    subject: "Limited Account",
    name: "Beatrice Freeman",
    from: "ilofafad@ze.bz",
    to: "wugawvep@durutuw.ck",
    body: {
        link: {
            normal: (
                <>
                    <Center>
                        <Link>https://xyz.xyz/randomLink</Link>
                    </Center>
                </>
            )
        },
        text: [
            {
                start: (
                    <>
                        <Text>
                            {createSpellingErrors({ description: desc })}
                        </Text>
                    </>
                ),
                end: <></>,
                properties: []
            },
            {
                start: (
                    <>
                        <Text>{desc}</Text>
                    </>
                ),
                end: <></>,
                properties: ["spelling"]
            },
            {
                start: (
                    <>
                        <Text>
                            {createSpellingErrors({ description: desc })}
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
