// Separation of Concerns → Worker is not responsible for buffer creation or orchestration.
// Open/Closed Principle → Worker code doesn’t change if we add more workers or vary increments.

import { parentPort, workerData } from "worker_threads";
import { ThreadSafeCounter } from "./ThreadSafeCounter.js";

const { sharedBuffer, increments } = workerData;
const counter = new ThreadSafeCounter(sharedBuffer);

for (let i = 0; i < increments; i++) {
    counter.increment();
}

parentPort?.close();