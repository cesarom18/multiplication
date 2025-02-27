interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string;
}

interface CreateTableOptions {
    base: number;
    limit?: number;
}

export class CreateTable implements CreateTableUseCase {
    execute({ base, limit = 10 }: CreateTableOptions) {
        let content = "";
        for (let i = 0; i <= limit; i++) {
            content += `${base} x ${i} = ${base * i}\n`;
        }

        return content;
    }
}