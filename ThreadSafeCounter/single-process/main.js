import { ThreadSafeCounter } from "./counter";
async function main() {
    const counter = ThreadSafeCounter.getInstance();
    await Promise.all(Array.from({ length: 100 }, () => counter.increment()));
    console.log("Final Counter:", await counter.getValue()); // Should be 100
}
main();
