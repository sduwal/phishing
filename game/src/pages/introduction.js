/* eslint-disable max-len */
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// import SelectDomain from "../components/selectDomain";

function Introduction() {
    return (
        <Link to="/main">
            <Button>Start Game</Button>
        </Link>
    );
}

export { Introduction as default };
