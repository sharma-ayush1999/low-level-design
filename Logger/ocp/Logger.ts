import { IWriter } from "./models/types";

export class Logger {
    private static instance: Logger;
    private writers: IWriter[];

    private constructor(writers: IWriter[]) {
        this.writers = writers;
    }

    public static getInstance(writer: IWriter[] = []) {
        if (!Logger.instance) {
            Logger.instance = new Logger(writer)
        }
        return Logger.instance;
    }

    public async log(message: string): Promise<void> {
        const timeStamp = new Date().toISOString();
        const entry = `${message} --- ${timeStamp}\n`;
        await Promise.all(this.writers.map((writer) => writer.write(entry)));
    }
}