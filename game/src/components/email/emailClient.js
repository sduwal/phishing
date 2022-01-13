import { Text, Grid, GridItem, Avatar, Stack, Box } from "@chakra-ui/react";

function EmailClient({ title, name, from, to, body, linkType }) {
    return (
        <>
            <Grid
                templateRows="repeat(3,1fr)"
                templateColumns="repeat(100,1fr)"
            >
                <GridItem rowSpan={1} colStart={2} colSpan={50}>
                    <Text fontWeight="bold" py={2} px={2}>
                        {title}
                    </Text>
                </GridItem>
                <GridItem rowSpan={4} rowStart={2}>
                    <Avatar name={name} size="sm" />
                </GridItem>

                <GridItem
                    rowSpan={4}
                    rowStart={2}
                    colStart={2}
                    px={2}
                    colSpan={100}
                >
                    <Stack direction="column" spacing={0}>
                        <Stack direction="row">
                            <Text fontSize="0.9em" fontWeight="bold">
                                {name}
                            </Text>
                            <Text fontSize="0.9em">{from}</Text>
                        </Stack>
                        <Text fontSize="0.9em">To: {to}</Text>
                    </Stack>
                </GridItem>
            </Grid>
            <Box w="100%" h="50vh" overflowY={"auto"} mb={"10px"}>
                {body.start}
                {console.log(body)}
                {
                    <Box py="1" width="100%">
                        {body.link[linkType]}
                    </Box>
                }
                {body.end}
            </Box>
        </>
    );
}

export { EmailClient as default };
