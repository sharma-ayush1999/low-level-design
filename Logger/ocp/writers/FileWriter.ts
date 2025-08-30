import { Mutex } from "async-mutex";
import { IWriter } from "../models/types";
import { appendFile } from "fs/promises";

export class FileWriter implements IWriter {
    #filePath: string;
    private static mutex = new Mutex();
    constructor(filePath: string) {
        this.#filePath = filePath;
    }

    public async write(message: string): Promise<void> {
        const release = await FileWriter.mutex.acquire();
        try {
            return await appendFile(this.#filePath, message)
        } catch (error) {
            console.log(`Error while writing into file: ${error.message}`)
        } finally {
            release()
        }
    }
}