import a1 from "./generic/styled/1";
import a2 from "./generic/styled/2";
import a3 from "./generic/styled/3";
import a4 from "./generic/styled/4";
import a5 from "./generic/styled/5";
import a6 from "./generic/styled/6";
import a7 from "./generic/styled/7";

// generic  unstyled
import b1 from "./generic/unstyled/1";
import b2 from "./generic/unstyled/2";
import b3 from "./generic/unstyled/3";
import b4 from "./generic/unstyled/4";
import b5 from "./generic/unstyled/5";
import b6 from "./generic/unstyled/6";
import b7 from "./generic/unstyled/7";
import b8 from "./generic/unstyled/8";

// targeted styled
import c1 from "./targeted/styled/1";
import c2 from "./targeted/styled/2";
import c3 from "./targeted/styled/3";

// targeted unstyled
import d1 from "./targeted/unstyled/1";
import d2 from "./targeted/unstyled/2";
import d3 from "./targeted/unstyled/3";
import d4 from "./targeted/unstyled/4";
import d5 from "./targeted/unstyled/5";

export default function allEmail(spelling, grammar) {
    return [
        a1(spelling, grammar),
        a2(spelling, grammar),
        a3(spelling, grammar),
        a4(spelling, grammar),
        a5(spelling, grammar),
        a6(spelling, grammar),
        a7(spelling, grammar),
        b1(spelling, grammar),
        b2(spelling, grammar),
        b3(spelling, grammar),
        b4(spelling, grammar),
        b5(spelling, grammar),
        b6(spelling, grammar),
        b7(spelling, grammar),
        b8(spelling, grammar),
        c1(spelling, grammar),
        c2(spelling, grammar),
        c3(spelling, grammar),
        d1(spelling, grammar),
        d2(spelling, grammar),
        d3(spelling, grammar),
        d4(spelling, grammar),
        d5(spelling, grammar)
    ];
}
