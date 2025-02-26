import yargs from "yargs";
import { hideBin } from "yargs/helpers"; // Function To Hide Bin Default Args

export const yarg = yargs(hideBin(process.argv))
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "Table base"
    })
    .option("l", {
        alias: "limit",
        type: "number",
        default: 10,
        describe: "Table limit"
    })
    .option("s", {
        alias: "show",
        type: "boolean",
        default: false,
        describe: "Show table"
    })
    .parseSync(); // Parse Args Into Object