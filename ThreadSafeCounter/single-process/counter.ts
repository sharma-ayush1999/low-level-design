//This code ensures atomicity for a single process

import { Mutex } from "async-mutex";

export class ThreadSafeCounter {
    #counter: number;
    static #instance: ThreadSafeCounter;
    static #mutex = new Mutex();
    private constructor() { this.#counter = 0 }

    public static getInstance() {
        if (!this.#instance) {
            this.#instance = new ThreadSafeCounter();
        }
        return this.#instance;
    }

    public async increment(): Promise<number> {
        const release = await ThreadSafeCounter.#mutex.acquire();
        try {
            this.#counter++;
            return this.#counter;
        } finally { release() }
    }

    public async getValue(): Promise<number> {
        const release = await ThreadSafeCounter.#mutex.acquire();
        try {
            return this.#counter;
        }
        finally {
            release()
        }
    }
}