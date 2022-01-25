import { VStack, Box, Flex, Spacer } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Steps } from "intro.js-react";
import "intro.js/introjs.css";

import { Sidebar, MainComponent } from "../components/main";

import { changeStart } from "../store/interaction";
import { setStepsEnabled } from "../store/steps";
import { decrement } from "../store/timer";

export default function App() {
    const dispatch = useDispatch();
    const history = useHistory();

    const time = useSelector((state) => state.timer.value);
    const stepsEnabled = useSelector((state) => state.steps.stepsEnabled);
    const initialStep = useSelector((state) => state.steps.initialStep);
    const steps = useSelector((state) => state.steps.steps);

    const tick = () => {
        if (time <= 0) history.push("/gameover");
        if (time > 0 && !stepsEnabled) dispatch(decrement());
    };
    useEffect(() => {
        const timer = setInterval(() => tick(), 1000);
        return () => clearInterval(timer);
    });

    function onExit() {
        dispatch(setStepsEnabled(false));
        dispatch(changeStart());
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
