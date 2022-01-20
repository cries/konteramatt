/** 
 * Base Client class
 * @type {Client} 
*/
export default class Client {
    constructor(name) {
        this.name = name;
        this.key = Math.random;
        this.ready = false;
        this.socketId = null;
    }

    setName(name) {
        this.name = name;
    }

    getName(name) {
        return this.name;
    }

    setKey(key) {
        this.key = key;
    }

    getKey() {
        return this.key;
    }

    setReady(ready) {
        this.ready = ready;
    }

    getReady() {
        return this.ready;
    }

    setSocketId(socketId) {
        this.socketId = socketId;
    }

    getSocketId() {
        return this.socketId;
    }
}