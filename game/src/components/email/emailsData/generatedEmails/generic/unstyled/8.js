// no special properties

import { Text } from "@chakra-ui/react";

const first = {
    start: (
        <>
            <Text py={2}>Hello,</Text>
            <Text lineHeight={1.4}>
                {
                    "This email confirms that you have cancelled your billing agreement with Hulu. No further payments will be made from your PayPal account to this merchant. If you have any further questions about the agreement, or wish to reinstate it, please contact Hulu directly. Learn more:"
                }
            </Text>
        </>
    ),
    end: (
        <>
            <Text pt={3}>Sincerly,</Text>
            <Text py={4}>PayPal</Text>
            <Text lineHeight={1.5} fontSize={"0.9em"}>
                <Text>{"Not sure why you received this email?"}</Text>
                <Text>{"Learn more"}</Text>
                <Text color={"blue"} decoration={"underline"}>
                    {
                        "https://www.paypal.com/us/smarthelp/articlewhy-am-i-receiving-emails-from-paypal-when-i-dont-have-an-account-faq4172"
                    }
                </Text>
                <Text>
                    {
                        "Copyright © 1999-2021 PayPal, Inc. All rights reserved. PayPal is located at 2211 N. First St., San Jose, CA 95131."
                    }
                </Text>
                <Text mt={6}>PayPal PPX000771:N/A:f2225892a3283</Text>
            </Text>
        </>
    ),
    properties: ["spelling", "grammar", "good email"]
};

const second = {
    start: (
        <>
            <Text py={2}>Hello,</Text>
            <Text lineHeight={1.4}>
                {
                    "This email confirms that you have cancel your billing with Hulu. No further payment be made from your PayPal account to this merchant. If you have any further about the agreement, or wish to reinstate it please contact Hulu directly. Learn more:"
                }
            </Text>
        </>
    ),
    end: (
        <>
            <Text pt={3}>Sincerly,</Text>
            <Text py={4}>PayPal</Text>
            <Text lineHeight={1.5} fontSize={"0.9em"}>
                <Text>{"Not sure why you received this email?"}</Text>
                <Text>{"Learn more"}</Text>
                <Text color={"blue"} decoration={"underline"}>
                    {
                        "https://www.paypal.com/us/smarthelp/articlewhy-am-i-receiving-emails-from-paypal-when-i-dont-have-an-account-faq4172"
                    }
                </Text>
                <Text>
                    {
                        "Copyright © 1999-2021 PayPal, Inc. All rights reserved. PayPal is located at 2211 N. First St., San Jose, CA 95131."
                    }
                </Text>
                <Text mt={6}>PayPal PPX000771:N/A:f2225892a3283</Text>
            </Text>
        </>
    ),
    properties: ["spelling", "good email"]
};

const third = {
    start: (
        <>
            <Text py={2}>Hello,</Text>
            <Text lineHeight={1.4}>
                {
                    "This eail confirms that you have canceled your blling ageement with Hulu. No further payments will be made from your PayPal account to this merchant. If you have any frther questions about the agreement, or wish to reinstate it, please contact Hulu directly. Learn more:"
                }
            </Text>
        </>
    ),
    end: (
        <>
            <Text pt={3}>Sincerly,</Text>
            <Text py={4}>PayPal</Text>
            <Text lineHeight={1.5} fontSize={"0.9em"}>
                <Text>{"Not sure why you received this email?"}</Text>
                <Text>{"Learn more"}</Text>
                <Text color={"blue"} decoration={"underline"}>
                    {
                        "https://www.paypal.com/us/smarthelp/articlewhy-am-i-receiving-emails-from-paypal-when-i-dont-have-an-account-faq4172"
                    }
                </Text>
                <Text>
                    {
                        "Copyright © 1999-2021 PayPal, Inc. All rights reserved. PayPal is located at 2211 N. First St., San Jose, CA 95131."
                    }
                </Text>
                <Text mt={6}>PayPal PPX000771:N/A:f2225892a3283</Text>
            </Text>
        </>
    ),
    properties: ["grammar", "good email"]
};

const email = {
    to: "randomperson123@gmail.com",
    from: "someone@gmail.com",
    subject: "SHIPMENT DETAILS IN VERIFICATION UNIT",
    totalSend: 1000,
    body: {
        text: [first, second, third]
    }
};

export default {
    email: email,
    properties: ["spelling", "grammar", "good email"],
    targeted: "generic",
    styled: false
};
