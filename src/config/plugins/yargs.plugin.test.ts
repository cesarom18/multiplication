describe("YargsPlugin", () => {
    const originalArgv = process.argv; // Use Always The Same Initial 'argv'

    // Function To Parse Argv Object With Yarg Plugin
    const executeYarg = async (args: string[]) => {
        process.argv = [...process.argv, ...args];
        const { yarg } = await import("./yargs.plugin");

        return yarg;
    };
    // Reset 'process.argv' And Imports From Previous Executions
    beforeEach(() => {
        process.argv = originalArgv;
        jest.resetModules();
    })

    test("Should return default values", async () => {
        const argv = await executeYarg(["-b", "5"]);

        expect(argv).toEqual(expect.objectContaining({ // Check Yarg Default Values
            b: 5,
            l: 10,
            s: false,
            n: "table",
            p: "outputs"
        }));
    });

    test("Should return custom values", async () => {
        const argv = await executeYarg(["-b", "10", "-l", "8", "-s", "true", "-n", "test-name", "-p", "test-path"]);

        expect(argv).toEqual(expect.objectContaining({ // Check Yarg Custom Values
            b: 10,
            l: 8,
            s: true,
            n: "test-name",
            p: "test-path"
        }));
    });
});