import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    show: boolean;
}

// Server Logic Class
export class ServerApp {
    static run({ base, limit, show }: RunOptions) {
        const table = new CreateTable()
            .execute({ base, limit });

        if (show) console.log(table);

        new SaveFile()
            .execute({ fileContent: table });
    }
}