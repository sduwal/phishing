import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    textStyles: {
        intro: {
            fontSize: "1.7em",
            fontWeight: "bold",
            lineHeight: "110%",
            letterSpacing: "-2%",
            fontFamily: "Indie Flower"
        }
    }
});

export default theme;
