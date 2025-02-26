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
    .check((argv) => {
        // Base Validations
        if (argv.b < 1) throw "[ERROR]: Base must be greater than 0";
        // Limit Validations
        if (argv.l < 1) throw "[ERROR]: Limit must be greater than 0";

        return true; // Otherwise All Good
    })
    .parseSync(); // Parse Args Into Object