import { getRandomInteger } from "./utils";

function getRandomAlphabet() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet[getRandomInteger(alphabet.length)];
}

function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}

function createSpellingError({ description }) {
    const words = description.split(" ");

    const randomNumber = Math.min(words.length / 3, 3);

    for (let i = 0; i < randomNumber; i++) {
        const index = getRandomInteger(words.length);
        const wordLength = words[index].length;
        words[index] = setCharAt(
            words[index],
            getRandomInteger(wordLength),
            getRandomAlphabet()
        );
    }

    return words.join(" ");
}

export default createSpellingError;
