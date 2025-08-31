var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FileWriter_filePath;
import { Mutex } from "async-mutex";
import { appendFile } from "fs/promises";
export class FileWriter {
    constructor(filePath) {
        _FileWriter_filePath.set(this, void 0);
        __classPrivateFieldSet(this, _FileWriter_filePath, filePath, "f");
    }
    async write(message) {
        const release = await FileWriter.mutex.acquire();
        try {
            return await appendFile(__classPrivateFieldGet(this, _FileWriter_filePath, "f"), message);
        }
        catch (error) {
            console.log(`Error while writing into file: ${error.message}`);
        }
        finally {
            release();
        }
    }
}
_FileWriter_filePath = new WeakMap();
FileWriter.mutex = new Mutex();
