// https://twitter.com/askpaypal/status/1098743714392924160?lang=da
import { Text, VStack } from "@chakra-ui/react";

const first = {
    start: (
        <VStack spacing={4} align={"start"} fontSize={"1.1em"}>
            <Text>Hello Miguel Williamson,</Text>
            <Text>
                {
                    "Jane Gross just sent you money with PayPal. To hlp you protect, we're reviewing this payment."
                }
            </Text>
            <Text>
                {
                    "The Payment Review may take up to 24 hours. When we've completed the review, we'll either clear or cancel the payment. If the payment clears: You my proceed to process the order. To know if you item is covered, check the 'Seller Protection' section of the 'Transaction Details' page and ensure that it states  'Eligible'."
                }
            </Text>
            <Text>
                {"You can click on the link below to review the pament."}
            </Text>
        </VStack>
    ),
    end: (
        <>
            <Text fontSize={"1.1em"}>
                {
                    "You should not ship item until we let you knw that the payment has cleared. We'll send you an email when we complete the review or you can check the Transaction History tab of your PayPal account."
                }
            </Text>
        </>
    ),
    properties: []
};

const second = {
    start: (
        <VStack spacing={4} align={"start"} fontSize={"1.1em"}>
            <Text>Hello Miguel Williamson,</Text>
            <Text>
                {
                    "jane gross just sent you money with paypal. to help you protect, we're reviewing this payment."
                }
            </Text>
            <Text>
                {
                    "the payment review may take up to 24 hours. when we've completed the review, we'll either clear or cancel the payment. if the payment clears: you may proceed to process the order. to know if you item is covered, check the 'seller protection' section of the 'transaction details' page and ensure that it states  'eligible'."
                }
            </Text>
            <Text>
                {"you can click on the link below to review the payment."}
            </Text>
        </VStack>
    ),
    end: (
        <>
            <Text fontSize={"1.1em"}>
                {
                    "you should not ship item until we let you know that the payment has cleared. we'll send you an email when we complete the review or you can check the transaction history tab of your paypal account."
                }
            </Text>
        </>
    ),
    properties: []
};

const third = {
    start: (
        <VStack spacing={4} align={"start"} fontSize={"1.1em"}>
            <Text>Hello miguel williamson,</Text>
            <Text>
                {
                    "jane gross just sent you money with paypal. to help you protect, we're reviewing this payment."
                }
            </Text>
            <Text>
                {
                    "the payment review may take up to 24 hours. when we've completed the review, we'll either clear or cancel the payment. if the payment clears: you may roceed to process the order. to know if you item is covered, check the 'seller protection' section of the 'transaction details' page and ensure that it states  'eligible'."
                }
            </Text>
            <Text>
                {"you can click on the link below to review the payment."}
            </Text>
        </VStack>
    ),
    end: (
        <>
            <Text fontSize={"1.1em"}>
                {
                    "you should not ship item until we let you know that the payment has cleared. we'll send you an email when we complete the reviw or you can check the transaction history tab of your paypal account."
                }
            </Text>
        </>
    ),
    properties: []
};

const email = {
    to: "frankpage@gmail.com",
    from: "someone@gmail.com",
    subject: "IMPORTANT: Review transaction",
    totalSend: 1000,
    body: {
        text: [first, second, third]
    }
};

export default {
    email: email,
    properties: [],
    targeted: "targeted",
    styled: false
};
