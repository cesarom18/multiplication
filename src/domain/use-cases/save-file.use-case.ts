import fs from "fs";

interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}

interface Options {
    fileContent: string;
    path?: string;
    fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
    execute({ fileContent, path = "outputs", fileName = "table" }: Options) {
        try {
            fs.mkdirSync(path, { recursive: true }); // Be Sure To Create Directory
            fs.writeFileSync(`${path}/${fileName}.txt`, fileContent);
            console.log("[SUCCESS]: Table file created");
            return true;
        } catch (error) {
            console.log("[ERROR]: File not created");
            console.log(error);
            return false;
        }
    }
}