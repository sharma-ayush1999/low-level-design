export class Logger {
    constructor(writers) {
        this.writers = writers;
    }
    static getInstance(writer = []) {
        if (!Logger.instance) {
            Logger.instance = new Logger(writer);
        }
        return Logger.instance;
    }
    async log(message) {
        const timeStamp = new Date().toISOString();
        const entry = `${message} --- ${timeStamp}\n`;
        await Promise.all(this.writers.map((writer) => writer.write(entry)));
    }
}
