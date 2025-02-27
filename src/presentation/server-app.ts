import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    name: string;
    path: string;
    show: boolean;
}

// Server Logic Class
export class ServerApp {
    static run({ base, limit, name, path, show }: RunOptions) {
        const table = new CreateTable()
            .execute({ base, limit });

        if (show) console.log(table);

        new SaveFile()
            .execute({ fileContent: table, path, fileName: name });
    }
}