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
            pointEarned += 10;
        }
    } else {
        const similarity = stringSimilarity.compareTwoStrings(base, domain);
        if (similarity > 0.9) {
            pointEarned += 20;
        } else if (similarity > 0.8) {
            pointEarned += 18;
        } else if (similarity > 0.6) {
            pointEarned += 7;
        } else {
            if (name === "paypal") {
                pointEarned += 10;
            }
        }
    }

    if (["contact", "help", "info", "no-reply", "noreply"].includes(name)) {
        pointEarned += 5;
    }
    return pointEarned;
}

function calculateLinkType(link, domain) {
    const similarity = stringSimilarity.compareTwoStrings("paypal.com", domain);

    let point = 0;
    switch (link) {
        case "normal":
            point = similarity > 0.82 ? 20 : domain.includes("paypal") ? 15 : 3;
            break;
        case "hidden":
            point = 18;
            break;
        case "confused":
            point = 25;
            break;
        case "shortner":
            point = 20;
            break;
        default:
            point = 0;
            break;
    }

    return point;
}

function calculateBody(properties) {
    const points =
        (properties.includes("spelling") ? 5 : 0) +
        (properties.includes("grammar") ? 5 : 0);
    return points;
}
export default function calculateSuccess(email, number, domain) {
    const points = {
        "from": 25,
        "linkType": 25,
        "spelling": 5,
        "grammar": 5,
        "styled": 10,
        "targeted": 20
    };

    const totalPoints = Object.keys(points).reduce((acc, key) => {
        return acc + points[key];
    }, 0);
    const userPoints =
        calculateFromPoints(email.from) +
        calculateLinkType(email.linkType, domain) +
        calculateBody(email.body.text[number].properties) +
        (email.styled ? 10 : 0) +
        (email.targeted === "generic" ? 0 : 20);

    const successRate = userPoints / totalPoints;
    return successRate;
}
