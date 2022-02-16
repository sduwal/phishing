import createSpellingError from "../../../shared/createSpellingErrors";
import createGrammaticalErrors from "../../../shared/createGrammaticalErrors";

export function spellingErrors(descriptionArray) {
    const edited = [];
    for (let i = 0; i < 2; i++) {
        const temp = [];
        for (let i = 0; i < descriptionArray.length; i++) {
            let current = descriptionArray[i];
            if (current.split(" ").length > 3) {
                current = createSpellingError({
                    description: current.trim()
                });
            }
            temp.push(current);
        }
        edited.push([...temp]);
    }
    return edited;
}

export function grammarErrors(descriptionArray) {
    const first = [];
    const second = [];

    for (let i = 0; i < descriptionArray.length; i++) {
        const currentStart = descriptionArray[i];

        if (currentStart.split(" ").length > 3) {
            const errors = createGrammaticalErrors({
                description: currentStart
            });
            first.push(errors[0]);
            second.push(errors[1]);
        } else {
            first.push(currentStart);
            second.push(currentStart);
        }
    }

    return [[...first], [...second]];
}

export function spellingAndGrammarErrors(descriptionArray) {
    const first = [];
    const second = [];

    for (let i = 0; i < descriptionArray.length; i++) {
        const currentStart = descriptionArray[i];

        if (currentStart.split(" ").length > 5) {
            first.push(
                createGrammaticalErrors({
                    description: createSpellingError({
                        description: currentStart
                    })
                })[0]
            );
            second.push(
                createGrammaticalErrors({
                    description: createSpellingError({
                        description: currentStart
                    })
                })[1]
            );
        } else {
            first.push(currentStart);
            second.push(currentStart);
        }
    }

    return [[...first], [...second]];
}
