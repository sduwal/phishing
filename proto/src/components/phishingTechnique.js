import { Container, Text, UnorderedList, ListItem } from "@chakra-ui/react";

import LinkHiding from "./modals/linkHiding";
function Techniques() {
    const phishing = {
        1: ["Link Hiding", "Somethjing else", "Some other thing"],
        2: ["To do later"],
        3: ["To do later"],
    };

    const listTechniques = Object.keys(phishing).map(function (key, index) {
        return (
            <>
                <Text width="100%" background="red.100" align="center" py="5px">
                    Level: {key}
                </Text>
                <UnorderedList styleType="none">
                    {phishing[key].map(function (item, index) {
                        return (
                            <ListItem px="10px" key={key + "" + index}>
                                {/* <Button
                                    variant="outline"
                                    colorScheme="teal"
                                    my="4px"
                                    size="sm"
                                    onClick={LinkHiding}
                                >
                                    {item}
                                </Button> */}
                                <LinkHiding></LinkHiding>
                            </ListItem>
                        );
                    })}
                </UnorderedList>
            </>
        );
    });
    return (
        <Container
            background="orange.50"
            maxW="fit-content"
            height="fit-content"
            overflow="auto"
            // scrollY="true"
            padding="0"
            margin="10px"
        >
            {/* <Center flexDirection="column" padding="50px"> */}
            {listTechniques}
            {/* </Center> */}
        </Container>
    );
}

export default Techniques;
