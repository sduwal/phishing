import {
    Button,
    Center,
    Text,
    Link,
    HStack,
    Box,
    Tooltip
} from "@chakra-ui/react";
import { nanoid } from "nanoid";

function createRandomLink(link) {
    const options = [
        nanoid(6),
        nanoid(12),
        nanoid(18),
        nanoid(10),
        nanoid(11),
        nanoid(),
        nanoid(),
        nanoid(),
        nanoid(),
        "help",
        "paypal-help-website",
        "",
        "whats-my-next-step"
    ];
    const generated = options[Math.round(Math.random() * options.length)];
    return (
        <HStack spacing={0}>
            <Text opacity={0.5}>https://</Text>
            <Text>{`${link}`}</Text>
            <Text opacity={0.5}>/{generated}</Text>
        </HStack>
    );
}
function createTinyUrl(link) {
    const service = [
        "tinyurl",
        "bit.ly",
        "is.gd",
        "tiny.cc",
        "rb.gy",
        "bl.ink",
        "shortcm.xyz"
    ];
    const randomService = service[Math.round(Math.random() * service.length)];

    const randomID = nanoid(Math.round(Math.random() * 5) + 8);
    return (
        <HStack spacing={0}>
            <Text opacity={0.5}>https://</Text>
            <Text>{randomService}</Text>
            <Text opacity={0.5}>/{randomID}</Text>
        </HStack>
    );
}

function createConfusion() {
    const options = [
        "https://www.messenger.com/messenger_media/?thread_id=100061447191794&attachment_id=658829708769779&message_id=mid.%24cAAAB8izE8NGEhxGrpF-Vcxf9q23V",
        "https://nam12.safelinks.protection.outlook.com/?url=http%3A%2F%2Fe.chase.com%2FT%2Fv60000017e5535b8f398cf0d6e965fc958%2F2ecbebd2842842a10000021ef3a0bcc2%2F2ecbebd2-8428-42a1-9a19-628e61ffd998%3F__F__%3Dv0fUYvjHMDjRPMSh3tviDHXIoXcPxvDgUUCCPvXMWoX_0IA9a7wNY25qD5G3eSEu8x69SjfXe0ZmyTEiVt9VkO79Xb5mJgupIKHeNl1Bm0s5lrOV5AGQsV73MZd9_X5pwxeJr8MA-6YD_VgabzdKW1h4Lct5O56FrHshjIvd7fuL3GxX-BhWjrugzcfPxvUIPv7Bn1X3eWiphMeqaxN9emin1SocbycPh-fBTiDGGRxdry-nXERnaFjc5SZnPY5Fp5irD96TN7mKVGC2n8l4hjUZ4t_sjpMUegAvhW2lkMD2KpvFw4-IYQ3CjIW9ocLhvrPI8ymDrWSC-xkKZfrHS01ta1TUHsK5rk&data=04%7C01%7Csduwal%40uno.edu%7Cee9c38b02dad4ad3423608d9d6d67ac3%7C31d4dbf540044469bfeedf294a9de150%7C0%7C0%7C637777038951676375%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000&sdata=wDEB2hNjF%2FqzdGkhti0cmlMRCWkj%2BGBpG0ti%2BiSk7qw%3D&reserved=0",
        "https://www.paypal.com/cgp/app-redirect?intent=xo_email_txn_details&src=RT000064&ref_id=O-7FK89987WL4290639&v=1&utm_source=unp&utm_medium=email&utm_campaign=RT000064&utm_unptid=d2507fca-6a7b-11ec-afaf-3cecef442d84&ppid=RT000064&cnac=US&rsta=en_US%28en-US%29&cust=NR83JED7F9NY4&unptid=d2507fca-6a7b-11ec-afaf-3cecef442d84&calc=fdd292c12b50b&unp_tpcid=email-receipt-xclick-payment&page=main%3Aemail%3ART000064&pgrp=main%3Aemail&e=cl&mchn=em&s=ci&mail=sys&appVersion=1.69.0&xt=104038"
    ];

    return options[Math.round(Math.random() * options.length)];
}
function createHiddenLink(link) {
    const buttonOptions = [
        "Go to PayPal",
        "Click here",
        "Click here for help",
        "PayPal help"
    ];
    const button = (
        <Tooltip label={`https://${link}`}>
            <Button backgroundColor={"blue.400"} _hover={{}} color="white">
                {
                    buttonOptions[
                        Math.floor(Math.random() * buttonOptions.length)
                    ]
                }
            </Button>
        </Tooltip>
    );

    const aTagOptions = [
        "http://www.paypal.com",
        "http://www.paypal.com/help",
        "Click here!",
        "https://www.paypal.com/login",
        "Go to PayPal"
    ];
    const aTag = (
        <Link target={link}>
            {aTagOptions[Math.round(Math.random() * aTagOptions.length)]}
        </Link>
    );
    return Math.random() > 0.5 ? button : aTag;
}

export default function generateLinks(link) {
    const links = {
        normal: (
            <Center>
                <Link p="0" width="fit-content">
                    {createRandomLink(link)}
                </Link>
            </Center>
        ),
        shortner: (
            <Center>
                <Link p="0">{createTinyUrl(link)}</Link>
            </Center>
        ),
        confused: (
            <Center>
                <Box width={"100%"}>
                    <Link p="0">{createConfusion()}</Link>
                </Box>
            </Center>
        ),
        hidden: <Center>{createHiddenLink(link)}</Center>
    };
    return links;
}
