import fs from "fs";

import { SaveFile } from "./save-file.use-case";

describe("SaveFileUseCase", () => {
    const custonOptions = {
        fileContent: "test content",
        path: "test-output",
        fileName: "test-name"
    };
    const customFilePath = `${custonOptions.path}/${custonOptions.fileName}.txt`;

    // Make Sure To Remove Outputs/Custom Directory After Of This Test Suites
    afterEach(() => {
        const outputDir = fs.existsSync("outputs");
        const customDir = fs.existsSync(custonOptions.path);

        if (outputDir) fs.rmSync("outputs", { recursive: true });
        if (customDir) fs.rmSync(custonOptions.path, { recursive: true });
    });

    test("Should save file with default values", () => {
        const options = { fileContent: "test content" };
        const saveFile = new SaveFile();
        const result = saveFile.execute(options);
        const path = "outputs/table.txt";
        const checkFile = fs.existsSync(path);
        const checkContent = fs.readFileSync(path, { encoding: "utf8" });

        expect(saveFile).toBeInstanceOf(SaveFile); // Check Instance Of SaveFile Class
        expect(checkFile).toBe(true); // Check If File Was Created
        expect(result).toBe(true); // Make Sure To Return True If File And Directory Was Created
        expect(checkContent).toContain(options.fileContent); // Check File Test Content
    });

    test("Should save file with custom values", () => {
        const saveFile = new SaveFile();
        const result = saveFile.execute(custonOptions);
        const checkFile = fs.existsSync(customFilePath);
        const checkContent = fs.readFileSync(customFilePath, { encoding: "utf8" });

        expect(checkFile).toBe(true); // Check If File Was Created
        expect(result).toBe(true); // Make Sure To Return True If File And Directory Was Created
        expect(checkContent).toContain(custonOptions.fileContent); // Check File Test Content
    });
});