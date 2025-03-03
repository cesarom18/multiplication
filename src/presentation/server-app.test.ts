import { ServerApp } from "./server-app";

describe("ServerApp", () => {
    test("Should create ServerApp instance", () => {
        const serverApp = new ServerApp();

        expect(serverApp).toBeInstanceOf(ServerApp); // Check ServerApp Instance
        expect(typeof ServerApp.run).toBe("function"); // Check Static Method Of ServerApp Class
    });
});