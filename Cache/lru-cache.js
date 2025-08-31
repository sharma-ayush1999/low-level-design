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
var _LruCache_instances, _LruCache_capacity, _LruCache_cache, _LruCache_head, _LruCache_tail, _LruCache_size, _LruCache_formatNode, _LruCache_addNode, _LruCache_removeNode;
export class LruCache {
    constructor(capacity = 4) {
        _LruCache_instances.add(this);
        _LruCache_capacity.set(this, void 0);
        _LruCache_cache.set(this, void 0);
        _LruCache_head.set(this, void 0);
        _LruCache_tail.set(this, void 0);
        _LruCache_size.set(this, void 0);
        __classPrivateFieldSet(this, _LruCache_capacity, capacity, "f");
        __classPrivateFieldSet(this, _LruCache_head, { key: '0', value: '0', prev: null, next: null }, "f");
        __classPrivateFieldSet(this, _LruCache_tail, { key: '0', value: '0', prev: null, next: null }, "f");
        __classPrivateFieldSet(this, _LruCache_cache, new Map(), "f");
        __classPrivateFieldGet(this, _LruCache_head, "f").next = __classPrivateFieldGet(this, _LruCache_tail, "f");
        __classPrivateFieldGet(this, _LruCache_tail, "f").prev = __classPrivateFieldGet(this, _LruCache_head, "f");
        __classPrivateFieldSet(this, _LruCache_size, 0, "f");
    }
    get(key) {
        console.log(`GET: cache: ${key}`);
        if (!__classPrivateFieldGet(this, _LruCache_cache, "f").has(key)) {
            console.log(`GET: key doesn't exist in cache: ${key}`);
            return -1;
        }
        const node = __classPrivateFieldGet(this, _LruCache_cache, "f").get(key);
        console.log(`GET: Getting node from cache: ${__classPrivateFieldGet(this, _LruCache_instances, "m", _LruCache_formatNode).call(this, node)}`);
        if (!node)
            return -1;
        __classPrivateFieldGet(this, _LruCache_instances, "m", _LruCache_removeNode).call(this, node);
        console.log(`GET: Removing node from Linked List: ${__classPrivateFieldGet(this, _LruCache_instances, "m", _LruCache_formatNode).call(this, node)}`);
        __classPrivateFieldGet(this, _LruCache_instances, "m", _LruCache_addNode).call(this, node);
        console.log(`GET: Adding node into Linked List: ${__classPrivateFieldGet(this, _LruCache_instances, "m", _LruCache_formatNode).call(this, node)}`);
        return node?.value;
    }
    put(key, value) {
        var _a, _b;
        if (__classPrivateFieldGet(this, _LruCache_cache, "f").has(key)) {
            console.log(`PUT: Key exist in cache, updating the cache: ${key}`);
            const node = __classPrivateFieldGet(this, _LruCache_cache, "f").get(key);
            console.log(`PUT: Getting node from cache: ${__classPrivateFieldGet(this, _LruCache_instances, "m", _LruCache_formatNode).call(this, node)}`);
            if (node) {
                __classPrivateFieldGet(this, _LruCache_instances, "m", _LruCache_removeNode).call(this, node);
                console.log(`PUT: Removing node from Linked List: ${__classPrivateFieldGet(this, _LruCache_instances, "m", _LruCache_formatNode).call(this, node)}`);
                node.value = value;
                console.log(`PUT: Updating value of node into Linked List: ${node}`);
                __classPrivateFieldGet(this, _LruCache_cache, "f").set(key, node);
                console.log(`PUT: Updating value of cache: ${__classPrivateFieldGet(this, _LruCache_instances, "m", _LruCache_formatNode).call(this, node)}`);
                __classPrivateFieldGet(this, _LruCache_instances, "m", _LruCache_addNode).call(this, node);
                console.log(`PUT: Adding node into Linked List: ${__classPrivateFieldGet(this, _LruCache_instances, "m", _LruCache_formatNode).call(this, node)}`);
            }
        }
        else {
            if (__classPrivateFieldGet(this, _LruCache_cache, "f").size >= __classPrivateFieldGet(this, _LruCache_capacity, "f")) {
                console.log(`PUT: Capacity is full: SIZE = ${__classPrivateFieldGet(this, _LruCache_cache, "f").size}, Capacity = ${__classPrivateFieldGet(this, _LruCache_capacity, "f")}`);
                const lruNode = __classPrivateFieldGet(this, _LruCache_tail, "f").prev;
                console.log(`PUT: Prev node of tail: ${__classPrivateFieldGet(this, _LruCache_instances, "m", _LruCache_formatNode).call(this, lruNode)}`);
                __classPrivateFieldGet(this, _LruCache_cache, "f").delete(lruNode.key);
                console.log(`PUT: Removing key from cache: ${lruNode.key}`);
                __classPrivateFieldGet(this, _LruCache_instances, "m", _LruCache_removeNode).call(this, lruNode);
                console.log(`PUT: Removing node from Linked List: ${__classPrivateFieldGet(this, _LruCache_instances, "m", _LruCache_formatNode).call(this, lruNode)}`);
                __classPrivateFieldSet(this, _LruCache_size, (_a = __classPrivateFieldGet(this, _LruCache_size, "f"), _a--, _a), "f");
            }
            const node = {
                key, value, prev: null, next: null
            };
            console.log(`PUT: New node created: ${__classPrivateFieldGet(this, _LruCache_instances, "m", _LruCache_formatNode).call(this, node)}`);
            __classPrivateFieldGet(this, _LruCache_cache, "f").set(key, node);
            console.log(`PUT: Adding node into cache: ${__classPrivateFieldGet(this, _LruCache_instances, "m", _LruCache_formatNode).call(this, node)}`);
            __classPrivateFieldGet(this, _LruCache_instances, "m", _LruCache_addNode).call(this, node);
            console.log(`PUT: Adding node into Linked List: ${__classPrivateFieldGet(this, _LruCache_instances, "m", _LruCache_formatNode).call(this, node)}`);
            __classPrivateFieldSet(this, _LruCache_size, (_b = __classPrivateFieldGet(this, _LruCache_size, "f"), _b++, _b), "f");
        }
    }
}
_LruCache_capacity = new WeakMap(), _LruCache_cache = new WeakMap(), _LruCache_head = new WeakMap(), _LruCache_tail = new WeakMap(), _LruCache_size = new WeakMap(), _LruCache_instances = new WeakSet(), _LruCache_formatNode = function _LruCache_formatNode(node) {
    return `{ key: ${node.key}, value: ${node.value} }`;
}, _LruCache_addNode = function _LruCache_addNode(node) {
    if (!node)
        return;
    node.next = __classPrivateFieldGet(this, _LruCache_head, "f").next;
    node.prev = __classPrivateFieldGet(this, _LruCache_head, "f");
    __classPrivateFieldGet(this, _LruCache_head, "f").next.prev = node;
    __classPrivateFieldGet(this, _LruCache_head, "f").next = node;
}, _LruCache_removeNode = function _LruCache_removeNode(node) {
    if (!node)
        return;
    node.next.prev = node.prev;
    node.prev.next = node.next;
};
