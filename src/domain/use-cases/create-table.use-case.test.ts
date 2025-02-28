import { CreateTable } from "./create-table.use-case";

describe("CreateTableUseCase", () => {
    test("Should create table with default values", () => {
        const table = new CreateTable();
        const content = table.execute({ base: 4 });
        const rows = content.split("\n").length;

        expect(table).toBeInstanceOf(CreateTable); // Check Instance Of CreateTable Class
        expect(rows).toBe(10); // Check The Number Of Multiplication By Default
        expect(content).toContain("4 x 1 = 4"); // Check First Multiplication
        expect(content).toContain("4 x 10 = 40"); // Check Last Multiplication
    });

    test("Should create table with custom values", () => {
        const options = { base: 5, limit: 15 };
        const table = new CreateTable();
        const content = table.execute(options);
        const rows = content.split("\n").length;

        expect(rows).toBe(options.limit); // Check The Number Of Multiplication With Custom Limit
        expect(content).toContain("5 x 1 = 5"); // Check First Multiplication
        expect(content).toContain("5 x 15 = 75"); // Check Last Multiplication
    });
});