import { yarg } from "./config/plugins/yargs.plugin";

// Run Main Instantly When The Function Is Created
(async () => {
    await main();
})();

async function main() {
    console.log(yarg)
}