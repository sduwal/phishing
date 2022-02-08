import { Text, HStack, VStack } from "@chakra-ui/react";

import Footer from "./footer";
import Logo from "./logo";
import {
    spellingAndGrammarErrors,
    spellingErrors,
    grammarErrors
} from "../../../utils/generateEmailsData";

export default function createMail(spelling, grammar) {
    const start = [
        "Our automatic security system indicates that someone was trying to use your account without your consent.",
        "This means that you won't be able to do certain things with your account; you might not be able to send or withdraw money (temporarily). PayPal may limit your account as a security measure to protect you and your account. ",
        "If you think this was a mistake, please let us know by clicking the link below:"
    ];
    const end = [
        "Thank you for your attention to this matter, and we hope that this issue will be resolved as soon as possible."
    ];

    const allStart = [start];
    const allEnd = [end];

    if (!spelling || !grammar) {
        const copyStart = [...start];
        const copyEnd = [...end];

        if (!spelling && !grammar) {
            allStart.push(...spellingAndGrammarErrors(copyStart));
            allEnd.push(...spellingAndGrammarErrors(copyEnd));
        } else if (!spelling) {
            allStart.push(...spellingErrors(copyStart));
            allEnd.push(...spellingErrors(copyEnd));
        } else if (!grammar) {
            allStart.push(...grammarErrors(copyStart));
            allEnd.push(...grammarErrors(copyEnd));
        }
    }

    const text = [];

    for (let i = 0; i < allStart.length; i++) {
        const properties = [];
        if (i == 0) properties.push(...["spelling", "grammar"]);
        if (spelling && !properties.includes(spelling)) {
            properties.push("spelling");
        }
        if (grammar && !properties.includes(grammar)) {
            properties.push("grammar");
        }

        let startIndex = 0;
        let endIndex = 0;

        const currentStart = allStart[i];
        const currentEnd = allEnd[i];

        text.push({
            start: (
                <>
                    <Logo />
                    <Text fontWeight={"bold"}>Dear Christina McCarthy!</Text>
                    <Text>{currentStart[startIndex++]}</Text>
                    <Text>{currentStart[startIndex++]}</Text>

                    <Text mt={3}>{currentStart[startIndex++]}</Text>
                </>
            ),
            end: (
                <>
                    <Text>{currentEnd[endIndex++]}</Text>
                    <Footer />
                </>
            ),
            properties
        });
    }

    return {
        to: "pabvov@da.ma",
        from: "guard@accounts2.com",
        subject: "Client Notification",
        totalSend: 1000,
        body: {
            text
        },
        targeted: "targeted",
        styled: true
    };
}
