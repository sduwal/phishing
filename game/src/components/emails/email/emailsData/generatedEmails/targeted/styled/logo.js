import paypal from "./../../../image/paypal.png";
import { Image, Center } from "@chakra-ui/react";

function Logo() {
    return (
        <Center>
            <Image src={paypal} height={50} />
        </Center>
    );
}

export default Logo;
