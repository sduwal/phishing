import { useEffect, useState } from "react";

function Timer({ second }) {
    const [time, setTime] = useState(second);

    const tick = () => {
        if (time != 0) setTime(time - 1);
    };
    useEffect(() => {
        const timer = setInterval(() => tick(), 1000);
        return () => clearInterval(timer);
    });
    return <>{formatTime(time)}</>;
}

function formatTime(seconds) {
    if (seconds === 0) return "00:00";

    if (seconds > 3600) seconds = 3600;

    const minute = Math.floor(seconds / 60);
    seconds = seconds - minute * 60;

    return `${minute.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
}

export { Timer as default };
