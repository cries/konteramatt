/** 
 * Client storage class
 * @type {ClientRepository} 
*/
export default class ClientRepository {
    constructor() {
        this.clients = [];
    }

    insert(client) {
        this.clients.push(client);
        return client;
    }

    findAll() {
        return this.clients;
    }

    get(index) {
        return this.clients[index];
    }

    findByName(name) {
        this.clients.find((client) => {
            return client.name === name;
        });
    }

    findByCode(code) {
        this.clients.find((client) => {
            return client.code === code;
        });
    }

    findByReady(ready) {
        this.clients.find((client) => {
            return client.ready === ready;
        });
    }

    findBySocketId(socketId) {
        this.clients.find((client) => {
            return client.socketId === socketId;
        });
    }

    count() {
        return this.clients.length;
    }
}