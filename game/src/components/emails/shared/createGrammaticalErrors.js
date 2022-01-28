function createGrammaticalErrors(description, number = 2) {
    const variations = [];

    variations.push(description.toLowerCase());

    if (number == 1) return variations;

    let newString = description.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

    newString = newString.replace(/\s{2,}/g, " ");

    variations.push(newString);

    return variations;
}

export default createGrammaticalErrors;
