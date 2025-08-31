// Dependency Inversion → main.ts depends on abstraction (ThreadSafeCounter), not direct buffer ops.
// Liskov Substitution → If we later create another counter type (say DistributedCounter), main.ts should still work.

import { ThreadSafeCounter } from "./ThreadSafeCounter";
import { Worker } from "worker_threads";

const NUM_WORKERS = 5;
const INCREMENTS_PER_WORKER = 10000;

const sharedBuffer = new SharedArrayBuffer(4) //4 bytes = Int32
const counter = new ThreadSafeCounter(sharedBuffer);

const workers: Promise<void>[] = [];

for (let i = 0; i < NUM_WORKERS; i++) {
    workers.push(new Promise<void>((resolve) => {
        const worker = new Worker('./worker.js', {
            workerData: {
                sharedBuffer: counter.getBuffer(),
                increments: INCREMENTS_PER_WORKER
            }
        });
        worker.on('exit', resolve);
    }));
}

Promise.all(workers).then(() => {
    console.log(`Final Counter value`, counter.getValue());
})
