#!/usr/bin/env node
import yargs from "yargs";
import chalk from "chalk";
import fs from "fs";
import { hideBin } from "yargs/helpers";
;
// Parse arguments using yargs
const argv = yargs(hideBin(process.argv))
    .option("name", {
    alias: "n",
    describe: "Your name",
    type: "string",
    demandOption: true,
})
    .option("age", {
    alias: "a",
    describe: "Your age",
    type: "number",
    demandOption: true,
})
    .option("greetType", {
    alias: "g",
    describe: "Your greet type",
    type: "string",
    choices: ["formal", "casual"],
    default: "casual",
})
    .option("shout", {
    alias: "s",
    describe: "Shout the greeting in uppercase",
    type: "boolean",
    default: false,
})
    .option("repeat", {
    alias: "r",
    describe: "Number of times to repeat the greeting",
    type: "number",
    default: 1, // Default to 1 repetition
})
    .option("reverse", {
    alias: "rev",
    describe: "Reverse or not",
    type: "boolean",
    default: false,
})
    .option("color", {
    alias: "c",
    describe: "color",
    type: "string",
    demandOption: false,
    choices: ["red", "green", "blue"]
})
    .option("emoji", {
    alias: "e",
    describe: "emoji append?",
    type: "boolean",
    default: false
})
    .option("save", {
    alias: "sa",
    describe: "save?",
    type: "boolean",
    default: false
})
    .option("delay", {
    alias: "d",
    describe: "delay?",
    type: "number",
    default: 0
})
    .check((argv) => {
    if (isNaN(argv.age)) {
        throw new Error("Age must be a number.");
    }
    if (isNaN(argv.repeat) || argv.repeat < 1) {
        throw new Error("Repeat must be a number greater than or equal to 1.");
    }
    if (isNaN(argv.delay) || argv.delay < 0) {
        throw new Error("Delay must be a number greater than or equal to 0.");
    }
    return true;
})
    .help()
    .parseSync();
// Use arrow function for logging
const greet = (args) => {
    let message = args.greetType === "formal"
        ? `Good day, Mr./Ms. ${args.name}. You are ${args.age} years old.`
        : `Hey ${args.name}! You’re ${args.age} years old!`;
    // If shout flag is true, convert message to uppercase
    if (args.shout) {
        message = message.toUpperCase();
    }
    if (args.reverse) {
        message = message.split("").reverse().join("");
    }
    if (args.color) {
        message = chalk[args.color](message);
    }
    if (args.greetType === 'formal' && args.emoji) {
        message = message.concat(" 👔");
    }
    if (args.greetType === 'casual' && args.emoji) {
        message = message.concat(" 😎");
    }
    if (args.save) {
        fs.writeFileSync("message.txt", message);
        console.log(chalk.yellow("Message saved to message.txt ✅"));
    }
    else {
        for (let i = 0; i < args.repeat; i++) {
            args.delay > 0
                ? setTimeout(() => console.log(message), i * args.delay)
                : console.log(message);
        }
    }
};
// Call the function
greet(argv);
