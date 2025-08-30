interface Node {
    key: string;
    value: string;
    prev: Node | null;
    next: Node | null;
}

export class LruCache {
    #capacity: number;
    #cache: Map<string, Node>;
    #head: Node;
    #tail: Node;
    #size: number;
    constructor(capacity: number = 4) {
        this.#capacity = capacity;
        this.#head = { key: '0', value: '0', prev: null, next: null };
        this.#tail = { key: '0', value: '0', prev: null, next: null };
        this.#cache = new Map<string, Node>();
        this.#head.next = this.#tail;
        this.#tail.prev = this.#head;
        this.#size = 0;
    }

    #formatNode(node: Node) {
        return `{ key: ${node.key}, value: ${node.value} }`
    }


    get(key: string) {
        console.log(`GET: cache: ${key}`);
        if (!this.#cache.has(key)) {
            console.log(`GET: key doesn't exist in cache: ${key}`);
            return -1;
        }
        const node = this.#cache.get(key);
        console.log(`GET: Getting node from cache: ${this.#formatNode(node!)}`);
        if (!node) return -1;
        this.#removeNode(node);
        console.log(`GET: Removing node from Linked List: ${this.#formatNode(node!)}`);
        this.#addNode(node);
        console.log(`GET: Adding node into Linked List: ${this.#formatNode(node!)}`);
        return node?.value
    }

    put(key: string, value: string) {
        if (this.#cache.has(key)) {
            console.log(`PUT: Key exist in cache, updating the cache: ${key}`);
            const node = this.#cache.get(key);
            console.log(`PUT: Getting node from cache: ${this.#formatNode(node!)}`);
            if (node) {
                this.#removeNode(node);
                console.log(`PUT: Removing node from Linked List: ${this.#formatNode(node!)}`);
                node.value = value;
                console.log(`PUT: Updating value of node into Linked List: ${node}`);
                this.#cache.set(key, node);
                console.log(`PUT: Updating value of cache: ${this.#formatNode(node!)}`);
                this.#addNode(node);
                console.log(`PUT: Adding node into Linked List: ${this.#formatNode(node!)}`);
            }
        } else {
            if (this.#cache.size >= this.#capacity) {
                console.log(`PUT: Capacity is full: SIZE = ${this.#cache.size}, Capacity = ${this.#capacity}`);
                const lruNode = this.#tail.prev!;
                console.log(`PUT: Prev node of tail: ${this.#formatNode(lruNode!)}`);
                this.#cache.delete(lruNode.key);
                console.log(`PUT: Removing key from cache: ${lruNode.key}`);
                this.#removeNode(lruNode);
                console.log(`PUT: Removing node from Linked List: ${this.#formatNode(lruNode!)}`);
                this.#size--;
            }
            const node = {
                key, value, prev: null, next: null
            }
            console.log(`PUT: New node created: ${this.#formatNode(node!)}`);
            this.#cache.set(key, node);
            console.log(`PUT: Adding node into cache: ${this.#formatNode(node!)}`);
            this.#addNode(node);
            console.log(`PUT: Adding node into Linked List: ${this.#formatNode(node!)}`);
            this.#size++;
        }
    }

    #addNode(node: Node) {
        if (!node) return
        node.next = this.#head.next;
        node.prev = this.#head;
        this.#head.next!.prev = node;
        this.#head.next = node;
    }

    #removeNode(node: Node) {
        if (!node) return
        node.next!.prev = node.prev;
        node.prev!.next = node.next;
    }
}