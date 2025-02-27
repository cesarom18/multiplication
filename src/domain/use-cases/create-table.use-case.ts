interface CreateTableUseCase {
    execute: (options: Options) => string;
}

interface Options {
    base: number;
    limit?: number;
}

export class CreateTable implements CreateTableUseCase {
    execute({ base, limit = 10 }: Options) {
        let content = "";
        for (let i = 0; i <= limit; i++) {
            content += `${base} x ${i} = ${base * i}\n`;
        }

        return content;
    }
}