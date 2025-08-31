// Design Principle Notes
// SRP (Single Responsibility) → This class only manages the counter (not worker orchestration).
// Encapsulation → Direct buffer access is hidden; workers only get buffer via getBuffer().
export class ThreadSafeCounter {
    constructor(sharedBuffer) {
        this.sharedBuffer = sharedBuffer;
        this.counter = new Int32Array(sharedBuffer);
    }
    increment() {
        Atomics.add(this.counter, 0, 1);
    }
    getValue() {
        return Atomics.load(this.counter, 0);
    }
    getBuffer() {
        return this.sharedBuffer;
    }
}
