import { Text, Box, Divider } from "@chakra-ui/react";
function Footer() {
    return (
        <Box backgroundColor={"blackAlpha.300"} p={4} mt={4}>
            <Divider my={2} />
            <Text fontSize={"0.8em"} opacity={"0.7"}>
                {
                    "Please do not reply to this email. We are unable to respond to inquiries sent to this address. For immediate answers to your questions, visit our Help Center by clicking 'Help' located on any PayPal page or email. "
                }
            </Text>
            <Text fontSize={"0.8em"} opacity={"0.7"} my={3}>
                {
                    "Copyright © 2022 PayPal,Inc. All rights reserved. PayPal is located at 2211 N. First Street, San Jose, CA 95110. "
                }
            </Text>
        </Box>
    );
}

export default Footer;
