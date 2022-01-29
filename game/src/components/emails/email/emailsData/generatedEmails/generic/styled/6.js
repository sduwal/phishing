import { Image, Text } from "@chakra-ui/react";
import paypal from "../../../image/paypal.png";

import {
    spellingAndGrammarErrors,
    spellingErrors,
    grammarErrors
} from "../../../utils/generateEmailsData";

export default function createEmail(spelling, grammar) {
    const start = [
        "Congratulaons! We are celebrating $500 MILLION Dollars of Daily Transaction Volume and you are 1 of the 10 users we've selected to claim(1) $1000 Paypal Gift Card",
        "This is ou]r way of saying thank you for being a loyal PayPal user! Use the link below to claim your gift card"
    ];
    const end = [
        "If you have any question, please contact support through the paypal website."
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
            "start": (
                <>
                    <Image src={paypal} height={50} />
                    <Text fontWeight="bold" py={2}>
                        Dear Windows 10 user,
                    </Text>
                    <Text fontWeight="bold" py={2}>
                        Monday, Feb 18, 2022
                    </Text>
                    <Text>{currentStart[startIndex++]}</Text>
                    <Text pt={"2"}>{currentStart[startIndex++]}</Text>
                </>
            ),
            "end": (
                <>
                    <Text>{currentEnd[endIndex++]}</Text>
                </>
            ),
            "properties": []
        });
    }

    return {
        to: "randomperson123@gmail.com",
        from: "paypal@gmail.com",
        subject: "Congratulations!",
        totalSend: 1000,
        body: {
            text: text
        },
        targeted: "generic",
        styled: true
    };
}
