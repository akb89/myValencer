
class CacheElement {
    constructor(content) {
        this._content = content;
        this._count = 0;
    }

    get content() {
        return this._content;
    }

    get count() {
        return this._count;
    }

    incrementAndGet() {
        this._count += 1;
        return this;
    }
}

class Cache {
    constructor(max = 1000) {
        this._max = max;
        this._container = {};
        this._length = 0;
    }

    add(key, content) {
        this.hitAndStore(key, content);
    }

    hit(key) {
        if (key in this._container) {
            return this._container[key].incrementAndGet().content;
        }
        return null;
    }

    hitAndStore(key, content) {
        const res = this.hit(key);
        if (res == null && this._length < this._max) {
            this._container[key] = new CacheElement(content).incrementAndGet();
            this._length += 1;
            return null;
        }
        return res;
    }
}

module.exports = Cache;
