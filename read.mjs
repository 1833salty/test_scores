import { readFile }
from "fs/promises";

try {

    const data =
    await readFile(
        "scores.txt",
        "utf8"
    );

    const scores =
    data
    .trim()
    .split(/\r?\n/)
    .map(Number);

    let total = 0;

    for (
        const score
        of scores
    ) {

        total += score;

    }

    const average =
    total /
    scores.length;

    console.log(
        "Scores:",
        scores.join(", ")
    );

    console.log(
        "Average:",
        average.toFixed(2)
    );

}

catch(error){

    console.log(
        "Error:",
        error.message
    );

}