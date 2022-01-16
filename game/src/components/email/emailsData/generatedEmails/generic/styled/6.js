import { Image, Text } from "@chakra-ui/react";
import paypal from "../../../image/paypal.png";

const first = {
    "start": (
        <>
            <Image src={paypal} height={50} />
            <Text fontWeight="bold" py={2}>
                Dear Windows 10 user,
            </Text>
            <Text fontWeight="bold" py={2}>
                Monday, Feb 18, 2022
            </Text>
            <Text>
                {
                    "Congratulaons! We are celebrating $500 MILLION Dollars of Daily Transaction Volume and you are 1 of the 10 users we've selected to claim(1) $1000 Paypal Gift Card"
                }{" "}
            </Text>
            <Text pt={"2"}>
                {
                    "This is ou]r way of saying thank you for being a loyal PayPal user! Use the link below to claim your gift card"
                }
            </Text>
        </>
    ),
    "end": (
        <>
            <Text>
                If you have any question, please contact support through the
                paypal website.
            </Text>
        </>
    ),
    "properties": []
};

const second = {
    "start": (
        <>
            <Image src={paypal} height={50} />
            <Text fontWeight="bold" py={2}>
                Dear user,
            </Text>
            <Text fontWeight="bold" py={2}>
                Monday, Feb 18, 2022
            </Text>
            <Text>
                {
                    "Congratulations! We are celebrating $500 MILLIONS Dollars of Daily Transaction Volume and u r 1 of the 10 users we've selected to claim(1) $1000 Paypal Gift Card"
                }{" "}
            </Text>
            <Text pt={"2"}>
                {
                    "This is our way of saying thank you for being a loyal PayPal user! Use the link below to claim your gift card"
                }
            </Text>
        </>
    ),
    "end": (
        <>
            <Text>
                {
                    "If you have any question, please contact support through the paypal website."
                }
            </Text>
        </>
    ),
    "properties": []
};

const third = {
    "start": (
        <>
            <Image src={paypal} height={50} />
            <Text fontWeight="bold" py={2}>
                Dear PAYPAL USER,
            </Text>
            <Text fontWeight="bold" py={2}>
                Monday, Feb 18, 2022
            </Text>
            <Text>
                {
                    "Congratulations! We are celebrating $500 MILLIONS Dollars of Daily Transaction Volume and you are 1 of the 10 users we've selected to claim(1) $1000 Paypal Gift Card. This offer is valid for the next 24 hours."
                }{" "}
            </Text>
            <Text pt={"2"}>
                {
                    "This is our way of saying thank you for being a loyal PayPal user! Use the link below to claim your gift card"
                }
            </Text>
        </>
    ),
    "end": (
        <>
            <Text>
                {
                    "If you have any question, please contact support through the paypal website."
                }
            </Text>
        </>
    ),
    "properties": []
};

const email = {
    to: "randomperson123@gmail.com",
    from: "paypal@gmail.com",
    subject: "Congratulations!",
    totalSend: 1000,
    body: {
        text: [first, second, third]
    }
};

export default {
    ...email,
    properties: [],
    targeted: "generic",
    styled: true
};
