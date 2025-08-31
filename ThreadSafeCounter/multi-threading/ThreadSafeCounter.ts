// Design Principle Notes
// SRP (Single Responsibility) → This class only manages the counter (not worker orchestration).
// Encapsulation → Direct buffer access is hidden; workers only get buffer via getBuffer().

export class ThreadSafeCounter {
    private readonly counter: Int32Array;
    constructor(private sharedBuffer: SharedArrayBuffer) {
        this.counter = new Int32Array(sharedBuffer)
    }

    public increment(): void {
        Atomics.add(this.counter, 0, 1);
    }

    public getValue(): number {
        return Atomics.load(this.counter, 0);
    }

    public getBuffer(): SharedArrayBuffer {
        return this.sharedBuffer;
    }
}