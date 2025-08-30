import { LruCache } from "./lru-cache";

const lruCache = new LruCache(4);

function main() {
    lruCache.put("key1", "value1");
    lruCache.put("key2", "value2");
    lruCache.put("key3", "value3");
    lruCache.put("key4", "value4");
    lruCache.get("key1");
    lruCache.get("key2");
    lruCache.put("key5", "value5");
    lruCache.put("key5", "value5");
}

main()