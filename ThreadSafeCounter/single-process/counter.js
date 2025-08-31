//This code ensures atomicity for a single process
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
var _a, _ThreadSafeCounter_counter, _ThreadSafeCounter_instance, _ThreadSafeCounter_mutex;
import { Mutex } from "async-mutex";
export class ThreadSafeCounter {
    constructor() {
        _ThreadSafeCounter_counter.set(this, void 0);
        __classPrivateFieldSet(this, _ThreadSafeCounter_counter, 0, "f");
    }
    static getInstance() {
        if (!__classPrivateFieldGet(this, _a, "f", _ThreadSafeCounter_instance)) {
            __classPrivateFieldSet(this, _a, new _a(), "f", _ThreadSafeCounter_instance);
        }
        return __classPrivateFieldGet(this, _a, "f", _ThreadSafeCounter_instance);
    }
    async increment() {
        var _b;
        const release = await __classPrivateFieldGet(_a, _a, "f", _ThreadSafeCounter_mutex).acquire();
        try {
            __classPrivateFieldSet(this, _ThreadSafeCounter_counter, (_b = __classPrivateFieldGet(this, _ThreadSafeCounter_counter, "f"), _b++, _b), "f");
            return __classPrivateFieldGet(this, _ThreadSafeCounter_counter, "f");
        }
        finally {
            release();
        }
    }
    async getValue() {
        const release = await __classPrivateFieldGet(_a, _a, "f", _ThreadSafeCounter_mutex).acquire();
        try {
            return __classPrivateFieldGet(this, _ThreadSafeCounter_counter, "f");
        }
        finally {
            release();
        }
    }
}
_a = ThreadSafeCounter, _ThreadSafeCounter_counter = new WeakMap();
_ThreadSafeCounter_instance = { value: void 0 };
_ThreadSafeCounter_mutex = { value: new Mutex() };
