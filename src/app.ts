import { ServerApp } from "./presentation/server-app";
import { yarg } from "./config/plugins/yargs.plugin";

// Run Main Instantly When The Function Is Created
(async () => {
    await main();
})();

async function main() {
    const { b: base, l: limit, s: show } = yarg;
    ServerApp.run({ base, limit, show });
}