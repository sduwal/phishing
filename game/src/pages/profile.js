import { VStack, Box, Flex, Spacer } from "@chakra-ui/react";
import { Timer, Sidebar, MainComponent } from "../components/main";

import { ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { setStepsEnabled } from "../store/steps";

import { Steps } from "intro.js-react";
import "intro.js/introjs.css";

export default function App() {
    const dispatch = useDispatch();
    const stepsEnabled = useSelector((state) => state.steps.stepsEnabled);
    const initialStep = useSelector((state) => state.steps.initialStep);
    const steps = useSelector((state) => state.steps.steps);

    function Top() {
        return (
            <>
                <div className="timer">
                    <Timer />
                </div>
            </>
        );
    }

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
            />
            <Box
                h="100vh"
                bg="#eee8d5"
                overflowY="auto"
                py={"5"}
                px={0}
                width={"100vw"}
                overflowX={"hidden"}
            >
                <VStack>
                    <ToastContainer />

                    <Top />
                    <Flex>
                        <MainComponent />
                        <Spacer />
                        <Sidebar />
                    </Flex>
                </VStack>
            </Box>
        </>
    );
}
