"use strict";

const scores = process.argv.slice(2);

console.log("DEBUG:", scores);

if (scores.length === 0) {
    console.log("Usage: node index.js score1 score2 score3 ...");
    process.exit();
}

const numericScores = scores.map(Number);

let total = 0;

for (const score of numericScores) {
    total += score;
}

const average = total / numericScores.length;

console.log("Scores:", numericScores.join(", "));
console.log("Average:", average.toFixed(2));