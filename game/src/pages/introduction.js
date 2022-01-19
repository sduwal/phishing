/* eslint-disable max-len */
import { Container, Square, Flex, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// import SelectDomain from "../components/selectDomain";

function Introduction() {
    return (
        <Link to="/main">
            <Button>Start Game</Button>
        </Link>
    );
}

export { Introduction as default };
