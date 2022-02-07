import { VStack, Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

import { Steps } from "intro.js-react";
import "intro.js/introjs.css";

import { Sidebar, MainComponent } from "../components/main";

import { setStepsEnabled } from "../store/steps";

export default function App() {
    const dispatch = useDispatch();

    const stepsEnabled = useSelector((state) => state.steps.stepsEnabled);
    const initialStep = useSelector((state) => state.steps.initialStep);
    const steps = useSelector((state) => state.steps.steps);

    function onExit() {
        dispatch(setStepsEnabled(false));
    }

    return (
        <>
            <Steps
                enabled={stepsEnabled}
                steps={steps}
                initialStep={initialStep}
                onExit={onExit}
                options={{
                    exitOnOverlayClick: false
                }}
            />

            {/* <Box
                h="100vh"
                bg="#eee8d5"
                overflowY="auto"
                py={"5"}
                px={0}
                width={"100vw"}
                overflowX={"hidden"}
            > */}
            {/* <VStack width={"100%"}> */}
            <ToastContainer limit={3} />

            <Flex background={"#fdf6e3"}>
                <Box flex="1" h="100vh">
                    <MainComponent />
                </Box>
                <Sidebar />
            </Flex>
            {/* </VStack> */}
            {/* </Box> */}
        </>
    );
}
