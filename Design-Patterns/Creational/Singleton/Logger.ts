import { Mutex } from 'async-mutex'
import { appendFile } from 'fs/promises';

export class Logger {
    private static instance: Logger;
    private static mutex: Mutex = new Mutex();
    private logFile: string;

    private constructor(logFile: string) {
        this.logFile = logFile
    }

    public static getInstance(logFile: string = 'app.log') {
        if (!Logger.instance) {
            Logger.instance = new Logger(logFile)
        }
        return Logger.instance;
    }

    async append(data: string) {
        const release = await Logger.mutex.acquire();
        try {
            const timeStamp = new Date().toISOString();
            await appendFile(this.logFile, `${timeStamp}: ${data}\n`)
            console.log("Log file", timeStamp, data)
        } catch (error) {
            console.log(error)
        } finally {
            release()
        }
    }
}

(async () => {
    const logger = Logger.getInstance("app.log")
    await Promise.all([logger.append(`test 1`),
    logger.append(`test 2`),
    logger.append(`test 3`)])
})()