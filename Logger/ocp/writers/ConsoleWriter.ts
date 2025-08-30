import { IWriter } from "../models/types";

export class ConsoleWriter implements IWriter {
    async write(message: string): Promise<void> {
        console.log(message)
    }
}