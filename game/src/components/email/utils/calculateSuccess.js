import stringSimilarity from "string-similarity";

function calculateFromPoints(from) {
    /**
     * based on the domain, subdomain and the from field
     * randomly assign 1 point for the randomness nature
     */
    const base = "paypal.com";
    const name = from.split("@")[0];
    const domain = from.split("@")[1];
    const subdomain = domain.split(".");

    let pointEarned = 0;
    if (subdomain.length > 2) {
        if (subdomain.includes("paypal")) {
            pointEarned += 2;
        }
    } else {
        const similarity = stringSimilarity.compareTwoStrings(base, domain);

        if (similarity > 0.8) {
            pointEarned += 3;
        } else if (similarity > 0.5) {
            pointEarned += 2;
        } else if (similarity > 0.3) {
            pointEarned += 1;
        }
    }

    if (
        ["contact", "help", "paypal", "info", "no-reply", "noreply"].includes(
            name
        )
    ) {
        pointEarned += 1;
    }
    return (Math.random() > 0.5 ? 1 : 0) + pointEarned;
}

function calculateLinkType(link) {
    let point = 1;
    switch (link) {
        case "normal":
            point = 1;
            break;
        case "hidden":
            point = 3;
            break;
        case "confused":
            point = 2;
            break;
        case "shortner":
            point = 2;
            break;
        default:
            point = 0;
            break;
    }

    return point;
}

function calculateBody(properties) {
    const points =
        (properties.includes("spelling") ? 2 : 0) +
        (properties.includes("grammar") ? 2 : 0) +
        (properties.includes("good email") ? 2 : 0);

    return points;
}
export default function calculateSuccess(email, number, domain) {
    const points = {
        "from": 5,
        "linkType": 3,
        "spelling": 2,
        "grammar": 2,
        "good email": 2,
        "styled": 2
    };

    console.log(email);
    const totalPoints = Object.keys(points).reduce((acc, key) => {
        return acc + points[key];
    }, 0);

    const userPoints =
        calculateFromPoints(email.from) +
        calculateLinkType(email.linkType) +
        calculateBody(email.body.text[number].properties) +
        (email.styled ? 2 : 0);

    const successRate = Math.min(Math.max(0.05, userPoints / totalPoints), 0.5);
    console.log(successRate);
    return successRate;
}
