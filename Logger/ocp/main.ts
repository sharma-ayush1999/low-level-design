import { Logger } from "./Logger";
import { ConsoleWriter } from "./writers/ConsoleWriter";
import { FileWriter } from "./writers/FileWriter";

const ConsoleLogger = new ConsoleWriter();
const FileLogger = new FileWriter('app.log')
const logger = Logger.getInstance([ConsoleLogger, FileLogger]);

async function main() {
    logger.log('testing');

}

main()