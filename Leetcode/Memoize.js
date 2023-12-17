/**
 * @param {Function} fn
 */

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(limit = 1000) {
    this.size = 0;
    this.limit = limit;
    this.head = null;
    this.tail = null;
    this.cache = new Map();
  }

  get(key) {
    if (this.cache.has(key)) {
      let node = this.cache.get(key);
      this.remove(node);
      this.insertAtTop(node);
      return node.value;
    }

    return undefined;
  }

  set(key, value) {
    if (this.cache.has(key)) {
      let node = this.cache.get(key);
      this.remove(node);
      this.size--;
    }

    if (this.size >= this.limit) {
      this.remove(this.tail);
      this.size--;
    }

    let node = new Node(key, value);
    this.insertAtTop(node);
    this.cache.set(key, node);
    this.size++;
  }

  remove(node) {
    if (node.prev !== null) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next !== null) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }
  }

  insertAtTop(node) {
    node.next = this.head;
    node.prev = null;

    if (this.head !== null) {
      this.head.prev = node;
    }

    this.head = node;

    if (this.tail === null) {
      this.tail = node;
    }
  }
}

function memoize(fn) {
  const cache = new LRUCache();

  return function(...args) {
    const key = JSON.stringify(args);

    if (cache.get(key) !== undefined) {
      return cache.get(key);
    }

    const val = fn.apply(this, args);
    cache.set(key, val);

    return val;
  }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
