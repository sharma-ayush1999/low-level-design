export interface IWriter {
    write(message: string): Promise<void>;
}