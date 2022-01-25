// no special properties

import { Text } from "@chakra-ui/react";

const email = {
    to: "randomperson123@gmail.com",
    from: "someone@gmail.com",
    subject: "SHIPMENT DETAILS IN VERIFICATION UNIT",
    totalSend: 1000,
    body: {
        text: [
            {
                start: (
                    <>
                        <Text>Dear Client,</Text>
                        <Text>
                            {
                                "Thank you for using PayPal. This is to inform you that we have received your shippment details and it has been forwarded to our processing using for verification and completion of the payment. Once the shipment details has been fuullyverified your PayPal account will nofity you of shipment status. You can check the status of you order by clicking on the link below."
                            }
                        </Text>
                    </>
                ),
                end: <></>,
                properties: ["spelling", "grammar"]
            },
            {
                start: (
                    <>
                        <Text>Dear Client,</Text>
                        <Text>
                            {
                                "Thank you for use PayPal. This are to inform you that we had received your shippment details and it has been forwarded to our processing using for verification and completion of the payment. Once the shipment details has been fuullyverified your PayPal account will nofity you of shipment status. You could check the status of you order by clicking on the link below."
                            }
                        </Text>
                    </>
                ),
                end: <></>,
                properties: ["spelling"]
            },
            {
                start: (
                    <>
                        <Text>Dear Client,</Text>
                        <Text>
                            {
                                "Thank you for using Paypal. This is to infrm you that we have receied your shippment details and it has been forwarded to our processing using for verification and completion of the payment. Once the shipment details has been fuullyverified your PayPal account will nofity you of shipment status. You can check the status of you order by clicking on the link below."
                            }
                        </Text>
                    </>
                ),
                end: <></>,
                properties: ["grammar"]
            }
        ]
    }
};

export default {
    ...email,
    properties: ["spelling", "grammar"],
    targeted: "generic",
    styled: false
};
