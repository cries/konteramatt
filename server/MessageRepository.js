import Message from './Message.js';

/** 
 * Message storage class
 * @type {MessageRepository} 
*/
export default class MessageRepository {
    constructor() {
        this.messages = [];
    }

    clear() {
        this.messages = [];
    }

    insert(message) {
        if (message instanceof Message) {
            this.messages.push(message);
        }
    }

    findAll() {
        return this.messages;
    }

    findByClient(client){
        return this.messages.find((message) => {
            return message.socketId = client.socketId;
        })
    }
}