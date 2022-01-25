import { Center, Text, VStack } from "@chakra-ui/react";

const first = {
    start: (
        <>
            <Center>
                <Text fontWeight={"70%"} fontSize={"2em"} pb={4}>
                    You added a new address
                </Text>
            </Center>
            <VStack align={"start"} spacing={4} mb={5}>
                <Text>
                    {
                        "This is just a quick confirmation that you added an address in your PayPal account."
                    }
                </Text>
                <Text pt={4}>Here are the details</Text>
                <Text>Name: Theresa Cannon</Text>
                <Text>Address updated:</Text>
                <Text>658 Tepaf Extension</Text>
                <Text>70149</Text>
                <Text>New York</Text>
                <Text>NY</Text>
            </VStack>

            <Text>
                {"If you didn't make this change, let us know right away:"}
            </Text>
        </>
    ),
    end: (
        <Text>
            {
                "It's important to let us know because it helps us make sure no one is getting into your account without your knowledge."
            }
        </Text>
    ),
    properties: ["spelling", "grammar"]
};

const second = {
    start: (
        <>
            <Center>
                <Text fontWeight={"70%"} fontSize={"2em"} pb={4}>
                    You added a new address
                </Text>
            </Center>
            <VStack align={"start"} spacing={4} mb={5}>
                <Text>
                    {
                        "this is just a quick confirmation that you added an address in your PayPal account."
                    }
                </Text>
                <Text pt={4}>Here are the details</Text>
                <Text>Name: theresa cannon</Text>
                <Text>Address updated:</Text>
                <Text>658 tepaf extension</Text>
                <Text>70149</Text>
                <Text>new york</Text>
                <Text>ny</Text>
            </VStack>

            <Text>
                {"if you didn't make this change, let us know right away."}
            </Text>
        </>
    ),
    end: (
        <Text>
            {
                "it's important to let us know because it helps us make sure no one is getting into your account without your knowledge."
            }
        </Text>
    ),
    properties: ["grammar"]
};

const third = {
    start: (
        <>
            <Center>
                <Text fontWeight={"70%"} fontSize={"2em"} pb={4}>
                    You added a new address
                </Text>
            </Center>
            <VStack align={"start"} spacing={4} mb={5}>
                <Text>
                    {
                        "this is just a quick confirm tat you addd an adress in your PayPale acount."
                    }
                </Text>
                <Text pt={4}>Here are the details</Text>
                <Text>Name: theresa cannon</Text>
                <Text>Address updated:</Text>
                <Text>658 tepaf extension</Text>
                <Text>70149</Text>
                <Text>new york</Text>
                <Text>ny</Text>
            </VStack>

            <Text>
                {"if you didn't make tis change, let us know right away."}
            </Text>
        </>
    ),
    end: (
        <Text>
            {
                "it's important to let us no 'cause it helps us make sure no one is getting into your account without your knowledge."
            }
        </Text>
    ),
    properties: []
};

const email = {
    to: "theresea1991@gmail.com",
    from: "someone@gmail.com",
    subject: "You added a new address",
    totalSend: 1000,
    body: {
        text: [first, second, third]
    }
};

export default {
    ...email,
    properties: ["spelling", "grammar"],
    targeted: "targeted",
    styled: false
};
